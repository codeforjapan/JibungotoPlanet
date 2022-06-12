// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Footprint, Parameter, Profile } = initSchema(schema);

export {
  Footprint,
  Parameter,
  Profile
};