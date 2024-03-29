"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_routes_1 = __importDefault(require("./tutorial.routes"));
class Routes {
    constructor(app) {
        app.use('/', tutorial_routes_1.default);
        app.use('/api/tutorials', tutorial_routes_1.default);
    }
}
exports.default = Routes;
