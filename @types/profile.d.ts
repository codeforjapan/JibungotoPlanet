declare namespace Profile {
  interface Profile {
    actionIntensityRates: Actions.ActionIntensityRate[]
    id: string
    shareId: string
    baselines: EmissionItem[]
    estimations: EmissionItem[]
    createdAt: Date
    updatedAt: Date
    mobilityAnswer?: any
    housingAnswer?: any
    foodAnswer?: any
    otherAnswer?: any
    gender?: string
    age?: string
    region?: string
  }

  interface EmissionItem {
    domain: Questions.QuestionCategory
    item: string
    subdomain: string
    type: 'amount' | 'intensity'
    unit: string
    value: value
  }
}
