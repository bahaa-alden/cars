import {
  NotFoundError,
  InternalError,
  BadRequestError,
} from '../../core/ApiError';
import { orderItemRepository } from '../../database/repositories/order-item.repository';
import { productRepository } from '../../database/repositories/product.repository';
import { IOrderItemsCreateSchema } from '../../schemas/order.schema';
import { ItemType } from '../../utils/enum';
import { needRecord } from '../../utils/record';

export const createOrderItem = async (
  item: IOrderItemsCreateSchema,
  orderId?: string,
) => {
  const product = needRecord(
    await productRepository.findById(item.productId),
    new NotFoundError('Product not found'),
  );

  if (!product.quantity || product.quantity < item.quantity) {
    throw new BadRequestError(`Product ${product.id} quantity not enough`);
  }

  product.quantity = product.quantity - item.quantity;

  await productRepository.patchById(product.id, product);

  if (!item.price) {
    const servicePrice =
      item.itemType === ItemType.purchase
        ? product.purchasePrice
        : product.rentPrice;
    item.price = servicePrice * item.quantity;
  }

  const orderItem = await orderItemRepository.insert({
    ...item,
    orderId,
  });
  if (orderItem === null) {
    throw new InternalError();
  }
  return orderItem;
};
