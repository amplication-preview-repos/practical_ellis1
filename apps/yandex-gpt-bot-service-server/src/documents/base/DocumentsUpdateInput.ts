/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { VectorsUpdateManyWithoutDocumentsItemsInput } from "./VectorsUpdateManyWithoutDocumentsItemsInput";
import { Type } from "class-transformer";

@InputType()
class DocumentsUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filePath?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileContent?: string | null;

  @ApiProperty({
    required: false,
    type: () => VectorsUpdateManyWithoutDocumentsItemsInput,
  })
  @ValidateNested()
  @Type(() => VectorsUpdateManyWithoutDocumentsItemsInput)
  @IsOptional()
  @Field(() => VectorsUpdateManyWithoutDocumentsItemsInput, {
    nullable: true,
  })
  vectorsItems?: VectorsUpdateManyWithoutDocumentsItemsInput;
}

export { DocumentsUpdateInput as DocumentsUpdateInput };
