import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Alimento } from '../models';
import { AlimentoRepository } from '../repositories';
export declare class AlimentoController {
    alimentoRepository: AlimentoRepository;
    constructor(alimentoRepository: AlimentoRepository);
    create(alimento: Alimento): Promise<Alimento>;
    count(where?: Where<Alimento>): Promise<Count>;
    find(filter?: Filter<Alimento>): Promise<Alimento[]>;
    updateAll(alimento: Alimento, where?: Where<Alimento>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Alimento>): Promise<Alimento>;
    updateById(id: number, alimento: Alimento): Promise<void>;
    replaceById(id: number, alimento: Alimento): Promise<void>;
    deleteById(id: number): Promise<void>;
}
