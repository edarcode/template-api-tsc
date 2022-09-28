import { Router } from "express";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";

export const users = Router();

users.route("/").get(getAllUsersController);
