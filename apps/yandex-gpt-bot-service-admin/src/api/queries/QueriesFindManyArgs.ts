import { QueriesWhereInput } from "./QueriesWhereInput";
import { QueriesOrderByInput } from "./QueriesOrderByInput";

export type QueriesFindManyArgs = {
  where?: QueriesWhereInput;
  orderBy?: Array<QueriesOrderByInput>;
  skip?: number;
  take?: number;
};
