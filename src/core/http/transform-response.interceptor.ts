import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestResponse } from './nest-response';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((nestResponse: NestResponse) => {
        if (nestResponse instanceof NestResponse) {
          const ctx = context.switchToHttp();
          const response = ctx.getResponse();
          const { headers, status, body } = nestResponse;
          const headersName = Object.getOwnPropertyNames(headers);

          headersName.forEach((name) =>
            this.httpAdapter.setHeader(response, name, headers[name]),
          );

          this.httpAdapter.status(response, status);

          return body;
        }

        return nestResponse;
      }),
    );
  }
}
