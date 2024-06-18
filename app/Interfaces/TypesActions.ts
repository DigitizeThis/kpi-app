export type Action = 
    | {
        type: "ADD_KPIS";
        payload: string;
    }
    | {
        type: "ADD_METRIC";
        payload: {
            questionId: string | number | undefined,
            label: string,
            actual: number[],
            projected: number[],
            date: Date,
            reportingType: string,
            format: {
                currency: string,
                precision: number
            },
        };
    }
    | {
        type: "ADD_QUESTION";
        payload: {
            questionId: string,
            question: string
        };
    }