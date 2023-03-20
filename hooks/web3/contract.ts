import { useContract, useProvider } from 'wagmi'
import ActionRegistoryAbi from 'constants/web3/abi/ActionRegistory.json'
import { ActionRegistory } from 'typechain-types'

export const useActionRegistoryContract = () => {
  const provider = useProvider()

  const contract = useContract({
    address: process.env.NEXT_PUBLIC_ACTION_REGISTORY_ADDR! as `0x${string}`,
    abi: ActionRegistoryAbi.abi,
    signerOrProvider: provider
  }) as ActionRegistory | null

  return contract
}
