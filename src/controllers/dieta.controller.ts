import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Dieta} from '../models';
import {DietaRepository} from '../repositories';

export class DietaController {
  constructor(
    @repository(DietaRepository)
    public dietaRepository : DietaRepository,
  ) {}

  @post('/dietas')
  @response(200, {
    description: 'Dieta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Dieta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dieta, {
            title: 'NewDieta',
            exclude: ['iddieta'],
          }),
        },
      },
    })
    dieta: Omit<Dieta, 'iddieta'>,
  ): Promise<Dieta> {
    return this.dietaRepository.create(dieta);
  }

  @get('/dietas/count')
  @response(200, {
    description: 'Dieta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Dieta) where?: Where<Dieta>,
  ): Promise<Count> {
    return this.dietaRepository.count(where);
  }

  @get('/dietas')
  @response(200, {
    description: 'Array of Dieta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Dieta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Dieta) filter?: Filter<Dieta>,
  ): Promise<Dieta[]> {
    return this.dietaRepository.find(filter);
  }

  @patch('/dietas')
  @response(200, {
    description: 'Dieta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dieta, {partial: true}),
        },
      },
    })
    dieta: Dieta,
    @param.where(Dieta) where?: Where<Dieta>,
  ): Promise<Count> {
    return this.dietaRepository.updateAll(dieta, where);
  }

  @get('/dietas/{id}')
  @response(200, {
    description: 'Dieta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Dieta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Dieta, {exclude: 'where'}) filter?: FilterExcludingWhere<Dieta>
  ): Promise<Dieta> {
    return this.dietaRepository.findById(id, filter);
  }

  @patch('/dietas/{id}')
  @response(204, {
    description: 'Dieta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dieta, {partial: true}),
        },
      },
    })
    dieta: Dieta,
  ): Promise<void> {
    await this.dietaRepository.updateById(id, dieta);
  }

  @put('/dietas/{id}')
  @response(204, {
    description: 'Dieta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() dieta: Dieta,
  ): Promise<void> {
    await this.dietaRepository.replaceById(id, dieta);
  }

  @del('/dietas/{id}')
  @response(204, {
    description: 'Dieta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dietaRepository.deleteById(id);
  }
}
