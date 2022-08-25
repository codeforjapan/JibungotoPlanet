import { useEffect, useState } from "react";
import {
  FOOD_ACTIONS,
  MOBILITY_ACTIONS,
  HOUSING_ACTIONS,
  OTHER_ACTIONS
} from "constants/actions";
import { useProfile } from "hooks/profile";

const compareFunc = (a: Actions.Action, b: Actions.Action) => {
  const resultA = Number(a.reductionEffect * (Number(a.actionIntensityRate?.value) || Number(a.actionIntensityRate?.defaultValue)))
  const resultB = Number(b.reductionEffect * (Number(b.actionIntensityRate?.value) || Number(b.actionIntensityRate?.defaultValue)))

  return resultB - resultA;
}

const calculateReductionEffect = (option: string, baseLines: Profile.Baseline[], actions: Profile.Action[], estimations: Profile.Estimation[]): number => {
  let sumBaseLinesEstimation = 0, sumAll = 0;
  const intensityItems = actions.filter((action) => action.option === option && action.type === "intensity").map((action) => {
    return {name: action.item, value: action.value }
  })
  const items = actions.filter((action) => action.option === option && action.type === "amount").map((action) => {
    const intensity = intensityItems.find((intensityItem) => intensityItem.name === action.item)
    return {name: action.item, amountValue: action.value, intensityValue: intensity?.value || null}
  })

  // note: デフォルトは0で返していいのか
  if (!items.length) return 0

  items.forEach((item) => {
    const estimatingAmount = estimations.find((estimation) => estimation.item === item.name && estimation.type === "amount")
    const baseLinesAmount = baseLines.find((baseLine) => baseLine.item === item.name && baseLine.type === "amount")
    const estimatingIntensity = estimations.find((estimation) => estimation.item === item.name && estimation.type === "intensity")
    const baseLinesIntensity = baseLines.find((baseLine) => baseLine.item === item.name && baseLine.type === "intensity")

    if (estimatingAmount) {
      if(estimatingIntensity) {
        sumBaseLinesEstimation += estimatingAmount.value * estimatingIntensity.value
      } else {
        if (baseLinesIntensity) {
          sumBaseLinesEstimation += estimatingAmount.value * baseLinesIntensity.value
        }
      }
    } else if (baseLinesAmount) {
      if (estimatingIntensity) {
        sumBaseLinesEstimation += baseLinesAmount.value * estimatingIntensity.value
      } else {
        if (baseLinesIntensity) {
          sumBaseLinesEstimation += baseLinesAmount.value * baseLinesIntensity.value
        }
      }
    }

    if (item.amountValue) {
      if (item.intensityValue) {
        sumAll += item.amountValue * item.intensityValue
      } else if(estimatingIntensity) {
        sumAll += item.amountValue * estimatingIntensity.value
      } else {
        if (baseLinesIntensity) {
          sumAll += item.amountValue * baseLinesIntensity.value
        }
      }
    } else if (estimatingAmount) {
      if (item.intensityValue) {
        sumAll += estimatingAmount.value * item.intensityValue
      } else if(estimatingIntensity) {
        sumAll += estimatingAmount.value * estimatingIntensity.value
      } else {
        if (baseLinesIntensity) {
          sumAll += estimatingAmount.value * baseLinesIntensity.value
        }
      }
    } else if (baseLinesAmount) {
      if (item.intensityValue) {
        sumAll += baseLinesAmount.value * item.intensityValue
      } else if (estimatingIntensity) {
        sumAll += baseLinesAmount.value * estimatingIntensity.value
      } else {
        if (baseLinesIntensity) {
          sumAll += baseLinesAmount.value * baseLinesIntensity.value
        }
      }
    }
  })

  return Math.abs(sumAll - sumBaseLinesEstimation)
}

const combinedActionData = (actions: Actions.Action[], profile: Profile.Profile) => {
  const domain = actions[0].domain,
    baselines = profile.baselines.filter((baseline) => baseline.domain === domain),
    baseActions = profile.actions.filter((action) => action.domain === domain),
    estimations = profile.estimations.filter((estimation) => estimation.domain === domain)

  actions.forEach((action) => {
    const actionIntensityRate = profile.actionIntensityRates.find((rate) => rate.option === action.option);
    if (actionIntensityRate) {
      action.actionIntensityRate = Object.assign({}, actionIntensityRate)
      if (actionIntensityRate.value) action.checked = true
    }
    action.reductionEffect = calculateReductionEffect(action.option, baselines, baseActions, estimations)
  })

  // 削減施策による効果が0より上のものを表示
  return actions.filter((action) => action.reductionEffect > 0).sort(compareFunc)
}

export const useActions = () => {
  const { profile } = useProfile()
  const [mobility, setMobilityActions] = useState<Actions.Action[]>([])
  const [food, setFoodActions] = useState<Actions.Action[]>([])
  const [housing, setHousingActions] = useState<Actions.Action[]>([])
  const [other, setOtherActions] = useState<Actions.Action[]>([])

  useEffect(() => {
    if (profile) {
      setMobilityActions(combinedActionData(MOBILITY_ACTIONS, profile))
      setFoodActions(combinedActionData(FOOD_ACTIONS, profile))
      setHousingActions(combinedActionData(HOUSING_ACTIONS, profile))
      setOtherActions(combinedActionData(OTHER_ACTIONS, profile))
    }
  }, [profile])

  return { mobility, food, housing, other }
}
