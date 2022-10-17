import { Entity } from '@loopback/repository';
export declare class Alimento extends Entity {
    idalimento?: number;
    nombre: string;
    tipo: string;
    [prop: string]: any;
    constructor(data?: Partial<Alimento>);
}
export interface AlimentoRelations {
}
export declare type AlimentoWithRelations = Alimento & AlimentoRelations;
