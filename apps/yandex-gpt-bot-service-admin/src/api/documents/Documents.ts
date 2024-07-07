import { Vectors } from "../vectors/Vectors";

export type Documents = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  filePath: string | null;
  fileContent: string | null;
  vectorsItems?: Array<Vectors>;
};
