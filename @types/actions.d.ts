declare namespace Actions {
  interface Action {
    domain: string;
    option: string;
    category: ActionCategory;
    label: string; // アクションラベル
    description: string; //説明
    defaultActionIntensityRate: number // 標準の削減施策の実施率
    rangeActionIntensityRate?: number[] // 削減施策の実施率の範囲
  }

  type ActionCategory = 'food' | 'mobility' | 'housing' | 'other'
}
