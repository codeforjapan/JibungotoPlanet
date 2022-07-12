export const normalizedMobilityData = (data: any) => {
  const baseData = {
    hasPrivateCar: null,
    carIntensityFactorKey: null,
    carChargingKey: null,
    carPassengersKey: null,
    privateCarAnnualMileage: null,
    trainWeeklyTravelingTime: null,
    busWeeklyTravelingTime: null,
    motorbikeWeeklyTravelingTime: null,
    otherCarWeeklyTravelingTime: null,
    hasWeeklyTravelingTime: null,
    mileageByAreaFirstKey: null,
    otherCarAnnualTravelingTime: null,
    trainAnnualTravelingTime: null,
    busAnnualTravelingTime: null,
    motorbikeAnnualTravelingTime: null,
    airplaneAnnualTravelingTime: null,
    ferryAnnualTravelingTime: null
  }

  return Object.assign(baseData, data)
}
