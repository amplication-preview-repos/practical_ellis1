import { VectorsUpdateManyWithoutDocumentsItemsInput } from "./VectorsUpdateManyWithoutDocumentsItemsInput";

export type DocumentsUpdateInput = {
  fileName?: string | null;
  filePath?: string | null;
  fileContent?: string | null;
  vectorsItems?: VectorsUpdateManyWithoutDocumentsItemsInput;
};
