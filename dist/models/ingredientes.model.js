"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredientes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Ingredientes = class Ingredientes extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ingredientes.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Ingredientes.prototype, "id_alimento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Ingredientes.prototype, "id", void 0);
Ingredientes = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ingredientes);
exports.Ingredientes = Ingredientes;
//# sourceMappingURL=ingredientes.model.js.map