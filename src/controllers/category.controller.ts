import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  CategoryFindOptions,
  categoryRepository,
} from '../database/repositories/category.repository';
import {
  ICategoryAllSchema,
  ICategoryIdSchema,
  ICategoryCreateSchema,
  ICategoryUpdateSchema,
} from '../schemas/category.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { RoleCode } from '../utils/enum';
import { needRecord } from '../utils/record';

export class CategoryController {
  // Get all Categories by author
  public getCategories = asyncHandler(
    async (
      req: ParsedRequest<void, ICategoryAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: CategoryFindOptions = {
        filter: {
          // filters
        },
        search: req.valid.query.search,
        fields: req.valid.query.fields,
        order: defaultOrderParams(
          req.valid.query.orderColumn,
          req.valid.query.orderDirection,
        ),
        pagination: defaultPaginationParams(
          req.valid.query.page,
          req.valid.query.pageSize,
        ),
      };
      const categories = await categoryRepository.findForAdmin(options);

      res.ok({ message: 'success', data: categories });
    },
  );

  // Get category by Id for authenticated user
  public getCategory = asyncHandler(
    async (
      req: ParsedRequest<void, void, ICategoryIdSchema>,
      res: Response,
    ): Promise<void> => {
      const category = needRecord(
        await categoryRepository.findById(req.valid.params.id),
        new NotFoundError('Category not found'),
      );

      res.ok({ message: 'success', data: category });
    },
  );

  // Create category handler
  public createCategory = asyncHandler(
    async (
      req: ParsedRequest<ICategoryCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newCategory = req.valid.body;
      const category = await categoryRepository.insert(newCategory);
      if (category === null) {
        throw new InternalError();
      }
      res.created({ message: 'Category has been created', data: category });
    },
  );

  // Update category by Id for authenticated user
  public updateCategory = asyncHandler(
    async (
      req: ParsedRequest<ICategoryUpdateSchema, void, ICategoryIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const category = needRecord(
        await categoryRepository.findById(req.valid.params.id),
        new NotFoundError('Category not found'),
      );

      const data = await categoryRepository.patchById(category.id, updateBody);

      res.ok({ message: 'Category has been updated', data });
    },
  );

  // Delete category by Id for authenticated user
  public deleteCategory = asyncHandler(
    async (
      req: ParsedRequest<void, void, ICategoryIdSchema>,
      res: Response,
    ): Promise<void> => {
      const category = needRecord(
        await categoryRepository.findById(req.valid.params.id),
        new NotFoundError('Category not found'),
      );

      await categoryRepository.deleteById(category.id);
      res.noContent({ message: 'Category deleted successfully' });
    },
  );
}

export const categoryController = new CategoryController();
