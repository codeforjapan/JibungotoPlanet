import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import ActionRegistoryAbi from 'constants/web3/abi/ActionRegistory.json'

export const useApproveAction = (actionId: number) => {
  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_ACTION_REGISTORY_ADDR! as `0x${string}`,
    abi: ActionRegistoryAbi.abi,
    functionName: 'approve',
    args: [[actionId]]
  })

  const { write: approve, isSuccess, isLoading } = useContractWrite(config)

  return { approve, isSuccess, isLoading }
}
