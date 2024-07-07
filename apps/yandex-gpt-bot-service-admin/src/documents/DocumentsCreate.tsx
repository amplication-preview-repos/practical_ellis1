import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VectorsTitle } from "../vectors/VectorsTitle";

export const DocumentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <TextInput label="filePath" source="filePath" />
        <TextInput label="fileContent" multiline source="fileContent" />
        <ReferenceArrayInput
          source="vectorsItems"
          reference="Vectors"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VectorsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
