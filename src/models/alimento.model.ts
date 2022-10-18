import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Alimento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idalimento?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alimento>) {
    super(data);
  }
}

export interface AlimentoRelations {
  // describe navigational properties here
}

export type AlimentoWithRelations = Alimento & AlimentoRelations;
