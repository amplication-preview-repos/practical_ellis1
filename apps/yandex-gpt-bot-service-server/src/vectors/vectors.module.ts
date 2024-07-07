import { Module } from "@nestjs/common";
import { VectorsModuleBase } from "./base/vectors.module.base";
import { VectorsService } from "./vectors.service";
import { VectorsController } from "./vectors.controller";
import { VectorsResolver } from "./vectors.resolver";

@Module({
  imports: [VectorsModuleBase],
  controllers: [VectorsController],
  providers: [VectorsService, VectorsResolver],
  exports: [VectorsService],
})
export class VectorsModule {}
