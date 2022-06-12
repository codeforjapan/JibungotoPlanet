import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FootprintMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParameterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Footprint {
  readonly id: string;
  readonly domainAndDir: string;
  readonly itemAndType: string;
  readonly value: number;
  readonly unit?: string | null;
  readonly citation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Footprint, FootprintMetaData>);
  static copyOf(source: Footprint, mutator: (draft: MutableModel<Footprint, FootprintMetaData>) => MutableModel<Footprint, FootprintMetaData> | void): Footprint;
}

export declare class Parameter {
  readonly id: string;
  readonly category: string;
  readonly key: string;
  readonly value: number;
  readonly unit?: string | null;
  readonly citation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Parameter, ParameterMetaData>);
  static copyOf(source: Parameter, mutator: (draft: MutableModel<Parameter, ParameterMetaData>) => MutableModel<Parameter, ParameterMetaData> | void): Parameter;
}

export declare class Profile {
  readonly id: string;
  readonly clientToken: string;
  readonly answer?: string | null;
  readonly estimation?: string | null;
  readonly options?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}