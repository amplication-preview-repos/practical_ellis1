import { SortOrder } from "../../util/SortOrder";

export type DocumentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  fileContent?: SortOrder;
};
