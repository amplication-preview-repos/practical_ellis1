import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentsWhereUniqueInput } from "../documents/DocumentsWhereUniqueInput";
import { QueriesListRelationFilter } from "../queries/QueriesListRelationFilter";

export type VectorsWhereInput = {
  id?: StringFilter;
  vectorData?: StringNullableFilter;
  vectorId?: StringNullableFilter;
  document?: DocumentsWhereUniqueInput;
  queriesItems?: QueriesListRelationFilter;
};
