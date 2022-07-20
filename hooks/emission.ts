import { useCallback, useEffect, useState } from 'react'
import { useProfile } from './profile'

export const useEmissionResult = () => {
  const { profile } = useProfile()
  const [loading, setLoading] = useState(true)
  const [mobility, setMobility] = useState<{ key: string; value: number }[]>([])

  const uniq = (array: any[]): any[] => {
    const knownElements = new Set()
    for (const elem of array) {
      knownElements.add(elem)
    }
    return Array.from(knownElements)
  }

  const calcEmission = useCallback(
    (category: Questions.QuestionCategory) => {
      const result: { key: string; value: number }[] = []
      const categoryEstimations = profile?.estimations.filter(
        (e) => e.domain === category
      )
      const categoryBaselines = profile?.baselines.filter(
        (b) => b.domain === category
      )
      const subdomains = uniq(
        categoryBaselines?.map((cb) => cb.subdomain) || []
      )

      for (const subdomain of subdomains) {
        result.push({ key: subdomain, value: 0 })
        let current = result.find((r) => r.key === subdomain)
        if (!current) break

        const items =
          categoryEstimations
            ?.filter((ce) => ce.subdomain === subdomain)
            .map((si) => si.item) || []

        for (const item of items) {
          let amount = categoryEstimations?.find(
            (ce) =>
              ce.domain === category && ce.item === item && ce.type === 'amount'
          )?.value
          if (amount === undefined) {
            amount =
              categoryBaselines?.find(
                (bl) =>
                  bl.domain === category &&
                  bl.item === item &&
                  bl.type === 'amount'
              )?.value || 0
          }
          let intensity = categoryEstimations?.find(
            (ce) =>
              ce.domain === category &&
              ce.item === item &&
              ce.type === 'intensity'
          )?.value
          if (intensity === undefined) {
            intensity =
              categoryBaselines?.find(
                (bl) =>
                  bl.domain === category &&
                  bl.item === item &&
                  bl.type === 'intensity'
              )?.value || 0
          }
          const emission = Number(amount) * Number(intensity)

          current.value = current.value + emission
        }
      }
      result.push({
        key: 'total',
        value: Object.values(result).reduce((total, e) => {
          return total + e.value
        }, 0)
      })
      return result
    },
    [profile]
  )

  useEffect(() => {
    if (profile) {
      const mobilityEmission = calcEmission('mobility')
      setMobility(mobilityEmission)
      setLoading(false)
    }
  }, [profile])

  return { mobility, loading }
}
