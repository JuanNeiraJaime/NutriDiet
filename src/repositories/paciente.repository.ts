import {inject} from '@loopback/core';
import {DefaultCrudRepository, Getter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Paciente, PacienteRelations, Progreso} from '../models';
import {ProgresoRepository} from './progreso.repository';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.id_pac,
  PacienteRelations
> {
  public readonly progresos: HasManyRepositoryFactory<Progreso, typeof Paciente.prototype.id>;
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
    @repository.getter('ProgresoRepository') progresoRepository: Getter<ProgresoRepository>,
  ) {
    super(Paciente, dataSource);
    this.progresos = this.createHasManyRepositoryFactoryFor('progresos', progresoRepository,);
  }
}
