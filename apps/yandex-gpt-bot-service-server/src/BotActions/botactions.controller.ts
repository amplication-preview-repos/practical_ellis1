import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BotActionsService } from "./botactions.service";
import { UploadDocumentInputDto } from "../botActions/UploadDocumentInputDto";
import { QueryResultDto } from "../botActions/QueryResultDto";

@swagger.ApiTags("botActions")
@common.Controller("botActions")
export class BotActionsController {
  constructor(protected readonly service: BotActionsService) {}

  @common.Post("/documents/query")
  @swagger.ApiOkResponse({
    type: QueryResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async QueryDocuments(
    @common.Body()
    body: UploadDocumentInputDto
  ): Promise<QueryResultDto[]> {
        return this.service.QueryDocuments(body);
      }

  @common.Post("/documents/upload")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadDocument(
    @common.Body()
    body: UploadDocumentInputDto
  ): Promise<string> {
        return this.service.UploadDocument(body);
      }
}
