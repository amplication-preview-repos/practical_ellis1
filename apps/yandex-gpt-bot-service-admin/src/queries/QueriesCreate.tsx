import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VectorsTitle } from "../vectors/VectorsTitle";

export const QueriesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="queryText" multiline source="queryText" />
        <TextInput label="responseText" multiline source="responseText" />
        <ReferenceInput source="vector.id" reference="Vectors" label="vector">
          <SelectInput optionText={VectorsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
