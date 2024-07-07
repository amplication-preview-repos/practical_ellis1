import { DocumentsWhereUniqueInput } from "../documents/DocumentsWhereUniqueInput";
import { QueriesUpdateManyWithoutVectorsItemsInput } from "./QueriesUpdateManyWithoutVectorsItemsInput";

export type VectorsUpdateInput = {
  vectorData?: string | null;
  vectorId?: string | null;
  document?: DocumentsWhereUniqueInput | null;
  queriesItems?: QueriesUpdateManyWithoutVectorsItemsInput;
};
