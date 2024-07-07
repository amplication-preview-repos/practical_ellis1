import { VectorsWhereUniqueInput } from "../vectors/VectorsWhereUniqueInput";

export type QueriesCreateInput = {
  queryText?: string | null;
  responseText?: string | null;
  vector?: VectorsWhereUniqueInput | null;
};
