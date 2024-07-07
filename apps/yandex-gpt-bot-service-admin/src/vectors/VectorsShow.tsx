import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VECTORS_TITLE_FIELD } from "./VectorsTitle";
import { DOCUMENTS_TITLE_FIELD } from "../documents/DocumentsTitle";

export const VectorsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Queries"
          target="vectorId"
          label="QueriesItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="queryText" source="queryText" />
            <TextField label="responseText" source="responseText" />
            <ReferenceField
              label="vector"
              source="vectors.id"
              reference="Vectors"
            >
              <TextField source={VECTORS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
