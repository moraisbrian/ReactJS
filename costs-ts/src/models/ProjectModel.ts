import { CategoryModel } from "./CategoryModel";

export class ProjectModel {
    id?: number;
    name?: string;
    budget?: number;
    category?: CategoryModel;
    cost?: number;
    services?: any[]
}