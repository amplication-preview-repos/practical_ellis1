import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VectorsTitle } from "../vectors/VectorsTitle";

export const QueriesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="queryText" multiline source="queryText" />
        <TextInput label="responseText" multiline source="responseText" />
        <ReferenceInput source="vector.id" reference="Vectors" label="vector">
          <SelectInput optionText={VectorsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
