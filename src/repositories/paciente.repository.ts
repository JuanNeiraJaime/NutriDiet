import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Paciente, PacienteRelations} from '../models';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.id_pac,
  PacienteRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(Paciente, dataSource);
  }
}
