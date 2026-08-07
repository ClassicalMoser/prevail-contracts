import type {
  ArmyWriteBody,
  EmptyObject,
  GetByIdParams,
  PutRoute,
} from '@domain';
import {
  armyWriteBodySchema,
  emptyObjectSchema,
  getByIdParamsSchema,
} from '@domain';

/**
 * Replaces an owned army's composition.
 * Identity is path `:id` only. Success body is empty — read via GET.
 */
const updateOwnedArmyContract: PutRoute<
  GetByIdParams,
  EmptyObject,
  ArmyWriteBody,
  EmptyObject
> = {
  path: '/armies/id/:id',
  auth: {
    authRequired: true,
    permissionsRequired: ['armies:update-owned-army'],
  },
  method: 'PUT',
  validators: {
    params: getByIdParamsSchema,
    query: emptyObjectSchema,
    body: armyWriteBodySchema,
    data: emptyObjectSchema,
  },
};

export { updateOwnedArmyContract };
