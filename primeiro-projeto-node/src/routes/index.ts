import { Router } from "express";
import appointmensRouter from './appointments.routes';
import appointmentsRouter from "./appointments.routes";

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
