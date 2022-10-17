"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Alimento = class Alimento extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Alimento.prototype, "idalimento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Alimento.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Alimento.prototype, "tipo", void 0);
Alimento = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Alimento);
exports.Alimento = Alimento;
//# sourceMappingURL=alimento.model.js.map