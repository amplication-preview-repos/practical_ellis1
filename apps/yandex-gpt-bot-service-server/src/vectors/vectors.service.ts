import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VectorsServiceBase } from "./base/vectors.service.base";

@Injectable()
export class VectorsService extends VectorsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
