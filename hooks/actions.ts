import { useEffect, useState } from "react";
import {
  FOOD_ACTIONS,
  MOBILITY_ACTIONS,
  HOUSING_ACTIONS,
  OTHER_ACTIONS
} from "constants/actions";

export const useActions = () => {
  const [mobility, setMobilityActions] = useState<Actions.Action[]>([])
  const [food, setFoodActions] = useState<Actions.Action[]>([])
  const [housing, setHousingActions] = useState<Actions.Action[]>([])
  const [other, setOtherActions] = useState<Actions.Action[]>([])

  useEffect(() => {
    setMobilityActions(MOBILITY_ACTIONS)
    setFoodActions(FOOD_ACTIONS)
    setHousingActions(HOUSING_ACTIONS)
    setOtherActions(OTHER_ACTIONS)
  }, [])

  return { mobility, food, housing, other }
}
