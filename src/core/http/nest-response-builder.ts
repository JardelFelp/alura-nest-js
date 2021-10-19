import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public status(status: number) {
    this.response.status = status;
    return this;
  }

  // eslint-disable-next-line
  public headers(headers: Object) {
    this.response.headers = { ...this.response.headers, ...headers };
    return this;
  }

  // eslint-disable-next-line
  public body(body: Object) {
    this.response.body = body;
    return this;
  }

  public build(): NestResponse {
    return new NestResponse(this.response);
  }
}
