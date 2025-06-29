export default class HttpMainError extends Error {
  statusCode: number;
  errname: string;
  errorobj: unknown;
  constructor(message: string, statusCode: number, errname: string, errorobj: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.errname = errname;
    this.errorobj = errorobj;
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}
