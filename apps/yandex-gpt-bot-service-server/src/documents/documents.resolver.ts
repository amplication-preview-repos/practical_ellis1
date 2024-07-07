import * as graphql from "@nestjs/graphql";
import { DocumentsResolverBase } from "./base/documents.resolver.base";
import { Documents } from "./base/Documents";
import { DocumentsService } from "./documents.service";

@graphql.Resolver(() => Documents)
export class DocumentsResolver extends DocumentsResolverBase {
  constructor(protected readonly service: DocumentsService) {
    super(service);
  }
}
