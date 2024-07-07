import { Injectable } from "@nestjs/common";
import { UploadDocumentInputDto } from "../botActions/UploadDocumentInputDto";
import { QueryResultDto } from "../botActions/QueryResultDto";

@Injectable()
export class BotActionsService {
  constructor() {}
  async QueryDocuments(args: UploadDocumentInputDto): Promise<QueryResultDto[]> {
    throw new Error("Not implemented");
  }
  async UploadDocument(args: UploadDocumentInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
