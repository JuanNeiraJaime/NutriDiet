import { Entity } from '@loopback/repository';
export declare class Ingredientes extends Entity {
    nombre: string;
    id_alimento: number;
    id: number;
    [prop: string]: any;
    constructor(data?: Partial<Ingredientes>);
}
export interface IngredientesRelations {
}
export declare type IngredientesWithRelations = Ingredientes & IngredientesRelations;
