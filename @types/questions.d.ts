declare namespace Questions {
  interface Page {
    uid: string //ページのUID
    category: Questions.QuestionCategory //ページのカテゴリ
    title: stirng //ページタイトル
    supplement?: string //補足説明
    questions: Question[] //質問リスト
    defaultNextPageUid: string //デフォルトで回答後に遷移するページのUID
    skippable?: boolean //回答をスキップできるかどうか
    skipToPageUid?: string //回答をスキップした場合に遷移するページUID
    isLast?: boolean //最後の質問かどうか
  }

  interface Question {
    key: string //バックエンドに送るデータのキー
    answerType: Questions.AnswerType //回答形式
    description?: string //説明
    subDescription?: string //補足説明
    unitText?: string //テキストフィールドの右側にある「km/年」みたいな単位表記
    options?: Questions.QuestionOption[] //回答のオプション
  }

  type QuestionCategory = 'food' | 'mobility' | 'house' | 'consumption'
  type AnswerType = 'text' | 'select' | 'checkbox' | 'radio' | 'numeric'
  interface QuestionOption {
    label: string //ラベル
    subLabel?: string //補足ラベル
    value: string | number | boolean | null //値
    nextPageUid?: string //回答によって分岐させたいときの遷移するページUID
  }

  type lastAnsweredQuestion = {
    category: string
    uid: string
  }
}
