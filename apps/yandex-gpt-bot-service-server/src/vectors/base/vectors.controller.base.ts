/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VectorsService } from "../vectors.service";
import { VectorsCreateInput } from "./VectorsCreateInput";
import { Vectors } from "./Vectors";
import { VectorsFindManyArgs } from "./VectorsFindManyArgs";
import { VectorsWhereUniqueInput } from "./VectorsWhereUniqueInput";
import { VectorsUpdateInput } from "./VectorsUpdateInput";
import { QueriesFindManyArgs } from "../../queries/base/QueriesFindManyArgs";
import { Queries } from "../../queries/base/Queries";
import { QueriesWhereUniqueInput } from "../../queries/base/QueriesWhereUniqueInput";

export class VectorsControllerBase {
  constructor(protected readonly service: VectorsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vectors })
  async createVectors(
    @common.Body() data: VectorsCreateInput
  ): Promise<Vectors> {
    return await this.service.createVectors({
      data: {
        ...data,

        document: data.document
          ? {
              connect: data.document,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        vectorData: true,
        vectorId: true,

        document: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Vectors] })
  @ApiNestedQuery(VectorsFindManyArgs)
  async vectorsItems(@common.Req() request: Request): Promise<Vectors[]> {
    const args = plainToClass(VectorsFindManyArgs, request.query);
    return this.service.vectorsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        vectorData: true,
        vectorId: true,

        document: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vectors })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vectors(
    @common.Param() params: VectorsWhereUniqueInput
  ): Promise<Vectors | null> {
    const result = await this.service.vectors({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        vectorData: true,
        vectorId: true,

        document: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vectors })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVectors(
    @common.Param() params: VectorsWhereUniqueInput,
    @common.Body() data: VectorsUpdateInput
  ): Promise<Vectors | null> {
    try {
      return await this.service.updateVectors({
        where: params,
        data: {
          ...data,

          document: data.document
            ? {
                connect: data.document,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          vectorData: true,
          vectorId: true,

          document: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vectors })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVectors(
    @common.Param() params: VectorsWhereUniqueInput
  ): Promise<Vectors | null> {
    try {
      return await this.service.deleteVectors({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          vectorData: true,
          vectorId: true,

          document: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/queriesItems")
  @ApiNestedQuery(QueriesFindManyArgs)
  async findQueriesItems(
    @common.Req() request: Request,
    @common.Param() params: VectorsWhereUniqueInput
  ): Promise<Queries[]> {
    const query = plainToClass(QueriesFindManyArgs, request.query);
    const results = await this.service.findQueriesItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        queryText: true,
        responseText: true,

        vector: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/queriesItems")
  async connectQueriesItems(
    @common.Param() params: VectorsWhereUniqueInput,
    @common.Body() body: QueriesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queriesItems: {
        connect: body,
      },
    };
    await this.service.updateVectors({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queriesItems")
  async updateQueriesItems(
    @common.Param() params: VectorsWhereUniqueInput,
    @common.Body() body: QueriesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queriesItems: {
        set: body,
      },
    };
    await this.service.updateVectors({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queriesItems")
  async disconnectQueriesItems(
    @common.Param() params: VectorsWhereUniqueInput,
    @common.Body() body: QueriesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queriesItems: {
        disconnect: body,
      },
    };
    await this.service.updateVectors({
      where: params,
      data,
      select: { id: true },
    });
  }
}
