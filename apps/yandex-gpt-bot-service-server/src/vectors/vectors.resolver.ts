import * as graphql from "@nestjs/graphql";
import { VectorsResolverBase } from "./base/vectors.resolver.base";
import { Vectors } from "./base/Vectors";
import { VectorsService } from "./vectors.service";

@graphql.Resolver(() => Vectors)
export class VectorsResolver extends VectorsResolverBase {
  constructor(protected readonly service: VectorsService) {
    super(service);
  }
}
