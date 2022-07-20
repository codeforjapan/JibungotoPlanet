declare namespace Profile {
  interface Profile {
    id: string
    shareId: string
    baselines: Baseline[]
    estimations: Estimation[]
    createdAt: Date
    updatedAt: Date
    mobilityAnswer?: any
    housingAnswer?: any
    foodAnswer?: any
    otherAnswer?: any
  }

  interface Baseline {
    citations: string
    domain: Questions.QuestionCategory
    item: string
    subdomain: string
    type: 'amount' | 'intensity'
    unit: string
    value: value
  }

  interface Estimation {
    domain: Questions.QuestionCategory
    item: string
    subdomain: string
    type: 'amount' | 'intensity'
    unit: string
    value: number
  }
}
