declare namespace Profile {
  interface Profile {
    actionIntensityRates: Actions.ActionIntensityRate[]
    id: string
    shareId: string
    actions: ActionItem[]
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
    additional_info?: any
  }

  interface EmissionItem {
    domain: Questions.QuestionCategory
    item: string
    subdomain: string
    type: 'amount' | 'intensity'
    unit: string
    value: value
  }

  interface ActionItem {
    domain: Questions.QuestionCategory
    item: string
    option: string
    subdomain: string
    type: 'amount' | 'intensity'
    unit: string
    value: value
  }
}
