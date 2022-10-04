import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutriDietDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.nomUsuario,
  UserRelations
> {
  constructor(
    @inject('datasources.NutriDiet') dataSource: NutriDietDataSource,
  ) {
    super(User, dataSource);
  }
}
