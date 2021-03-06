require('module-alias/register');

import * as ABIDecoder from 'abi-decoder';
import * as chai from 'chai';
import { BigNumber } from 'bignumber.js';
import { Address } from 'set-protocol-utils';
import * as setProtocolUtils from 'set-protocol-utils';

import ChaiSetup from '@utils/chaiSetup';
import { BigNumberSetup } from '@utils/bigNumberSetup';
import { AuthorizableMockContract } from '@utils/contracts';
import { getExpectedAddAuthorizedLog, getExpectedRemoveAuthorizedLog } from '@utils/contract_logs/authorizable';
import { expectRevertError } from '@utils/tokenAssertions';
import { getWeb3 } from '@utils/web3Helper';

import { PermissionHelper } from '@utils/helpers/permissionHelper';

BigNumberSetup.configure();
ChaiSetup.configure();
const web3 = getWeb3();
const Authorizable = artifacts.require('Authorizable');
const { SetProtocolTestUtils: SetTestUtils } = setProtocolUtils;
const setTestUtils = new SetTestUtils(web3);
const { expect } = chai;

contract('Authorizable', accounts => {
  const [
    ownerAccount,
    otherAccount,
    authorizedAccount,
    authAccount1,
    authAccount2,
  ] = accounts;

  let authorizableContract: AuthorizableMockContract;
  const permissionHelper = new PermissionHelper(ownerAccount);

  before(async () => {
    ABIDecoder.addABI(Authorizable.abi);
  });

  beforeEach(async () => {
    authorizableContract = await permissionHelper.deployAuthorizableMockAsync(ownerAccount);
  });

  after(async () => {
    ABIDecoder.removeABI(Authorizable.abi);
  });

  describe('#onlyAuthorized', async () => {
    let subjectUint: BigNumber;
    let subjectCaller: Address = ownerAccount;

    beforeEach(async () => {
      subjectUint = new BigNumber(5);
      subjectCaller = ownerAccount;
    });

    async function subject(): Promise<string> {
      return authorizableContract.testAuthorizable.sendTransactionAsync(
        subjectUint,
        { from: subjectCaller },
      );
    }

    it('sets the uint correctly', async () => {
      await subject();

      const storedUint = await authorizableContract.testUint.callAsync();
      expect(storedUint).to.eql(subjectUint);
    });

    describe('when the caller is not authorized', async () => {
      beforeEach(async () => {
        subjectCaller = otherAccount;
      });

      it('should revert', async () => {
        await expectRevertError(subject());
      });
    });
  });

  describe('#addAuthorizedAddress', async () => {
    let caller: Address = ownerAccount;

    afterEach(async () => {
      caller = ownerAccount;
    });

    async function subject(): Promise<string> {
      return authorizableContract.addAuthorizedAddress.sendTransactionAsync(
        authorizedAccount,
        { from: caller },
      );
    }

    it('sets authorized mapping correctly', async () => {
      await subject();

      const storedAuthAddress = await authorizableContract.authorized.callAsync(
        authorizedAccount,
      );
      expect(storedAuthAddress).to.eql(true);
    });

    it('sets authorities array correctly', async () => {
      await subject();

      const authoritiesArray = await authorizableContract.getAuthorizedAddresses.callAsync();

      expect(authoritiesArray.length).to.eql(2);
      expect(authoritiesArray[1]).to.eql(authorizedAccount);
    });

    it('emits correct AddressAuthorized log', async () => {
      const txHash = await subject();

      const formattedLogs = await setTestUtils.getLogsFromTxHash(txHash);
      const expectedLogs = getExpectedAddAuthorizedLog(
        authorizedAccount,
        caller,
        authorizableContract.address,
      );

      await SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs);
    });

    describe('when the caller is not the owner of the contract', async () => {
      beforeEach(async () => {
        caller = otherAccount;
      });

      it('should revert', async () => {
        await expectRevertError(subject());
      });
    });

    describe('when the passed address is already authorized', async () => {
      beforeEach(async () => {
        await authorizableContract.addAuthorizedAddress.sendTransactionAsync(
          authorizedAccount,
          { from: caller },
        );
      });

      it('should revert', async () => {
        await expectRevertError(subject());
      });
    });
  });

  describe('#removeAuthorizedAddress', async () => {
    let caller: Address = ownerAccount;
    let addressToRemove: Address = authorizedAccount;

    beforeEach(async () => {
      const authAccountArray: Address[] = [authAccount1, authAccount2, authorizedAccount];
      for (const account of authAccountArray) {
        await permissionHelper.addAuthorizationAsync(authorizableContract, account);
      }
    });

    afterEach(async () => {
      caller = ownerAccount;
      addressToRemove = authorizedAccount;
    });

    async function subject(): Promise<string> {
      return authorizableContract.removeAuthorizedAddress.sendTransactionAsync(
        addressToRemove,
        { from: caller },
      );
    }

    it('removes address from authorized mapping', async () => {
      await subject();

      const storedAuthAddress = await authorizableContract.authorized.callAsync(
        addressToRemove,
      );
      expect(storedAuthAddress).to.eql(false);
    });

    it('removes address from authorities array', async () => {
      await subject();

      const newAuthoritiesArray = await authorizableContract.getAuthorizedAddresses.callAsync();
      expect(newAuthoritiesArray).to.not.include(addressToRemove);
    });

    it('emits correct AuthorizedAddressRemoved log', async () => {
      const txHash = await subject();

      const formattedLogs = await setTestUtils.getLogsFromTxHash(txHash);
      const expectedLogs = getExpectedRemoveAuthorizedLog(
        addressToRemove,
        caller,
        authorizableContract.address,
      );

      await SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs);
    });

    describe('when the caller is not the owner of the contract', async () => {
      beforeEach(async () => {
        caller = otherAccount;
      });

      it('should revert', async () => {
        await expectRevertError(subject());
      });
    });

    describe('when the passed address is not authorized', async () => {
      beforeEach(async () => {
        addressToRemove = otherAccount;
      });

      it('should revert', async () => {
        await expectRevertError(subject());
      });
    });
  });
});
