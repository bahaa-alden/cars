import { OrderItemStatus } from './../utils/enum';

import { ItemType } from './../utils/enum';

import { objectId } from './common';

import { z, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const orderItemIdSchema = z.object({
  id: objectId,
});

export type IOrderItemIdSchema = TypeOf<typeof orderItemIdSchema>;

const orderItemAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  itemType: z.nativeEnum(ItemType).optional(),
  orderId: objectId.optional(),
  fields: z.string().optional(),
});

export type IOrderItemAllSchema = TypeOf<typeof orderItemAllSchema>;

const orderItemCreateSchema = z
  .object({
    // <creating-property-create-schema />
    status: z.nativeEnum(OrderItemStatus).optional(),

    price: z.number().optional(),
    itemType: z.nativeEnum(ItemType),
    quantity: z.number(),
    productId: objectId,
    orderId: objectId,
  })
  .strict();

export type IOrderItemCreateSchema = TypeOf<typeof orderItemCreateSchema>;

const orderItemUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    status: z.nativeEnum(OrderItemStatus).optional(),

    price: z.number().optional().optional(),

    itemType: z.nativeEnum(ItemType).optional(),

    quantity: z.number().optional(),

    productId: objectId.optional(),

    orderId: objectId.optional(),
  })
  .strict();

export type IOrderItemUpdateSchema = TypeOf<typeof orderItemUpdateSchema>;

const orderItemReturnSchema = z
  .object({
    orderId: objectId.optional(),
  })
  .strict();

export type IOrderItemReturnSchema = TypeOf<typeof orderItemReturnSchema>;

export default {
  orderItemId: orderItemIdSchema,
  orderItemAll: orderItemAllSchema,
  orderItemCreate: orderItemCreateSchema,
  orderItemUpdate: orderItemUpdateSchema,
  orderItemReturn: orderItemReturnSchema,
};
