import { DefaultCrudRepository } from '@loopback/repository';
import { NutriDietDataSource } from '../datasources';
import { Ingredientes, IngredientesRelations } from '../models';
export declare class IngredientesRepository extends DefaultCrudRepository<Ingredientes, typeof Ingredientes.prototype.id, IngredientesRelations> {
    constructor(dataSource: NutriDietDataSource);
}
