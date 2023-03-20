import { useCallback, useEffect, useState } from 'react'
import { signMessage } from '@wagmi/core'
import axios from 'axios'
import api from 'utils/api'
import { useUser } from '@auth0/nextjs-auth0/client'

export const useAccountIntegration = () => {
  const [isLoading, setLoading] = useState(false)
  const [integrated, setIntegrated] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    const fetch = async () => {
      if (!user) return
      try {
        const data = await api.get(
          `/auth/integrate-wallet?user_id=${encodeURI(user.sub!)}`
        )
        if (data) setIntegrated(true)
      } catch (error) {
        setIntegrated(false)
      }
    }
    fetch()
  }, [user])

  const integrate = useCallback(async () => {
    if (!user) return
    setLoading(true)
    const signature = await signMessage({ message: 'salt-sample-89d0fhqw' })
    await api.post('/auth/integrate-wallet', {
      message: 'salt-sample-89d0fhqw',
      signature,
      user_id: user.sub
    })
    setLoading(false)
    setIntegrated(true)
  }, [user])

  return { integrate, isLoading, integrated }
}
