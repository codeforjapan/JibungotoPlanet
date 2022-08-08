import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  FOOD_QUESTION_PAGES,
  HOUSING_QUESTION_PAGES,
  MOBILITY_QUESTION_PAGES,
  OTHER_QUESTION_PAGES
} from '../constants/questions'
import { answersAtom } from '../store/question'

export const useQuestions = () => {
  const [mobility, setMobilityQuestions] = useState<Questions.Page[]>([])
  const [food, setFoodQuestions] = useState<Questions.Page[]>([])
  const [housing, setHousingQuestions] = useState<Questions.Page[]>([])
  const [other, setOtherQuestions] = useState<Questions.Page[]>([])

  //一旦静的データをいれてますが、のちにAPIから取得しやすいようにあえて。
  useEffect(() => {
    setMobilityQuestions(MOBILITY_QUESTION_PAGES)
    setFoodQuestions(FOOD_QUESTION_PAGES)
    setHousingQuestions(HOUSING_QUESTION_PAGES)
    setOtherQuestions(OTHER_QUESTION_PAGES)
  }, [])

  return { mobility, food, housing, other }
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
