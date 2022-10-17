"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutriDietDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'NutriDiet',
    connector: 'mysql',
    url: '',
    host: 'nutridiet.cyyvqt1pvsmm.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'nutridiet4+',
    database: 'nutridiet'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let NutriDietDataSource = class NutriDietDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
NutriDietDataSource.dataSourceName = 'NutriDiet';
NutriDietDataSource.defaultConfig = config;
NutriDietDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.NutriDiet', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], NutriDietDataSource);
exports.NutriDietDataSource = NutriDietDataSource;
//# sourceMappingURL=nutri-diet.datasource.js.map