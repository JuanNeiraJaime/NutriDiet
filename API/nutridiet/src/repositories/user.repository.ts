import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NutridietDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.nomUsuario,
  UserRelations
> {
  constructor(
    @inject('datasources.nutridiet') dataSource: NutridietDataSource,
  ) {
    super(User, dataSource);
  }
}
