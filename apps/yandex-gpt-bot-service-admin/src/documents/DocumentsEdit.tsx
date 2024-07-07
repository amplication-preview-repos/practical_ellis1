import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VectorsTitle } from "../vectors/VectorsTitle";

export const DocumentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
