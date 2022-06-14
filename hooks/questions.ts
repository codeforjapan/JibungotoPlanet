import { useEffect, useState } from 'react'

export const useAllQuestions = () => {
  const [questions, setQuestions] = useState<Questions.Question[]>([])

  //一旦静的データをいれてますが、のちにAPIから取得しやすいようにあえて。
  useEffect(() => {
    setQuestions([
      {
        uid: '',
        category: 'food',
        answerType: 'select',
        description:
          '1日の活動量<spbr>（摂取カロリー量）は<br>どのくらいですか？',
        options: [
          {
            value: 1400,
            label: 'かなり少ない（1,400 kcal程度）'
          },
          {
            value: 2000,
            label: 'やや少ない（2,000 kcal程度）'
          },
          {
            value: 2200,
            label: '普通（2,200 kcal程度）'
          },
          {
            value: 2400,
            label: 'やや多い（2,400 kcal程度）'
          },
          {
            value: 3000,
            label: 'かなり多い（3,000 kcal程度）'
          },
          {
            value: null,
            label: 'わからない'
          }
        ]
      },
      {
        uid: '',
        category: 'food',
        answerType: 'select',
        description:
          '食材を捨てたり食べ残し（食品ロス）が生じる頻度はどのくらいですか？',
        subDescription:
          '賞味期限切れなどで未使用の食品や食材を捨ててしまう頻度',
        options: [
          {
            value: 1400,
            label: 'かなり少ない（1,400 kcal程度）'
          },
          {
            value: 2000,
            label: 'やや少ない（2,000 kcal程度）'
          },
          {
            value: 2200,
            label: '普通（2,200 kcal程度）'
          },
          {
            value: 2400,
            label: 'やや多い（2,400 kcal程度）'
          },
          {
            value: 3000,
            label: 'かなり多い（3,000 kcal程度）'
          },
          {
            value: null,
            label: 'わからない'
          }
        ]
      }
    ])
  }, [])

  return questions
}
