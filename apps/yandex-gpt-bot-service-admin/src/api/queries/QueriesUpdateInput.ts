import { VectorsWhereUniqueInput } from "../vectors/VectorsWhereUniqueInput";

export type QueriesUpdateInput = {
  queryText?: string | null;
  responseText?: string | null;
  vector?: VectorsWhereUniqueInput | null;
};
