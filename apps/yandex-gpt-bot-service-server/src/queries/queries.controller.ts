import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueriesService } from "./queries.service";
import { QueriesControllerBase } from "./base/queries.controller.base";

@swagger.ApiTags("queries")
@common.Controller("queries")
export class QueriesController extends QueriesControllerBase {
  constructor(protected readonly service: QueriesService) {
    super(service);
  }
}
