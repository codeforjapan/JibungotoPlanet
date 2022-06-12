/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFootprintInput = {
  dirAndDomain: string,
  itemAndType: string,
  value: number,
  unit?: string | null,
  citation?: string | null,
  _version?: number | null,
};

export type ModelFootprintConditionInput = {
  value?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  citation?: ModelStringInput | null,
  and?: Array< ModelFootprintConditionInput | null > | null,
  or?: Array< ModelFootprintConditionInput | null > | null,
  not?: ModelFootprintConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Footprint = {
  __typename: "Footprint",
  dirAndDomain: string,
  itemAndType: string,
  value: number,
  unit?: string | null,
  citation?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateFootprintInput = {
  dirAndDomain: string,
  itemAndType: string,
  value?: number | null,
  unit?: string | null,
  citation?: string | null,
  _version?: number | null,
};

export type DeleteFootprintInput = {
  dirAndDomain: string,
  itemAndType: string,
  _version?: number | null,
};

export type CreateParameterInput = {
  category: string,
  key: string,
  value: number,
  unit?: string | null,
  citation?: string | null,
  _version?: number | null,
};

export type ModelParameterConditionInput = {
  value?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  citation?: ModelStringInput | null,
  and?: Array< ModelParameterConditionInput | null > | null,
  or?: Array< ModelParameterConditionInput | null > | null,
  not?: ModelParameterConditionInput | null,
};

export type Parameter = {
  __typename: "Parameter",
  category: string,
  key: string,
  value: number,
  unit?: string | null,
  citation?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateParameterInput = {
  category: string,
  key: string,
  value?: number | null,
  unit?: string | null,
  citation?: string | null,
  _version?: number | null,
};

export type DeleteParameterInput = {
  category: string,
  key: string,
  _version?: number | null,
};

export type CreateProfileInput = {
  refId: string,
  mobilityAnswer?: MobilityAnswerInput | null,
  baselines?: Array< ComponentInput > | null,
  estimations?: Array< ItemInput > | null,
  options?: Array< ItemInput > | null,
  id?: string | null,
  _version?: number | null,
};

export type MobilityAnswerInput = {
  hasPrivateCar?: boolean | null,
  privateCarType?: string | null,
  privateCarAnnualMileage?: number | null,
  carCharging?: string | null,
  carPassengers?: string | null,
  train?: number | null,
  trainUnit?: string | null,
  bus?: number | null,
  busUnit?: string | null,
  motorbike?: number | null,
  motorbikeUnit?: string | null,
  airplane?: number | null,
  airplaneUnit?: string | null,
  otherCar?: number | null,
  otherCarUnit?: string | null,
  ferry?: number | null,
  ferryUnit?: string | null,
};

export type ComponentInput = {
  dir: string,
  domain: string,
  item: string,
  type: string,
  value: number,
  unit?: string | null,
  citation?: string | null,
};

export type ItemInput = {
  domain: string,
  item: string,
  type: string,
  value: number,
  unit?: string | null,
};

export type ModelProfileConditionInput = {
  refId?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type Profile = {
  __typename: "Profile",
  refId: string,
  mobilityAnswer?: MobilityAnswer | null,
  baselines?:  Array<Component > | null,
  estimations?:  Array<Item > | null,
  options?:  Array<Item > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type MobilityAnswer = {
  __typename: "MobilityAnswer",
  hasPrivateCar?: boolean | null,
  privateCarType?: string | null,
  privateCarAnnualMileage?: number | null,
  carCharging?: string | null,
  carPassengers?: string | null,
  train?: number | null,
  trainUnit?: string | null,
  bus?: number | null,
  busUnit?: string | null,
  motorbike?: number | null,
  motorbikeUnit?: string | null,
  airplane?: number | null,
  airplaneUnit?: string | null,
  otherCar?: number | null,
  otherCarUnit?: string | null,
  ferry?: number | null,
  ferryUnit?: string | null,
};

export type Component = {
  __typename: "Component",
  dir: string,
  domain: string,
  item: string,
  type: string,
  value: number,
  unit?: string | null,
  citation?: string | null,
};

export type Item = {
  __typename: "Item",
  domain: string,
  item: string,
  type: string,
  value: number,
  unit?: string | null,
};

export type UpdateProfileInput = {
  refId?: string | null,
  mobilityAnswer?: MobilityAnswerInput | null,
  baselines?: Array< ComponentInput > | null,
  estimations?: Array< ItemInput > | null,
  options?: Array< ItemInput > | null,
  id: string,
  _version?: number | null,
};

export type DeleteProfileInput = {
  id: string,
  _version?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFootprintFilterInput = {
  dirAndDomain?: ModelStringInput | null,
  itemAndType?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  citation?: ModelStringInput | null,
  and?: Array< ModelFootprintFilterInput | null > | null,
  or?: Array< ModelFootprintFilterInput | null > | null,
  not?: ModelFootprintFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFootprintConnection = {
  __typename: "ModelFootprintConnection",
  items:  Array<Footprint | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelParameterFilterInput = {
  category?: ModelStringInput | null,
  key?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  citation?: ModelStringInput | null,
  and?: Array< ModelParameterFilterInput | null > | null,
  or?: Array< ModelParameterFilterInput | null > | null,
  not?: ModelParameterFilterInput | null,
};

export type ModelParameterConnection = {
  __typename: "ModelParameterConnection",
  items:  Array<Parameter | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProfileFilterInput = {
  refId?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateFootprintMutationVariables = {
  input: CreateFootprintInput,
  condition?: ModelFootprintConditionInput | null,
};

export type CreateFootprintMutation = {
  createFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFootprintMutationVariables = {
  input: UpdateFootprintInput,
  condition?: ModelFootprintConditionInput | null,
};

export type UpdateFootprintMutation = {
  updateFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFootprintMutationVariables = {
  input: DeleteFootprintInput,
  condition?: ModelFootprintConditionInput | null,
};

export type DeleteFootprintMutation = {
  deleteFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateParameterMutationVariables = {
  input: CreateParameterInput,
  condition?: ModelParameterConditionInput | null,
};

export type CreateParameterMutation = {
  createParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateParameterMutationVariables = {
  input: UpdateParameterInput,
  condition?: ModelParameterConditionInput | null,
};

export type UpdateParameterMutation = {
  updateParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteParameterMutationVariables = {
  input: DeleteParameterInput,
  condition?: ModelParameterConditionInput | null,
};

export type DeleteParameterMutation = {
  deleteParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetFootprintQueryVariables = {
  dirAndDomain: string,
  itemAndType: string,
};

export type GetFootprintQuery = {
  getFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFootprintsQueryVariables = {
  dirAndDomain?: string | null,
  itemAndType?: ModelStringKeyConditionInput | null,
  filter?: ModelFootprintFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFootprintsQuery = {
  listFootprints?:  {
    __typename: "ModelFootprintConnection",
    items:  Array< {
      __typename: "Footprint",
      dirAndDomain: string,
      itemAndType: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFootprintsQueryVariables = {
  filter?: ModelFootprintFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFootprintsQuery = {
  syncFootprints?:  {
    __typename: "ModelFootprintConnection",
    items:  Array< {
      __typename: "Footprint",
      dirAndDomain: string,
      itemAndType: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetParameterQueryVariables = {
  category: string,
  key: string,
};

export type GetParameterQuery = {
  getParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListParametersQueryVariables = {
  category?: string | null,
  key?: ModelStringKeyConditionInput | null,
  filter?: ModelParameterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListParametersQuery = {
  listParameters?:  {
    __typename: "ModelParameterConnection",
    items:  Array< {
      __typename: "Parameter",
      category: string,
      key: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncParametersQueryVariables = {
  filter?: ModelParameterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncParametersQuery = {
  syncParameters?:  {
    __typename: "ModelParameterConnection",
    items:  Array< {
      __typename: "Parameter",
      category: string,
      key: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      refId: string,
      mobilityAnswer?:  {
        __typename: "MobilityAnswer",
        hasPrivateCar?: boolean | null,
        privateCarType?: string | null,
        privateCarAnnualMileage?: number | null,
        carCharging?: string | null,
        carPassengers?: string | null,
        train?: number | null,
        trainUnit?: string | null,
        bus?: number | null,
        busUnit?: string | null,
        motorbike?: number | null,
        motorbikeUnit?: string | null,
        airplane?: number | null,
        airplaneUnit?: string | null,
        otherCar?: number | null,
        otherCarUnit?: string | null,
        ferry?: number | null,
        ferryUnit?: string | null,
      } | null,
      baselines?:  Array< {
        __typename: "Component",
        dir: string,
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
        citation?: string | null,
      } > | null,
      estimations?:  Array< {
        __typename: "Item",
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
      } > | null,
      options?:  Array< {
        __typename: "Item",
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
      } > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfilesQuery = {
  syncProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      refId: string,
      mobilityAnswer?:  {
        __typename: "MobilityAnswer",
        hasPrivateCar?: boolean | null,
        privateCarType?: string | null,
        privateCarAnnualMileage?: number | null,
        carCharging?: string | null,
        carPassengers?: string | null,
        train?: number | null,
        trainUnit?: string | null,
        bus?: number | null,
        busUnit?: string | null,
        motorbike?: number | null,
        motorbikeUnit?: string | null,
        airplane?: number | null,
        airplaneUnit?: string | null,
        otherCar?: number | null,
        otherCarUnit?: string | null,
        ferry?: number | null,
        ferryUnit?: string | null,
      } | null,
      baselines?:  Array< {
        __typename: "Component",
        dir: string,
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
        citation?: string | null,
      } > | null,
      estimations?:  Array< {
        __typename: "Item",
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
      } > | null,
      options?:  Array< {
        __typename: "Item",
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
      } > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProfilesByRefIdQueryVariables = {
  refId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesByRefIdQuery = {
  profilesByRefId?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      refId: string,
      mobilityAnswer?:  {
        __typename: "MobilityAnswer",
        hasPrivateCar?: boolean | null,
        privateCarType?: string | null,
        privateCarAnnualMileage?: number | null,
        carCharging?: string | null,
        carPassengers?: string | null,
        train?: number | null,
        trainUnit?: string | null,
        bus?: number | null,
        busUnit?: string | null,
        motorbike?: number | null,
        motorbikeUnit?: string | null,
        airplane?: number | null,
        airplaneUnit?: string | null,
        otherCar?: number | null,
        otherCarUnit?: string | null,
        ferry?: number | null,
        ferryUnit?: string | null,
      } | null,
      baselines?:  Array< {
        __typename: "Component",
        dir: string,
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
        citation?: string | null,
      } > | null,
      estimations?:  Array< {
        __typename: "Item",
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
      } > | null,
      options?:  Array< {
        __typename: "Item",
        domain: string,
        item: string,
        type: string,
        value: number,
        unit?: string | null,
      } > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateFootprintSubscription = {
  onCreateFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFootprintSubscription = {
  onUpdateFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFootprintSubscription = {
  onDeleteFootprint?:  {
    __typename: "Footprint",
    dirAndDomain: string,
    itemAndType: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateParameterSubscription = {
  onCreateParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateParameterSubscription = {
  onUpdateParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteParameterSubscription = {
  onDeleteParameter?:  {
    __typename: "Parameter",
    category: string,
    key: string,
    value: number,
    unit?: string | null,
    citation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    refId: string,
    mobilityAnswer?:  {
      __typename: "MobilityAnswer",
      hasPrivateCar?: boolean | null,
      privateCarType?: string | null,
      privateCarAnnualMileage?: number | null,
      carCharging?: string | null,
      carPassengers?: string | null,
      train?: number | null,
      trainUnit?: string | null,
      bus?: number | null,
      busUnit?: string | null,
      motorbike?: number | null,
      motorbikeUnit?: string | null,
      airplane?: number | null,
      airplaneUnit?: string | null,
      otherCar?: number | null,
      otherCarUnit?: string | null,
      ferry?: number | null,
      ferryUnit?: string | null,
    } | null,
    baselines?:  Array< {
      __typename: "Component",
      dir: string,
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
      citation?: string | null,
    } > | null,
    estimations?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    options?:  Array< {
      __typename: "Item",
      domain: string,
      item: string,
      type: string,
      value: number,
      unit?: string | null,
    } > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
