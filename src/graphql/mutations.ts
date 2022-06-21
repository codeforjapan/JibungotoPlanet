/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFootprint = /* GraphQL */ `
  mutation CreateFootprint(
    $input: CreateFootprintInput!
    $condition: ModelFootprintConditionInput
  ) {
    createFootprint(input: $input, condition: $condition) {
      dirAndDomain
      itemAndType
      subdomain
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const updateFootprint = /* GraphQL */ `
  mutation UpdateFootprint(
    $input: UpdateFootprintInput!
    $condition: ModelFootprintConditionInput
  ) {
    updateFootprint(input: $input, condition: $condition) {
      dirAndDomain
      itemAndType
      subdomain
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const deleteFootprint = /* GraphQL */ `
  mutation DeleteFootprint(
    $input: DeleteFootprintInput!
    $condition: ModelFootprintConditionInput
  ) {
    deleteFootprint(input: $input, condition: $condition) {
      dirAndDomain
      itemAndType
      subdomain
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const createParameter = /* GraphQL */ `
  mutation CreateParameter(
    $input: CreateParameterInput!
    $condition: ModelParameterConditionInput
  ) {
    createParameter(input: $input, condition: $condition) {
      category
      key
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const updateParameter = /* GraphQL */ `
  mutation UpdateParameter(
    $input: UpdateParameterInput!
    $condition: ModelParameterConditionInput
  ) {
    updateParameter(input: $input, condition: $condition) {
      category
      key
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const deleteParameter = /* GraphQL */ `
  mutation DeleteParameter(
    $input: DeleteParameterInput!
    $condition: ModelParameterConditionInput
  ) {
    deleteParameter(input: $input, condition: $condition) {
      category
      key
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      shareId
      mobilityAnswer {
        hasPrivateCar
        privateCarType
        carCharging
        carPassengers
        privateCarAnnualMileage
        trainWeeklyTravelingTime
        busWeeklyTravelingTime
        motorbikeWeeklyTravelingTime
        otherCarWeeklyTravelingTime
        weeklyDetailedMobilityUnknown
        livingAreaSize
        otherCarAnnualTravelingTime
        trainAnnuallyTravelingTime
        busAnnualTravelingTime
        motorbikeAnnualTravelingTime
        airplaneAnnualTravelingTime
        ferryAnnualTravelingTime
      }
      baselines {
        domain
        item
        type
        value
        unit
        citation
      }
      estimations {
        domain
        item
        type
        value
        unit
      }
      options {
        option
        domain
        item
        type
        value
        unit
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      shareId
      mobilityAnswer {
        hasPrivateCar
        privateCarType
        carCharging
        carPassengers
        privateCarAnnualMileage
        trainWeeklyTravelingTime
        busWeeklyTravelingTime
        motorbikeWeeklyTravelingTime
        otherCarWeeklyTravelingTime
        weeklyDetailedMobilityUnknown
        livingAreaSize
        otherCarAnnualTravelingTime
        trainAnnuallyTravelingTime
        busAnnualTravelingTime
        motorbikeAnnualTravelingTime
        airplaneAnnualTravelingTime
        ferryAnnualTravelingTime
      }
      baselines {
        domain
        item
        type
        value
        unit
        citation
      }
      estimations {
        domain
        item
        type
        value
        unit
      }
      options {
        option
        domain
        item
        type
        value
        unit
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      shareId
      mobilityAnswer {
        hasPrivateCar
        privateCarType
        carCharging
        carPassengers
        privateCarAnnualMileage
        trainWeeklyTravelingTime
        busWeeklyTravelingTime
        motorbikeWeeklyTravelingTime
        otherCarWeeklyTravelingTime
        weeklyDetailedMobilityUnknown
        livingAreaSize
        otherCarAnnualTravelingTime
        trainAnnuallyTravelingTime
        busAnnualTravelingTime
        motorbikeAnnualTravelingTime
        airplaneAnnualTravelingTime
        ferryAnnualTravelingTime
      }
      baselines {
        domain
        item
        type
        value
        unit
        citation
      }
      estimations {
        domain
        item
        type
        value
        unit
      }
      options {
        option
        domain
        item
        type
        value
        unit
      }
      createdAt
      updatedAt
    }
  }
`;
