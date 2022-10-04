import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Progreso, ProgresoRelations} from '../models';

export class ProgresoRepository extends DefaultCrudRepository<
  Progreso,
  typeof Progreso.prototype.id_progreso,
  ProgresoRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(Progreso, dataSource);
  }
}
