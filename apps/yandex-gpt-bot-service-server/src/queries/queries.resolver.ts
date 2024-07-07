import * as graphql from "@nestjs/graphql";
import { QueriesResolverBase } from "./base/queries.resolver.base";
import { Queries } from "./base/Queries";
import { QueriesService } from "./queries.service";

@graphql.Resolver(() => Queries)
export class QueriesResolver extends QueriesResolverBase {
  constructor(protected readonly service: QueriesService) {
    super(service);
  }
}
