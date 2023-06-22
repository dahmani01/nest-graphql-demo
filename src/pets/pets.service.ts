import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
    async findAll() : Promise<Pet[]> {
        let pet = new Pet() ; 
        pet.id = 1 ; 
        pet.name = "Namousa";

        return [pet] ; 
    }
}
