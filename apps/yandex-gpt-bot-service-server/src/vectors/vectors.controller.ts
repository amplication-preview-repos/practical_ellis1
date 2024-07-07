import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VectorsService } from "./vectors.service";
import { VectorsControllerBase } from "./base/vectors.controller.base";

@swagger.ApiTags("vectors")
@common.Controller("vectors")
export class VectorsController extends VectorsControllerBase {
  constructor(protected readonly service: VectorsService) {
    super(service);
  }
}
