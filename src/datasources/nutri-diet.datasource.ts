import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'NutriDiet',
  connector: 'mysql',
  url: '',
  //host: 'nutridiet.cyyvqt1pvsmm.us-east-2.rds.amazonaws.com',
  host: 'localhost',
  port: 3306,
  user: 'root',
  //user: 'admin',
  //password: 'nutridiet4+',
<<<<<<< HEAD
  password: 'Password4+',
=======
  password: 'bardock999',
>>>>>>> a76a2e6f236271bd510fef4a65ea41b50d210987
  database: 'nutridiet'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NutriDietDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'NutriDiet';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.NutriDiet', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
