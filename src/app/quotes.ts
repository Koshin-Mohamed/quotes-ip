export class Quotes {
  showUser: boolean; likes: number; unlikes: number;
  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public user: string,
    public completeDate: any
  ) {
    this.showUser = false; this.likes = 0; this.unlikes = 0;
  }
}
