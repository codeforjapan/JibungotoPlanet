declare namespace Questions {
  interface Page {
    uid: string
    title: stirng
    questions: Question[]
  }

  interface Question {
    uid: string
    category: Questions.QuestionCategory
    answerType: Questions.AnswerType
    orderNum?: number
    description: string
    subDescription?: string
    options?: Questions.QuestionOption[]
  }

  type QuestionCategory = 'food' | 'transportation' | 'house' | 'consumption'
  type AnswerType = 'text' | 'select' | 'checkbox'
  interface QuestionOption {
    label: string
    subLabel?: string
    value: string | number | null
    nextPageUid?: string //回答によって分岐、スキップさせたいとき
    externalButton?: boolean //外にボタンとして持たせるフラグ
  }
}
