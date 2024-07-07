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
import { DOCUMENTS_TITLE_FIELD } from "../documents/DocumentsTitle";

export const VectorsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VectorsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vectorData" source="vectorData" />
        <TextField label="vectorId" source="vectorId" />
        <ReferenceField
          label="document"
          source="documents.id"
          reference="Documents"
        >
          <TextField source={DOCUMENTS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
