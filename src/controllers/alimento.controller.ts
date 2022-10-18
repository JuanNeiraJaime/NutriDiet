import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Alimento} from '../models';
import {AlimentoRepository} from '../repositories';

export class AlimentoController {
  constructor(
    @repository(AlimentoRepository)
    public alimentoRepository : AlimentoRepository,
  ) {}

  @post('/alimentos')
  @response(200, {
    description: 'Alimento model instance',
    content: {'application/json': {schema: getModelSchemaRef(Alimento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alimento, {
            title: 'NewAlimento',
            
          }),
        },
      },
    })
    alimento: Alimento,
  ): Promise<Alimento> {
    return this.alimentoRepository.create(alimento);
  }

  @get('/alimentos/count')
  @response(200, {
    description: 'Alimento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Alimento) where?: Where<Alimento>,
  ): Promise<Count> {
    return this.alimentoRepository.count(where);
  }

  @get('/alimentos')
  @response(200, {
    description: 'Array of Alimento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Alimento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Alimento) filter?: Filter<Alimento>,
  ): Promise<Alimento[]> {
    return this.alimentoRepository.find(filter);
  }

  @patch('/alimentos')
  @response(200, {
    description: 'Alimento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alimento, {partial: true}),
        },
      },
    })
    alimento: Alimento,
    @param.where(Alimento) where?: Where<Alimento>,
  ): Promise<Count> {
    return this.alimentoRepository.updateAll(alimento, where);
  }

  @get('/alimentos/{id}')
  @response(200, {
    description: 'Alimento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Alimento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Alimento, {exclude: 'where'}) filter?: FilterExcludingWhere<Alimento>
  ): Promise<Alimento> {
    return this.alimentoRepository.findById(id, filter);
  }

  @patch('/alimentos/{id}')
  @response(204, {
    description: 'Alimento PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alimento, {partial: true}),
        },
      },
    })
    alimento: Alimento,
  ): Promise<void> {
    await this.alimentoRepository.updateById(id, alimento);
  }

  @put('/alimentos/{id}')
  @response(204, {
    description: 'Alimento PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() alimento: Alimento,
  ): Promise<void> {
    await this.alimentoRepository.replaceById(id, alimento);
  }

  @del('/alimentos/{id}')
  @response(204, {
    description: 'Alimento DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.alimentoRepository.deleteById(id);
  }
}
