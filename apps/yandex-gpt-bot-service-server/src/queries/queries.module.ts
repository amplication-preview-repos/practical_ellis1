import { Module } from "@nestjs/common";
import { QueriesModuleBase } from "./base/queries.module.base";
import { QueriesService } from "./queries.service";
import { QueriesController } from "./queries.controller";
import { QueriesResolver } from "./queries.resolver";

@Module({
  imports: [QueriesModuleBase],
  controllers: [QueriesController],
  providers: [QueriesService, QueriesResolver],
  exports: [QueriesService],
})
export class QueriesModule {}
