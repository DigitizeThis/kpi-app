interface PillOptionsProps {
    value: string;
    label: string;
};

interface PillSelectorProps {
    selectedValue: unknown;
    onChange: (value: string) => void;
    options: PillOptionsProps[];
};

export type {
    PillOptionsProps,
    PillSelectorProps
};
