import { useEffect, useState } from 'react'
import { MOBILITY_QUESTION_PAGES } from '../constants/questions'

export const useQuestions = () => {
  const [mobility, setMobilityQuestions] = useState<Questions.Page[]>([])
  const [food, setFoodQuestions] = useState<Questions.Page[]>([])
  const [house, setHouseQuestions] = useState<Questions.Page[]>([])
  const [consumption, setConsumptionQuestions] = useState<Questions.Page[]>([])

  //一旦静的データをいれてますが、のちにAPIから取得しやすいようにあえて。
  useEffect(() => {
    setMobilityQuestions(MOBILITY_QUESTION_PAGES)
  }, [])

  return { mobility, food, house, consumption }
}
