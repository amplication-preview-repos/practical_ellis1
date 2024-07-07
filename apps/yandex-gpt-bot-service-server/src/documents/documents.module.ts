import { Module } from "@nestjs/common";
import { DocumentsModuleBase } from "./base/documents.module.base";
import { DocumentsService } from "./documents.service";
import { DocumentsController } from "./documents.controller";
import { DocumentsResolver } from "./documents.resolver";

@Module({
  imports: [DocumentsModuleBase],
  controllers: [DocumentsController],
  providers: [DocumentsService, DocumentsResolver],
  exports: [DocumentsService],
})
export class DocumentsModule {}
