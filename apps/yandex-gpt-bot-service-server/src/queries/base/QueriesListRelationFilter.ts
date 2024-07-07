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
import { QueriesWhereInput } from "./QueriesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QueriesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QueriesWhereInput,
  })
  @ValidateNested()
  @Type(() => QueriesWhereInput)
  @IsOptional()
  @Field(() => QueriesWhereInput, {
    nullable: true,
  })
  every?: QueriesWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueriesWhereInput,
  })
  @ValidateNested()
  @Type(() => QueriesWhereInput)
  @IsOptional()
  @Field(() => QueriesWhereInput, {
    nullable: true,
  })
  some?: QueriesWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueriesWhereInput,
  })
  @ValidateNested()
  @Type(() => QueriesWhereInput)
  @IsOptional()
  @Field(() => QueriesWhereInput, {
    nullable: true,
  })
  none?: QueriesWhereInput;
}
export { QueriesListRelationFilter as QueriesListRelationFilter };
