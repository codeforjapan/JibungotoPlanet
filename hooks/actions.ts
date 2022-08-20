import { useEffect, useState } from "react";
import {
  FOOD_ACTIONS,
  MOBILITY_ACTIONS,
  HOUSING_ACTIONS,
  OTHER_ACTIONS
} from "constants/actions";
import { useProfile } from "hooks/profile";

const combinedActionData = (actions: Actions.Action[], actionIntensityRates: Actions.ActionIntensityRate[]) => {
  actions.forEach((action) => {
    const actionIntensityRate = actionIntensityRates.find((rate) => rate.option === action.option)
    if (actionIntensityRate) {
      action.actionIntensityRate = Object.assign({}, actionIntensityRate)
      if (actionIntensityRate.value) action.checked = true
    }
  })

  return actions
}

export const useActions = () => {
  const { profile } = useProfile()
  const [mobility, setMobilityActions] = useState<Actions.Action[]>([])
  const [food, setFoodActions] = useState<Actions.Action[]>([])
  const [housing, setHousingActions] = useState<Actions.Action[]>([])
  const [other, setOtherActions] = useState<Actions.Action[]>([])

  useEffect(() => {
    if (profile?.actionIntensityRates) {
      setMobilityActions(combinedActionData(MOBILITY_ACTIONS, profile.actionIntensityRates))
      setFoodActions(combinedActionData(FOOD_ACTIONS, profile.actionIntensityRates))
      setHousingActions(combinedActionData(HOUSING_ACTIONS, profile.actionIntensityRates))
      setOtherActions(combinedActionData(OTHER_ACTIONS, profile.actionIntensityRates))
    }
  }, [profile])

  return { mobility, food, housing, other }
}
