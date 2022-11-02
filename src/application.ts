import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';

import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,
  RefreshTokenServiceBindings, TokenServiceBindings,
  UserServiceBindings
} from '@loopback/authentication-jwt';
import {NutriDietDataSource} from './datasources';



export {ApplicationConfig};

export class NutridietApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    this.component(AuthenticationComponent);
    // Mount jwt component
    this.component(JWTAuthenticationComponent);
    // Bind datasource
    this.dataSource(NutriDietDataSource, UserServiceBindings.DATASOURCE_NAME);
    // ------------- END OF SNIPPET -------------

    //for jwt acces token
    this.bind(TokenServiceBindings.TOKEN_SECRET).to("nutr1d13t")



    //for refresh token
    this.bind(RefreshTokenServiceBindings.REFRESH_SECRET).to("nutr1d13t")

    //for jwt acces token expiration
    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to("3600")
    //for refresh token expiration
    this.bind(RefreshTokenServiceBindings.REFRESH_EXPIRES_IN).to("216000")
  }
}
