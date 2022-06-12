/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFootprint = /* GraphQL */ `
  query GetFootprint($dirAndDomain: String!, $itemAndType: String!) {
    getFootprint(dirAndDomain: $dirAndDomain, itemAndType: $itemAndType) {
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
export const listFootprints = /* GraphQL */ `
  query ListFootprints(
    $dirAndDomain: String
    $itemAndType: ModelStringKeyConditionInput
    $filter: ModelFootprintFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFootprints(
      dirAndDomain: $dirAndDomain
      itemAndType: $itemAndType
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        dirAndDomain
        itemAndType
        value
        unit
        citation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParameter = /* GraphQL */ `
  query GetParameter($category: String!, $key: String!) {
    getParameter(category: $category, key: $key) {
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
export const listParameters = /* GraphQL */ `
  query ListParameters(
    $category: String
    $key: ModelStringKeyConditionInput
    $filter: ModelParameterFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listParameters(
      category: $category
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        category
        key
        value
        unit
        citation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $id: ID
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const profilesByRefId = /* GraphQL */ `
  query ProfilesByRefId(
    $refId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilesByRefId(
      refId: $refId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
