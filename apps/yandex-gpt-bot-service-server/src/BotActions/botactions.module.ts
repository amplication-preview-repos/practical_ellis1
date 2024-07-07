import { Module } from "@nestjs/common";
import { BotActionsService } from "./botactions.service";
import { BotActionsController } from "./botactions.controller";
import { BotActionsResolver } from "./botactions.resolver";

@Module({
  controllers: [BotActionsController],
  providers: [BotActionsService, BotActionsResolver],
  exports: [BotActionsService],
})
export class BotActionsModule {}
