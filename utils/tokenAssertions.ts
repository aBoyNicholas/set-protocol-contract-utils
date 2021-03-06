import * as chai from 'chai';

import ChaiSetup from './chaiSetup';
ChaiSetup.configure();
const { expect } = chai;

// For solidity function calls that violate require()
export async function expectRevertError(asyncTxn: any) {
  try {
    await asyncTxn;
    throw new Error('Did not throw');
  } catch (e) {
    assertCertainError(e, 'revert');
  }
}

// For solidity function calls that do not violate require()
export async function expectNoRevertError(asyncTxn: any) {
  try {
    await asyncTxn;
    expect(true).to.be.true;
  } catch (e) {
    throw new Error('Error thrown');
  }
}

// For solidity function calls that violate assert()
export async function expectInvalidOpcodeError(asyncTxn: any) {
  try {
    await asyncTxn;
    throw new Error('Did not throw');
  } catch (e) {
    assertCertainError(e, 'invalid opcode');
  }
}

// Helper function
function assertCertainError(error: Error, expected_error_msg: string) {
  // This complication is so that the actual error will appear in truffle test output
  const message = error.message;
  const matchedIndex = message.search(expected_error_msg);
  let matchedString = message;
  if (matchedIndex >= 0) {
    matchedString = message.substring(matchedIndex, matchedIndex + expected_error_msg.length);
  }
  expect(matchedString).to.equal(expected_error_msg);
}