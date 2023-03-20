import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import { ActionRegistory } from 'typechain-types'
import { useActionRegistoryContract } from './contract'
import { useAccount } from 'wagmi'

export const useActionRegistory = () => {
  const [actions, setActions] = useState<{
    [key: number]: ActionRegistory.ActionStructOutput
  }>({})
  const [approvedIds, setApprovedIds] = useState<number[]>([])
  const registoryContract = useActionRegistoryContract()
  const { address } = useAccount()

  useEffect(() => {
    const fetch = async () => {
      if (!registoryContract) return
      const registerLogs = await registoryContract.queryFilter(
        registoryContract.filters.CreateAction(
          process.env.NEXT_PUBLIC_COMPANY_WALLET_ADDR!,
          null
        )
      )
      const approveLogs = await registoryContract.queryFilter(
        registoryContract.filters.Approve(address, null)
      )
      const _actions: { [key: number]: ActionRegistory.ActionStructOutput } = {}
      for (const log of registerLogs) {
        if (!log.args) return
        const actionId = (log.args[1] as BigNumber).toNumber()
        const action: ActionRegistory.ActionStructOutput =
          await registoryContract.getActionById(actionId)
        _actions[actionId] = action
      }
      setActions(_actions)
      setApprovedIds(
        approveLogs.map((log) => log.args[1].map((l) => l.toNumber())).flat()
      )
    }
    fetch()
  }, [registoryContract])

  return { actions, approvedIds }
}
