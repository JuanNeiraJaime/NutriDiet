import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Progreso extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_progreso?: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  Peso: number;

  @property({
    type: 'string',
    required: true,
  })
  PorcentGrasa: string;

  @property({
    type: 'string',
    required: true,
  })
  PorcentMusculo: string;

  @property({
    type: 'string',
    required: true,
  })
  CmCintura: string;

  @property({
    type: 'string',
    required: true,
  })
  CmBrazo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Progreso>) {
    super(data);
  }
}

export interface ProgresoRelations {
  // describe navigational properties here
}

export type ProgresoWithRelations = Progreso & ProgresoRelations;
