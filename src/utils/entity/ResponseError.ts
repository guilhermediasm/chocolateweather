export default class ResponseError {
  error: any;

  constructor(error: any) {
    this.error = error || error.message;
  }

  getMessage(): string {
    return `Ops! Ocorreu um erro: ${this.error}`;
  }
}
