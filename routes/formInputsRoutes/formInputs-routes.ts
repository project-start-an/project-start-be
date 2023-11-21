import { NextFunction, Request, Response, Router } from 'express';

const {
    getAllInputData,
    addNewInput
} = require('../../services/formInputServices/formInputs-services')

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

//Add new input
router.post('/addNewInput', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, mobilePhone, description } = req.body;

        if (!email || !mobilePhone || !description) {
            return res.status(400).json({ error: 'Missing required fields in the request body' });
        }

        await addNewInput(email, mobilePhone, description);

        res.status(201).json({ message: 'Input added successfully' });
    } catch (error) {
        console.error('Error in addNewInput:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;