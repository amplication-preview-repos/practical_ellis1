import * as graphql from "@nestjs/graphql";
import { UploadDocumentInputDto } from "../botActions/UploadDocumentInputDto";
import { QueryResultDto } from "../botActions/QueryResultDto";
import { BotActionsService } from "./botactions.service";

export class BotActionsResolver {
  constructor(protected readonly service: BotActionsService) {}

  @graphql.Query(() => [QueryResultDto])
  async QueryDocuments(
    @graphql.Args()
    args: UploadDocumentInputDto
  ): Promise<QueryResultDto[]> {
    return this.service.QueryDocuments(args);
  }

  @graphql.Mutation(() => String)
  async UploadDocument(
    @graphql.Args()
    args: UploadDocumentInputDto
  ): Promise<string> {
    return this.service.UploadDocument(args);
  }
}
