import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VECTORS_TITLE_FIELD } from "../vectors/VectorsTitle";

export const QueriesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QueriesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="queryText" source="queryText" />
        <TextField label="responseText" source="responseText" />
        <ReferenceField label="vector" source="vectors.id" reference="Vectors">
          <TextField source={VECTORS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
