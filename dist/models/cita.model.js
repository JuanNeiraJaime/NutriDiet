"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Cita = class Cita extends repository_1.Entity {
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
], Cita.prototype, "id_cita", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cita.prototype, "Hora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", Date)
], Cita.prototype, "Fecha", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cita.prototype, "id_pac", void 0);
Cita = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cita);
exports.Cita = Cita;
//# sourceMappingURL=cita.model.js.map