declare namespace Actions {
  interface Action {
    id: number
    domain: string
    option: string
    category: ActionCategory
    label: string // アクションラベル
    description: string //説明
    reductionEffect: number
    actionIntensityRate: ActionIntensityRate | null // 標準の削減施策の実施率 apiから取得
    checked: boolean // 選択されたかどうか
  }

  type ActionCategory = 'food' | 'mobility' | 'housing' | 'other'
  type ActionIntensityRate = {
    range: number[]
    value: number
    defaultValue: number
    option: string
  }
}
