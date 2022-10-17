import { DefaultCrudRepository } from '@loopback/repository';
import { NutriDietDataSource } from '../datasources';
import { Paciente, PacienteRelations } from '../models';
export declare class PacienteRepository extends DefaultCrudRepository<Paciente, typeof Paciente.prototype.id_pac, PacienteRelations> {
    constructor(dataSource: NutriDietDataSource);
}
