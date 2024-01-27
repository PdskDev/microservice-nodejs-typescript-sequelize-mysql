"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorial_controller_1 = __importDefault(require("../controllers/tutorial.controller"));
class TutorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new tutorial_controller_1.default();
        this.apiPath = '/api/tutorials';
        this.initializeRoutes();
    }
    initializeRoutes() {
        //Welcome test message
        this.router.get('/', this.controller.welcomeMessage);
        //Create a new tutorial
        this.router.post(this.apiPath, this.controller.create);
        //Retreille all tutorials
        this.router.get(this.apiPath, this.controller.findAll);
        //Retreive single tutorial
        this.router.get(`${this.apiPath}/:id`, this.controller.findOne);
        //Update single tutorial
        this.router.put(`${this.apiPath}/:id`, this.controller.update);
        //delete single tutorial
        this.router.delete(`${this.apiPath}/:id`, this.controller.delete);
        //delete all tutorials
        this.router.delete(this.apiPath, this.controller.deleteAll);
        //get all published tutorials
        this.router.get(`${this.apiPath}/published`, this.controller.findAllPublished);
    }
}
exports.default = new TutorialRoutes().router;
