import { Vectors } from "../vectors/Vectors";

export type Queries = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  queryText: string | null;
  responseText: string | null;
  vector?: Vectors | null;
};
