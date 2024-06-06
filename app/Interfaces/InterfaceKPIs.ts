import { ObjectId } from "mongodb";

export interface QuestionsProps {
    _id: string;
    question: string;
}

export interface FormatProps {
    currency: string;
    precision: number;
}

export interface Metrics {
    _id: string | number | undefined;
    label: string;
    actual: Array<number>;
    projected: Array<number>;
    date: Date;
    reportingType: string;
    format: FormatProps;
}

export interface KpiProps {
    _id?: string;
    title?: string;
    metrics?: Metrics[];
    description?: string;
    date?: Date;
    questions?: Array<QuestionsProps>;
    isVisual?: boolean;
    isFavourite?: boolean;
    isTrending?: boolean;
    isFeatured?: boolean;
}

export interface KpiPropsFeatured {
    _id?: ObjectId | string | number;
    title?: string;
    metrics?: Metrics[];
    description?: string;
    date?: Date;
    questions?: Array<QuestionsProps>;
    isVisual?: boolean;
    isFavourite?: boolean;
    isTrending?: boolean;
    isFeatured?: boolean;
}

export interface KpiPropsFeaturedAll {
    kpis: KpiPropsFeatured[];
}

export interface KpisPropsAll {
   kpis: KpiProps[];
}
