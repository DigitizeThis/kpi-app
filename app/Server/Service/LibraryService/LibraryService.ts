import { KpiService } from "../../KpiService";
import { ILibrary, ILibraryService } from "../../../Interfaces/InterfaceKPIServiceLibrary";

export class LibraryService implements ILibraryService {
  private kpiRepo: KpiService<ILibrary>;

  constructor() {
    this.kpiRepo = new KpiService<ILibrary>("kpis");
  }

  async searchKpis(
    filter: Partial<ILibrary>,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: ILibrary[], totalCount: number }> {
    return this.kpiRepo.find(filter, page, limit);
  }
}