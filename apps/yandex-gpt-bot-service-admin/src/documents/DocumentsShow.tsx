import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOCUMENTS_TITLE_FIELD } from "./DocumentsTitle";

export const DocumentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="filePath" source="filePath" />
        <TextField label="fileContent" source="fileContent" />
        <ReferenceManyField
          reference="Vectors"
          target="documentId"
          label="VectorsItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
