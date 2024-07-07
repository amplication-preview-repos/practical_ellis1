import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";
import { QueriesTitle } from "../queries/QueriesTitle";

export const VectorsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="vectorData" multiline source="vectorData" />
        <TextInput label="vectorId" source="vectorId" />
        <ReferenceInput
          source="document.id"
          reference="Documents"
          label="document"
        >
          <SelectInput optionText={DocumentsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="queriesItems"
          reference="Queries"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueriesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
