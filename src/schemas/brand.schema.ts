import { z, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';

const brandIdSchema = z.object({
  id: objectId,
});

export type IBrandIdSchema = TypeOf<typeof brandIdSchema>;

const brandAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  fields: z.string().optional(),
});

export type IBrandAllSchema = TypeOf<typeof brandAllSchema>;

const brandCreateSchema = z
  .object({
    // <creating-property-create-schema />
    name: z.string(),
  })
  .strict();

export type IBrandCreateSchema = TypeOf<typeof brandCreateSchema>;

const brandUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    name: z.string().optional(),
  })
  .strict();

export type IBrandUpdateSchema = TypeOf<typeof brandUpdateSchema>;

export default {
  brandId: brandIdSchema,
  brandAll: brandAllSchema,
  brandCreate: brandCreateSchema,
  brandUpdate: brandUpdateSchema,
};
