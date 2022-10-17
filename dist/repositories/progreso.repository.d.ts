import { DefaultCrudRepository } from '@loopback/repository';
import { NutriDietDataSource } from '../datasources';
import { Progreso, ProgresoRelations } from '../models';
export declare class ProgresoRepository extends DefaultCrudRepository<Progreso, typeof Progreso.prototype.id_progreso, ProgresoRelations> {
    constructor(dataSource: NutriDietDataSource);
}
