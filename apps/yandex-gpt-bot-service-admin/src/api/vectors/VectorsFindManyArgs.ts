import { VectorsWhereInput } from "./VectorsWhereInput";
import { VectorsOrderByInput } from "./VectorsOrderByInput";

export type VectorsFindManyArgs = {
  where?: VectorsWhereInput;
  orderBy?: Array<VectorsOrderByInput>;
  skip?: number;
  take?: number;
};
