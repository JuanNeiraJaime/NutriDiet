"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const application_1 = require("./application");
async function migrate(args) {
    const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
    console.log('Migrating schemas (%s existing schema)', existingSchema);
    const app = new application_1.NutridietApplication();
    await Promise.all([
        ...app.find(authentication_jwt_1.UserServiceBindings.USER_REPOSITORY),
        ...app.find(authentication_jwt_1.UserServiceBindings.USER_CREDENTIALS_REPOSITORY)
    ].map(b => app.get(b.key)));
    await app.boot();
    await app.migrateSchema({ existingSchema });
    // Connectors usually keep a pool of opened connections,
    // this keeps the process running even after all work is done.
    // We need to exit explicitly.
    process.exit(0);
}
exports.migrate = migrate;
migrate(process.argv).catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
});
//# sourceMappingURL=migrate.js.map