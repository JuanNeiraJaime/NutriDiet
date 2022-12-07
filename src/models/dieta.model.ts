import {Entity, model, property} from '@loopback/repository';

@model()
export class Dieta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  iddieta?: number;

  @property({
    type: 'string',
    required: true,
  })
  fechai: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaf: string;

  @property({
    type: 'number',
    required: true,
  })
  id_pac: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  ldes?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  lcomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  lcena?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  mdes?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  mcomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  mcena?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  mides?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  micomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  micena?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  jdes?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  jcomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  jcena?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  vdes?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  vcomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  vcena?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  sdes?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  scomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  scena?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  ddes?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  dcomida?: string;

  @property({
    type: 'string',
    default: "decision paciente",
  })
  dcena?: string;


  constructor(data?: Partial<Dieta>) {
    super(data);
  }
}

export interface DietaRelations {
  // describe navigational properties here
}

export type DietaWithRelations = Dieta & DietaRelations;
