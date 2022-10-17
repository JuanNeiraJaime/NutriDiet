import { DefaultCrudRepository } from '@loopback/repository';
import { NutriDietDataSource } from '../datasources';
import { Cita, CitaRelations } from '../models';
export declare class CitaRepository extends DefaultCrudRepository<Cita, typeof Cita.prototype.id_cita, CitaRelations> {
    constructor(dataSource: NutriDietDataSource);
}
