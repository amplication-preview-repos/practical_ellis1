import { Documents as TDocuments } from "../api/documents/Documents";

export const DOCUMENTS_TITLE_FIELD = "fileName";

export const DocumentsTitle = (record: TDocuments): string => {
  return record.fileName?.toString() || String(record.id);
};
