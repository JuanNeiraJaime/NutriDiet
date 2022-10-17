import { Entity } from '@loopback/repository';
export declare class Progreso extends Entity {
    id_progreso?: number;
    Fecha: string;
    Peso: number;
    PorcentGrasa: string;
    PorcentMusculo: string;
    CmCintura: string;
    CmBrazo: string;
    [prop: string]: any;
    constructor(data?: Partial<Progreso>);
}
export interface ProgresoRelations {
}
export declare type ProgresoWithRelations = Progreso & ProgresoRelations;
