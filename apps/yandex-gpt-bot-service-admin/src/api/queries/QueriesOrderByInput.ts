import { SortOrder } from "../../util/SortOrder";

export type QueriesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  queryText?: SortOrder;
  responseText?: SortOrder;
  vectorId?: SortOrder;
};
