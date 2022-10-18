import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Cita, CitaRelations} from '../models';

export class CitaRepository extends DefaultCrudRepository<
  Cita,
  typeof Cita.prototype.id_cita,
  CitaRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(Cita, dataSource);
  }
}
