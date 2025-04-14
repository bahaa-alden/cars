import { z, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';

const featureIdSchema = z.object({
  id: objectId,
});

export type IFeatureIdSchema = TypeOf<typeof featureIdSchema>;

const featureAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  fields: z.string().optional(),
});

export type IFeatureAllSchema = TypeOf<typeof featureAllSchema>;

const featureCreateSchema = z
  .object({
    // <creating-property-create-schema />
    name: z.string(),
  })
  .strict();

export type IFeatureCreateSchema = TypeOf<typeof featureCreateSchema>;

const featureUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    name: z.string().optional(),
  })
  .strict();

export type IFeatureUpdateSchema = TypeOf<typeof featureUpdateSchema>;

export default {
  featureId: featureIdSchema,
  featureAll: featureAllSchema,
  featureCreate: featureCreateSchema,
  featureUpdate: featureUpdateSchema,
};
