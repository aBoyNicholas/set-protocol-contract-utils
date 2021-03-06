/*
    Copyright 2020 Set Labs Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

pragma solidity 0.5.7;

import { SafeMath } from "openzeppelin-solidity/contracts/math/SafeMath.sol";
import { CommonMath } from "./CommonMath.sol";


/**
 * @title CompoundUtils
 * @author Set Protocol
 *
 * Collection of common Compound functions for use in Set Protocol contracts
 */
library CompoundUtils
{
    using SafeMath for uint256;

    /*
     * Utility function to convert a specified amount of cTokens to underlying 
     * token based on the cToken's exchange rate
     *
     * @param _cTokenAmount         Amount of cTokens that will be converted to underlying
     * @param _cTokenExchangeRate   Exchange rate for the cToken
     * @return underlyingAmount     Amount of underlying ERC20 tokens
     */
    function convertCTokenToUnderlying(
        uint256 _cTokenAmount,
        uint256 _cTokenExchangeRate
    )
    internal
    pure
    returns (uint256)
    {
        // Underlying units is calculated as cToken quantity * exchangeRate divided by 10 ** 18 and rounded up.
        uint256 a = _cTokenAmount.mul(_cTokenExchangeRate);
        uint256 b = CommonMath.scaleFactor();

        // Round value up
        return CommonMath.divCeil(a, b);
    }
}