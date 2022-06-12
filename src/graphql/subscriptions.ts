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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
