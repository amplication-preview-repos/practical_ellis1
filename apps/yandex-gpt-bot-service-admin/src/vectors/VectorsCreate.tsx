import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";
import { QueriesTitle } from "../queries/QueriesTitle";

export const VectorsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
