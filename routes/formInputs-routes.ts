import { NextFunction, Request, Response, Router } from 'express';

const {
    getAllInputData
} = require('../services/formInputServices/formInputs-services')

const router: Router = Router();

//Get all inputed data endpoint
router.get('/getAllInputData', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getAllInputData();
        res.status(200).json(data);
    } catch (error) {

        console.error('Error in getAllInputData:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;