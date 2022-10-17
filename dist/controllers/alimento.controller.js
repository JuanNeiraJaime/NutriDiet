"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlimentoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AlimentoController = class AlimentoController {
    constructor(alimentoRepository) {
        this.alimentoRepository = alimentoRepository;
    }
    async create(alimento) {
        return this.alimentoRepository.create(alimento);
    }
    async count(where) {
        return this.alimentoRepository.count(where);
    }
    async find(filter) {
        return this.alimentoRepository.find(filter);
    }
    async updateAll(alimento, where) {
        return this.alimentoRepository.updateAll(alimento, where);
    }
    async findById(id, filter) {
        return this.alimentoRepository.findById(id, filter);
    }
    async updateById(id, alimento) {
        await this.alimentoRepository.updateById(id, alimento);
    }
    async replaceById(id, alimento) {
        await this.alimentoRepository.replaceById(id, alimento);
    }
    async deleteById(id) {
        await this.alimentoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/alimentos'),
    (0, rest_1.response)(200, {
        description: 'Alimento model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Alimento) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alimento, {
                    title: 'NewAlimento',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Alimento]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alimentos/count'),
    (0, rest_1.response)(200, {
        description: 'Alimento model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Alimento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alimentos'),
    (0, rest_1.response)(200, {
        description: 'Array of Alimento model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Alimento, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Alimento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alimentos'),
    (0, rest_1.response)(200, {
        description: 'Alimento PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alimento, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Alimento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Alimento, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alimentos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Alimento model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alimento, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Alimento, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/alimentos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alimento PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Alimento, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Alimento]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/alimentos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alimento PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Alimento]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/alimentos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Alimento DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AlimentoController.prototype, "deleteById", null);
AlimentoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AlimentoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AlimentoRepository])
], AlimentoController);
exports.AlimentoController = AlimentoController;
//# sourceMappingURL=alimento.controller.js.map