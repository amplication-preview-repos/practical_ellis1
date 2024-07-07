import { SortOrder } from "../../util/SortOrder";

export type VectorsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  vectorData?: SortOrder;
  vectorId?: SortOrder;
  documentId?: SortOrder;
};
