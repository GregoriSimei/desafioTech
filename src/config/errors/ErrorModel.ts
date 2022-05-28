export class ErrorModel {
  protected message: string;
  protected status: number;

  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }

  getMessage(): string {
    return this.message;
  }

  getStatus(): number {
    return this.status;
  }
}
