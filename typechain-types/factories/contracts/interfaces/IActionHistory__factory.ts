/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IActionHistory,
  IActionHistoryInterface,
} from "../../../contracts/interfaces/IActionHistory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "actionId",
            type: "uint256",
          },
          {
            internalType: "enum IActionHistory.ActionRecordStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct IActionHistory.ActionRecord",
        name: "record",
        type: "tuple",
      },
    ],
    name: "delegatedRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "actionId",
            type: "uint256",
          },
          {
            internalType: "enum IActionHistory.ActionRecordStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct IActionHistory.ActionRecord",
        name: "record",
        type: "tuple",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "enum IActionHistory.ActionRecordStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "updateHistoryStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IActionHistory__factory {
  static readonly abi = _abi;
  static createInterface(): IActionHistoryInterface {
    return new utils.Interface(_abi) as IActionHistoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IActionHistory {
    return new Contract(address, _abi, signerOrProvider) as IActionHistory;
  }
}
