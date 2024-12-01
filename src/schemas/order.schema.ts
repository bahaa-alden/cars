import { ItemType } from './../utils/enum';

import { objectId } from './common';

import { stringToDate } from './common';

import { z, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const orderItemsCreateSchema = z.object({
  // <creating-property-create-schema-orderItems />

  productId: objectId,

  quantity: z.number(),

  itemType: z.nativeEnum(ItemType),

  price: z.number().optional(),
});
export type IOrderItemsCreateSchema = TypeOf<typeof orderItemsCreateSchema>;

const orderItemsUpdateSchema = z.object({
  // <creating-property-update-schema-orderItems />

  productId: objectId.optional(),

  quantity: z.number(),

  itemType: z.nativeEnum(ItemType).optional(),

  price: z.number().optional(),
});
export type IOrderItemsUpdateSchema = TypeOf<typeof orderItemsUpdateSchema>;

const orderIdSchema = z.object({
  id: objectId,
});

export type IOrderIdSchema = TypeOf<typeof orderIdSchema>;

const orderAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  userId: objectId.optional(),

  dateFrom: stringToDate.optional(),
  dateTo: stringToDate.optional(),

  fields: z.string().optional(),
});

export type IOrderAllSchema = TypeOf<typeof orderAllSchema>;

const orderCreateSchema = z
  .object({
    // <creating-property-create-schema />
    orderItems: z.array(orderItemsCreateSchema).optional(),

    totalPrice: z.number().optional(),

    orderDate: stringToDate,

    userId: objectId,
  })
  .strict();

export type IOrderCreateSchema = TypeOf<typeof orderCreateSchema>;

const orderUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    orderItems: z.array(orderItemsUpdateSchema).optional(),

    totalPrice: z.number().optional().optional(),

    orderDate: stringToDate.optional(),

    userId: objectId.optional(),
  })
  .strict();

export type IOrderUpdateSchema = TypeOf<typeof orderUpdateSchema>;

export default {
  orderId: orderIdSchema,
  orderAll: orderAllSchema,
  orderCreate: orderCreateSchema,
  orderUpdate: orderUpdateSchema,
};
