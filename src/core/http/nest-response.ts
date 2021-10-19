export class NestResponse {
  status: number;
  // eslint-disable-next-line
  headers: Object;
  // eslint-disable-next-line
  body: Object;

  constructor(response: NestResponse) {
    Object.assign(this, response);
  }
}
