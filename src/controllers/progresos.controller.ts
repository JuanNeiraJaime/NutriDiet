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
import {Progreso} from '../models';
import {ProgresoRepository} from '../repositories';

export class ProgresosController {
  constructor(
    @repository(ProgresoRepository)
    public progresoRepository: ProgresoRepository,
  ) { }

  @post('/progresos')
  @response(200, {
    description: 'Progreso model instance',
    content: {'application/json': {schema: getModelSchemaRef(Progreso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Progreso, {
            title: 'NewProgreso',
            exclude: ['id_progreso'],
          }),
        },
      },
    })
    progreso: Omit<Progreso, 'id_progreso'>,
  ): Promise<Progreso> {
    return this.progresoRepository.create(progreso);
  }

  @get('/progresos/count')
  @response(200, {
    description: 'Progreso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Progreso) where?: Where<Progreso>,
  ): Promise<Count> {
    return this.progresoRepository.count(where);
  }

  @get('/progresos')
  @response(200, {
    description: 'Array of Progreso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Progreso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Progreso) filter?: Filter<Progreso>,
  ): Promise<Progreso[]> {
    return this.progresoRepository.find(filter);
  }

  @patch('/progresos')
  @response(200, {
    description: 'Progreso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Progreso, {partial: true}),
        },
      },
    })
    progreso: Progreso,
    @param.where(Progreso) where?: Where<Progreso>,
  ): Promise<Count> {
    return this.progresoRepository.updateAll(progreso, where);
  }

  @get('/progresos/{id}')
  @response(200, {
    description: 'Progreso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Progreso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Progreso, {exclude: 'where'}) filter?: FilterExcludingWhere<Progreso>
  ): Promise<Progreso> {
    return this.progresoRepository.findById(id, filter);
  }

  @patch('/progresos/{id}')
  @response(204, {
    description: 'Progreso PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Progreso, {partial: true}),
        },
      },
    })
    progreso: Progreso,
  ): Promise<void> {
    await this.progresoRepository.updateById(id, progreso);
  }

  @put('/progresos/{id}')
  @response(204, {
    description: 'Progreso PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() progreso: Progreso,
  ): Promise<void> {
    await this.progresoRepository.replaceById(id, progreso);
  }

  @del('/progresos/{id}')
  @response(204, {
    description: 'Progreso DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.progresoRepository.deleteById(id);
  }
}
