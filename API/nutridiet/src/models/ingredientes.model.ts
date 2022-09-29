import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Ingredientes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  id_alimento: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ingredientes>) {
    super(data);
  }
}

export interface IngredientesRelations {
  // describe navigational properties here
}

export type IngredientesWithRelations = Ingredientes & IngredientesRelations;
