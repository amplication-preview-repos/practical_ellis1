import { DocumentsWhereUniqueInput } from "../documents/DocumentsWhereUniqueInput";
import { QueriesCreateNestedManyWithoutVectorsItemsInput } from "./QueriesCreateNestedManyWithoutVectorsItemsInput";

export type VectorsCreateInput = {
  vectorData?: string | null;
  vectorId?: string | null;
  document?: DocumentsWhereUniqueInput | null;
  queriesItems?: QueriesCreateNestedManyWithoutVectorsItemsInput;
};
