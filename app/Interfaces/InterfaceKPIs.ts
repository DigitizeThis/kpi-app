import { ObjectId } from "mongodb";
import { Action } from "@/app/Interfaces/TypesActions";

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

export interface KpiPropsFeatured {
    _id?: ObjectId | string | number;
    title?: string;
    metrics?: Metrics[];
    description?: string;
    date?: Date;
    questions?: QuestionsProps[];
    isVisual?: boolean;
    isFavourite?: boolean;
    isTrending?: boolean | string;
    isFeatured?: boolean;
}

export interface AppState {
    appData: KpiPropsFeatured[];
}

export interface AppStateContextProps {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}
