import { Vectors as TVectors } from "../api/vectors/Vectors";

export const VECTORS_TITLE_FIELD = "vectorId";

export const VectorsTitle = (record: TVectors): string => {
  return record.vectorId?.toString() || String(record.id);
};
