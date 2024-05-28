export type ILibrary = {
    // ... (book properties)
};
  
export interface ILibraryService {
    searchKpis(filter: Partial<ILibrary>): Promise<{ data: ILibrary[], totalCount: number }>;
}
