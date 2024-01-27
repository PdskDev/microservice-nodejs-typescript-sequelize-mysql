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
const sequelize_1 = require("sequelize");
const tutorial_model_1 = __importDefault(require("../models/tutorial.model"));
class TutorialRepository {
    save(tutorial) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield tutorial_model_1.default.create({
                    title: tutorial.title,
                    description: tutorial.description,
                    published: tutorial.published,
                });
            }
            catch (error) {
                throw new Error('Failed to create new tutorial: ' + error);
            }
        });
    }
    retrieveAll(searchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let condition = {
                    title: {},
                    published: false,
                };
                if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.published)
                    condition.published = true;
                if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.title)
                    condition.title = { [sequelize_1.Op.like]: `%${searchParams.title}%` };
                return yield tutorial_model_1.default.findAll({
                    where: {
                        condition,
                    },
                });
            }
            catch (error) {
                throw new Error('Failed to retreive list of tutorials: ' + error);
            }
        });
    }
    retreiveById(tutorialId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return tutorial_model_1.default.findByPk(tutorialId);
            }
            catch (error) {
                throw new Error(`Failed to retreive tutorial with id ${tutorialId}: ` + error);
            }
        });
    }
    update(tutorial) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, description, published } = tutorial;
            try {
                const affectedRows = yield tutorial_model_1.default.update({ title, description, published }, { where: { id: id } });
                return affectedRows[0];
            }
            catch (error) {
                throw new Error(`Failed to update tutorial with id ${id}: ` + error);
            }
        });
    }
    delete(tutorialId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield tutorial_model_1.default.destroy({
                    where: { id: tutorialId },
                });
            }
            catch (error) {
                throw new Error(`Failed to delete tutorial with id ${tutorialId}: ` + error);
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return tutorial_model_1.default.destroy({
                    where: {},
                    truncate: false,
                });
            }
            catch (error) {
                throw new Error(`Failed to delete tutorials: ` + error);
            }
        });
    }
}
exports.default = new TutorialRepository();
