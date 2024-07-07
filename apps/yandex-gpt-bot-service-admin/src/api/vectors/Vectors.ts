import { Documents } from "../documents/Documents";
import { Queries } from "../queries/Queries";

export type Vectors = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  vectorData: string | null;
  vectorId: string | null;
  document?: Documents | null;
  queriesItems?: Array<Queries>;
};
