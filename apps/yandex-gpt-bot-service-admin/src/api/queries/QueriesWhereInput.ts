import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VectorsWhereUniqueInput } from "../vectors/VectorsWhereUniqueInput";

export type QueriesWhereInput = {
  id?: StringFilter;
  queryText?: StringNullableFilter;
  responseText?: StringNullableFilter;
  vector?: VectorsWhereUniqueInput;
};
