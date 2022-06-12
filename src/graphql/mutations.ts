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
      value
      unit
      citation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      value
      unit
      citation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      value
      unit
      citation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      clientToken
      answers
      estimations {
        dir
        domain
        item
        type
        value
        unit
        citation
      }
      options {
        dir
        domain
        item
        type
        value
        unit
        citation
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      clientToken
      answers
      estimations {
        dir
        domain
        item
        type
        value
        unit
        citation
      }
      options {
        dir
        domain
        item
        type
        value
        unit
        citation
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      clientToken
      answers
      estimations {
        dir
        domain
        item
        type
        value
        unit
        citation
      }
      options {
        dir
        domain
        item
        type
        value
        unit
        citation
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
