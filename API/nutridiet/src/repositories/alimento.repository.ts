import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutridietDataSource} from '../datasources';
import {Alimento, AlimentoRelations} from '../models';

export class AlimentoRepository extends DefaultCrudRepository<
  Alimento,
  typeof Alimento.prototype.idalimento,
  AlimentoRelations
> {
  constructor(
    @inject('datasources.nutridiet') dataSource: NutridietDataSource,
  ) {
    super(Alimento, dataSource);
  }
}
