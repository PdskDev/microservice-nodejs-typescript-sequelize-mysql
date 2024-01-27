"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_repo_impl_1 = __importDefault(require("../repositories/tutorial.repo.impl"));
class TutorialController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = req.body.title;
            const published = req.body.published;
            return yield tutorial_repo_impl_1.default
                .retrieveAll({ title, published })
                .then((tutorials) => {
                res.status(200).json({
                    tutorials: tutorials,
                });
            });
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    findAllPublished(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    welcomeMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({
                message: 'Welcome to NadetDev Node.js Rest API with sequelize and Mysql',
            });
        });
    }
}
exports.default = TutorialController;
