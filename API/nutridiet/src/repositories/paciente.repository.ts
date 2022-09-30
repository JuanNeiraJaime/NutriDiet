import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutridietDataSource} from '../datasources';
import {Paciente, PacienteRelations} from '../models';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.id_pac,
  PacienteRelations
> {
  constructor(
    @inject('datasources.nutridiet') dataSource: NutridietDataSource,
  ) {
    super(Paciente, dataSource);
  }
}
