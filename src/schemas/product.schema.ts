import { ProductType } from './../utils/enum';

import { objectId } from './common';

import { stringToDate } from './common';

import { z, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const productIdSchema = z.object({
  id: objectId,
});

export type IProductIdSchema = TypeOf<typeof productIdSchema>;

const productAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  rentPriceGte: z.number().optional(),

  rentPriceLte: z.number().optional(),

  purchasePriceGte: z.number().optional(),

  purchasePriceLte: z.number().optional(),

  productionYear: z.string().optional(),

  type: z.nativeEnum(ProductType).optional(),

  categoryId: objectId.optional(),
  brandId: objectId.optional(),
  dateFrom: stringToDate.optional(),
  dateTo: stringToDate.optional(),
  fields: z.string().optional(),
});

export type IProductAllSchema = TypeOf<typeof productAllSchema>;

const productCreateSchema = z
  .object({
    // <creating-property-create-schema />

    colors: z.array(z.string()).optional(),

    productionYear: z.string(),

    type: z.nativeEnum(ProductType).optional(),
    featureIds: objectId.array(),
    brandId: objectId,
    rentPrice: z.number(),
    purchasePrice: z.number(),
    quantity: z.number().optional(),
    categoryId: objectId,
    name: z.string(),
  })
  .strict();

export type IProductCreateSchema = TypeOf<typeof productCreateSchema>;

const productUpdateSchema = z
  .object({
    // <creating-property-update-schema />

    colors: z.array(z.string()).optional().optional(),

    productionYear: z.string().optional(),

    type: z.nativeEnum(ProductType).optional(),
    featureIds: objectId.array().optional(),
    brandId: objectId.optional(),
    rentPrice: z.number().optional(),
    purchasePrice: z.number().optional(),
    quantity: z.number().optional().optional(),
    categoryId: objectId.optional(),
    name: z.string().optional(),
  })
  .strict();

export type IProductUpdateSchema = TypeOf<typeof productUpdateSchema>;

export default {
  productId: productIdSchema,
  productAll: productAllSchema,
  productCreate: productCreateSchema,
  productUpdate: productUpdateSchema,
};
