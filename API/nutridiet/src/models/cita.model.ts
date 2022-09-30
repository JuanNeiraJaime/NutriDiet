import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cita extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_cita?: number;

  @property({
    type: 'number',
    required: true,
  })
  Hora: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: Date;

  @property({
    type: 'number',
    required: true,
  })
  id_pac: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cita>) {
    super(data);
  }
}

export interface CitaRelations {
  // describe navigational properties here
}

export type CitaWithRelations = Cita & CitaRelations;
