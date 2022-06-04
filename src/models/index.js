// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Footprint } = initSchema(schema);

export {
  Todo,
  Footprint
};