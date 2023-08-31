// src/controllers/SquadronsController.ts

import { Request, Response } from 'express';
import { Squadron } from '../models/Squadron';

const mockSquadrons: Squadron[] = [
    new Squadron('1', 'Red Falcons', "1"),
    new Squadron('2', 'Blue Thunder', "2"),
    // Add more mock squadrons
];

export class SquadronsController {
    static getAllSquadrons(req: Request, res: Response) {
        res.json(mockSquadrons);
    }

    static createSquadron(req: Request, res: Response) {
        const newSquadron = new Squadron(req.body.id, req.body.name, req.body.members);
        mockSquadrons.push(newSquadron);
        res.status(201).json(newSquadron);
    }

    // Add other squadron-related controller functions
}
