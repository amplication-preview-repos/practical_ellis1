import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VectorsListRelationFilter } from "../vectors/VectorsListRelationFilter";

export type DocumentsWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  fileContent?: StringNullableFilter;
  vectorsItems?: VectorsListRelationFilter;
};
