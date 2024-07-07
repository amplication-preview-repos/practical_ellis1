import { VectorsCreateNestedManyWithoutDocumentsItemsInput } from "./VectorsCreateNestedManyWithoutDocumentsItemsInput";

export type DocumentsCreateInput = {
  fileName?: string | null;
  filePath?: string | null;
  fileContent?: string | null;
  vectorsItems?: VectorsCreateNestedManyWithoutDocumentsItemsInput;
};
