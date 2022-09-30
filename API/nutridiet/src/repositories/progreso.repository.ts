import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutridietDataSource} from '../datasources';
import {Progreso, ProgresoRelations} from '../models';

export class ProgresoRepository extends DefaultCrudRepository<
  Progreso,
  typeof Progreso.prototype.id_progreso,
  ProgresoRelations
> {
  constructor(
    @inject('datasources.nutridiet') dataSource: NutridietDataSource,
  ) {
    super(Progreso, dataSource);
  }
}
