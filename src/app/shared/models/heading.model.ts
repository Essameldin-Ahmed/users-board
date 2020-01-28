import { BreadCrumbModel } from './breadcrumb.model';

export interface HeadingModel {
    title: string;
    crumbData: BreadCrumbModel[];
    actionText?: string;
}
