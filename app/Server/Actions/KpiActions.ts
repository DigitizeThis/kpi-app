'use server';

import { LibraryService } from "../Service/LibraryService/LibraryService";

export const fetchKpis = async (pageNumber: number) => {
  const libraryService = new LibraryService();
  return await libraryService.searchKpis({}, pageNumber, 10);
};