import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Dieta, DietaRelations} from '../models';

export class DietaRepository extends DefaultCrudRepository<
  Dieta,
  typeof Dieta.prototype.iddieta,
  DietaRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(Dieta, dataSource);
  }
}
