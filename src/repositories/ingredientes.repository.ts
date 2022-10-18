import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Ingredientes, IngredientesRelations} from '../models';

export class IngredientesRepository extends DefaultCrudRepository<
  Ingredientes,
  typeof Ingredientes.prototype.id,
  IngredientesRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(Ingredientes, dataSource);
  }
}
