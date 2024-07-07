import { Queries as TQueries } from "../api/queries/Queries";

export const QUERIES_TITLE_FIELD = "id";

export const QueriesTitle = (record: TQueries): string => {
  return record.id?.toString() || String(record.id);
};
