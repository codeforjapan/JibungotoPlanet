import { useEffect, useState } from 'react'
import { signMessage } from '@wagmi/core'
import axios from 'axios'

export const useAccountIntegration = () => {
  const [isLoading, setLoading] = useState(false)
  const [integrated, setIntegrated] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          'https://ss3qmhdcul.execute-api.localhost.localstack.cloud:4566/local/auth/integrate-wallet'
        )
        console.log(data)
        setIntegrated(true)
      } catch (error) {
        setIntegrated(false)
      }
    }
    fetch()
  }, [])

  const integrate = async () => {
    setLoading(true)
    const signature = await signMessage({ message: 'salt-sample-89d0fhqw' })
    const { data } = await axios.post(
      'https://ss3qmhdcul.execute-api.localhost.localstack.cloud:4566/local/auth/integrate-wallet',
      {
        message: 'salt-sample-89d0fhqw',
        signature
      }
    )
    console.log(data)
    setLoading(false)
  }

  return { integrate, isLoading }
}
