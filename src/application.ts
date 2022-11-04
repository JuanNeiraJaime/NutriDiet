import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,
  MyUserService,
  RefreshTokenServiceBindings, TokenServiceBindings,
  UserServiceBindings
} from '@loopback/authentication-jwt';

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
import {NutriDietDataSource} from './datasources';
import {MailServiceBindings} from './key';
import {MySequence} from './sequence';
import {EmailService} from './services';



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
    this.dataSource(NutriDietDataSource, RefreshTokenServiceBindings.DATASOURCE_NAME);
    // ------------- END OF SNIPPET -------------

    this.bind(UserServiceBindings.USER_SERVICE).toClass(MyUserService);
    //for jwt acces token
    this.bind(TokenServiceBindings.TOKEN_SECRET).to("Clave Secreta")



    //for refresh token
    this.bind(RefreshTokenServiceBindings.REFRESH_SECRET).to("Clave Secreta")

    //for jwt acces token

    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to("216000")
    this.bind(RefreshTokenServiceBindings.REFRESH_EXPIRES_IN).to("216000")

    this.bind(MailServiceBindings.MAILER_SERVICE).toClass(EmailService)
      .to(new EmailService("bleaze1974@gmail.com", "dxpwmqmmptkvxuqr"));

  }
}
