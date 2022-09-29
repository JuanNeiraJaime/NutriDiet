import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Paciente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_pac?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'number',
    required: true,
  })
  Edad: number;

  @property({
    type: 'string',
    required: true,
  })
  Sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  Alergia: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
