import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  BrandFindOptions,
  brandRepository,
} from '../database/repositories/brand.repository';
import {
  IBrandAllSchema,
  IBrandIdSchema,
  IBrandCreateSchema,
  IBrandUpdateSchema,
} from '../schemas/brand.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { RoleCode } from '../utils/enum';
import { needRecord } from '../utils/record';

export class BrandController {
  // Get all Brands by author
  public getBrands = asyncHandler(
    async (
      req: ParsedRequest<void, IBrandAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: BrandFindOptions = {
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
      const brands = await brandRepository.findForAdmin(options);

      res.ok({ message: 'success', data: brands });
    },
  );

  // Get brand by Id for authenticated user
  public getBrand = asyncHandler(
    async (
      req: ParsedRequest<void, void, IBrandIdSchema>,
      res: Response,
    ): Promise<void> => {
      const brand = needRecord(
        await brandRepository.findById(req.valid.params.id),
        new NotFoundError('Brand not found'),
      );

      res.ok({ message: 'success', data: brand });
    },
  );

  // Create brand handler
  public createBrand = asyncHandler(
    async (
      req: ParsedRequest<IBrandCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newBrand = req.valid.body;
      const brand = await brandRepository.insert(newBrand);
      if (brand === null) {
        throw new InternalError();
      }
      res.created({ message: 'Brand has been created', data: brand });
    },
  );

  // Update brand by Id for authenticated user
  public updateBrand = asyncHandler(
    async (
      req: ParsedRequest<IBrandUpdateSchema, void, IBrandIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const brand = needRecord(
        await brandRepository.findById(req.valid.params.id),
        new NotFoundError('Brand not found'),
      );

      const data = await brandRepository.patchById(brand.id, updateBody);

      res.ok({ message: 'Brand has been updated', data });
    },
  );

  // Delete brand by Id for authenticated user
  public deleteBrand = asyncHandler(
    async (
      req: ParsedRequest<void, void, IBrandIdSchema>,
      res: Response,
    ): Promise<void> => {
      const brand = needRecord(
        await brandRepository.findById(req.valid.params.id),
        new NotFoundError('Brand not found'),
      );

      await brandRepository.deleteById(brand.id);
      res.noContent({ message: 'Brand deleted successfully' });
    },
  );
}

export const brandController = new BrandController();
