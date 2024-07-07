import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VECTORS_TITLE_FIELD } from "../vectors/VectorsTitle";

export const QueriesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="queryText" source="queryText" />
        <TextField label="responseText" source="responseText" />
        <ReferenceField label="vector" source="vectors.id" reference="Vectors">
          <TextField source={VECTORS_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
