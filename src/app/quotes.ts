export class Quotes {
  showUser: boolean;
  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public user: string,
    public completeDate: Date
  ) {
    this.showUser = false;
  }
}
