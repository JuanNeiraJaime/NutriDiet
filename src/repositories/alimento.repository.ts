import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {Alimento, AlimentoRelations} from '../models';

export class AlimentoRepository extends DefaultCrudRepository<
  Alimento,
  typeof Alimento.prototype.idalimento,
  AlimentoRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(Alimento, dataSource);
  }
}
