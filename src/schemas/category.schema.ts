import { z, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';

const categoryIdSchema = z.object({
  id: objectId,
});

export type ICategoryIdSchema = TypeOf<typeof categoryIdSchema>;

const categoryAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  fields: z.string().optional(),
});

export type ICategoryAllSchema = TypeOf<typeof categoryAllSchema>;

const categoryCreateSchema = z
  .object({
    // <creating-property-create-schema />
    name: z.string(),
  })
  .strict();

export type ICategoryCreateSchema = TypeOf<typeof categoryCreateSchema>;

const categoryUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    name: z.string().optional(),
  })
  .strict();

export type ICategoryUpdateSchema = TypeOf<typeof categoryUpdateSchema>;

export default {
  categoryId: categoryIdSchema,
  categoryAll: categoryAllSchema,
  categoryCreate: categoryCreateSchema,
  categoryUpdate: categoryUpdateSchema,
};
