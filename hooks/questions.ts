import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { MOBILITY_QUESTION_PAGES } from '../constants/questions'
import { answersAtom } from '../store/question'

export const useQuestions = () => {
  const [mobility, setMobilityQuestions] = useState<Questions.Page[]>([])
  const [food, setFoodQuestions] = useState<Questions.Page[]>([])
  const [house, setHouseQuestions] = useState<Questions.Page[]>([])
  const [other, setOtherQuestions] = useState<Questions.Page[]>([])

  //一旦静的データをいれてますが、のちにAPIから取得しやすいようにあえて。
  useEffect(() => {
    setMobilityQuestions(MOBILITY_QUESTION_PAGES)
  }, [])

  return { mobility, food, house, other }
}

export const useAnswerController = (params: {
  category: Questions.QuestionCategory
}) => {
  const [answers, setAnswers] = useRecoilState(answersAtom(params.category))

  const setNewAnswer = (value: {
    [key: string]: string | number | boolean
  }) => {
    const newAnswers = cloneDeep(answers)
    setAnswers(Object.assign(newAnswers, value))
  }

  const removeAnswer = (key: string) => {
    const newAnswers = cloneDeep(answers)
    delete newAnswers[key]
    setAnswers(newAnswers)
  }

  return { setNewAnswer, removeAnswer, answers }
}
