import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueriesServiceBase } from "./base/queries.service.base";

@Injectable()
export class QueriesService extends QueriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
