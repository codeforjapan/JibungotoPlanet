/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFootprint = /* GraphQL */ `
  subscription OnCreateFootprint {
    onCreateFootprint {
      dirAndDomain
      itemAndType
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFootprint = /* GraphQL */ `
  subscription OnUpdateFootprint {
    onUpdateFootprint {
      dirAndDomain
      itemAndType
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFootprint = /* GraphQL */ `
  subscription OnDeleteFootprint {
    onDeleteFootprint {
      dirAndDomain
      itemAndType
      value
      unit
      citation
      createdAt
      updatedAt
    }
  }
`;
export const onCreateParameter = /* GraphQL */ `
  subscription OnCreateParameter {
    onCreateParameter {
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
export const onUpdateParameter = /* GraphQL */ `
  subscription OnUpdateParameter {
    onUpdateParameter {
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
export const onDeleteParameter = /* GraphQL */ `
  subscription OnDeleteParameter {
    onDeleteParameter {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
      id
      refId
      mobilityAnswer {
        hasPrivateCar
        privateCarType
        privateCarAnnualMileage
        carCharging
        carPassengers
        train
        trainUnit
        bus
        busUnit
        motorbike
        motorbikeUnit
        airplane
        airplaneUnit
        otherCar
        otherCarUnit
        ferry
        ferryUnit
      }
      baselines {
        dir
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
      id
      refId
      mobilityAnswer {
        hasPrivateCar
        privateCarType
        privateCarAnnualMileage
        carCharging
        carPassengers
        train
        trainUnit
        bus
        busUnit
        motorbike
        motorbikeUnit
        airplane
        airplaneUnit
        otherCar
        otherCarUnit
        ferry
        ferryUnit
      }
      baselines {
        dir
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
      id
      refId
      mobilityAnswer {
        hasPrivateCar
        privateCarType
        privateCarAnnualMileage
        carCharging
        carPassengers
        train
        trainUnit
        bus
        busUnit
        motorbike
        motorbikeUnit
        airplane
        airplaneUnit
        otherCar
        otherCarUnit
        ferry
        ferryUnit
      }
      baselines {
        dir
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
