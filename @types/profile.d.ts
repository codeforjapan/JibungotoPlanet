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

  interface Baseline {}

  interface Estimation {}
}
