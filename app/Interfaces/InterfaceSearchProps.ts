export interface SearchProps {
    fetchData?(key: string): any[];
    setResult?(key: unknown): any[];
    suggestionKey: any;
}

