import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  FeatureFindOptions,
  featureRepository,
} from '../database/repositories/feature.repository';
import {
  IFeatureAllSchema,
  IFeatureIdSchema,
  IFeatureCreateSchema,
  IFeatureUpdateSchema,
} from '../schemas/feature.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { RoleCode } from '../utils/enum';
import { needRecord } from '../utils/record';

export class FeatureController {
  // Get all Features by author
  public getFeatures = asyncHandler(
    async (
      req: ParsedRequest<void, IFeatureAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: FeatureFindOptions = {
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
      const features = await featureRepository.findForAdmin(options);

      res.ok({ message: 'success', data: features });
    },
  );

  // Get feature by Id for authenticated user
  public getFeature = asyncHandler(
    async (
      req: ParsedRequest<void, void, IFeatureIdSchema>,
      res: Response,
    ): Promise<void> => {
      const feature = needRecord(
        await featureRepository.findById(req.valid.params.id),
        new NotFoundError('Feature not found'),
      );

      res.ok({ message: 'success', data: feature });
    },
  );

  // Create feature handler
  public createFeature = asyncHandler(
    async (
      req: ParsedRequest<IFeatureCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newFeature = req.valid.body;
      const feature = await featureRepository.insert(newFeature);
      if (feature === null) {
        throw new InternalError();
      }
      res.created({ message: 'Feature has been created', data: feature });
    },
  );

  // Update feature by Id for authenticated user
  public updateFeature = asyncHandler(
    async (
      req: ParsedRequest<IFeatureUpdateSchema, void, IFeatureIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const feature = needRecord(
        await featureRepository.findById(req.valid.params.id),
        new NotFoundError('Feature not found'),
      );

      const data = await featureRepository.patchById(feature.id, updateBody);

      res.ok({ message: 'Feature has been updated', data });
    },
  );

  // Delete feature by Id for authenticated user
  public deleteFeature = asyncHandler(
    async (
      req: ParsedRequest<void, void, IFeatureIdSchema>,
      res: Response,
    ): Promise<void> => {
      const feature = needRecord(
        await featureRepository.findById(req.valid.params.id),
        new NotFoundError('Feature not found'),
      );

      await featureRepository.deleteById(feature.id);
      res.noContent({ message: 'Feature deleted successfully' });
    },
  );
}

export const featureController = new FeatureController();
