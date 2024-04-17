import Controller from "interfaces/controller.interfaces";
import { Request, Response,NextFunction,Router } from "express";
import { checkIdParam } from "../middlewares/deviceIdParam.middleware";
import DataService from "../modules/services/data.service"
let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

class DataController implements Controller{
    public path = '/api/data';
    public router = Router();
    public dataService = new DataService;
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
       this.router.get(`${this.path}/latest`,this.getLatestReadingsFromAllDevices);
       
       this.router.post(`${this.path}/:id`,checkIdParam,this.addData);

       this.router.get(`${this.path}/:id`, checkIdParam,this.getData);

        this.router.get(`${this.path}/:id/latest`, checkIdParam,this.getLatest);

        this.router.get(`${this.path}/:id/:num`,checkIdParam, this.getRange);

        this.router.delete(`${this.path}/all`, this.deleteAll);

        this.router.delete(`${this.path}/:id`,checkIdParam, this.delete);
    }
 
    private getLatestReadingsFromAllDevices = async (request: Request, response: Response, next: NextFunction) =>{
        const newestData = await this.dataService.getAllNewest();
        response.status(200).json(newestData);
       };
    
       private addData = async (request: Request, response: Response, next: NextFunction) => {
        const { temperature,pressure,humidity } = request.body;
        const { id } = request.params;
     
        const data = {
            temperature,
            pressure,
            humidity,
            deviceId: parseInt(id)
        }
       
        try {
           
            await this.dataService.createData(data);
            response.status(200).json(data);
        } catch (error) {
            console.error(`Validation Error: ${error.message}`);
            response.status(400).json({ error: 'Invalid input data.' });
        }
     };
     

    private getData = async (request: Request, response: Response, next: NextFunction) => {
        const {id} = request.params;
        const data = testArr;
        response.status(200).json(data[Number(id)]);
    }

    private getLatest = async (request: Request, response: Response, next: NextFunction) => {
        const {id} = request.params;
        const data = testArr;
        const max = data.reduce((a, b) => Math.max(a, b), -Infinity);
        response.status(200).json(max);

    }

    private getRange = async (request: Request, response: Response, next: NextFunction) => {
        const {id} = request.params;
        const {num} = request.params;
        try {
            if (num) {
                const data = await this.dataService.query(id);
                const startIndex = Math.max(0, data.length - Number(num));
                const endIndex = Math.min(data.length, startIndex + Number(num));
                const array = data.slice(startIndex, endIndex);
                response.status(200).json(array);
            } else {
                const latestEntry = await this.dataService.get(id);
                response.status(200).json(latestEntry);
            }
        } catch (error) {
            console.error(`Error occurred while fetching data: ${error}`);
            response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    private getAllDeviceData = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const allData = await this.dataService.query(id);
        response.status(200).json(allData);
    };

    private deleteAll = async (request: Request, response: Response, next: NextFunction) => {
        try {
            await this.dataService.deleteData("all");
            response.status(200).json({ message: 'All devices data deleted successfully.' });
        } catch (error) {
            console.error(`Error occurred while cleaning all devices data: ${error}`);
            response.status(500).json({ error: 'Internal Server Error' });
        }
    }

    private delete = async (request: Request, response: Response, next: NextFunction) => {
        const {id} = request.params;
        try {
            await this.dataService.deleteData(id);
            response.status(200).json({ message: `Data for device with ID ${id} deleted successfully.` });
        } catch (error) {
            console.error(`Error occurred while cleaning data for device with ID ${id}: ${error}`);
            response.status(500).json({ error: 'Internal Server Error' });
        }
    };
    }
      

export default DataController;