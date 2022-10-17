import { DefaultCrudRepository } from '@loopback/repository';
import { NutriDietDataSource } from '../datasources';
import { Alimento, AlimentoRelations } from '../models';
export declare class AlimentoRepository extends DefaultCrudRepository<Alimento, typeof Alimento.prototype.idalimento, AlimentoRelations> {
    constructor(dataSource: NutriDietDataSource);
}
