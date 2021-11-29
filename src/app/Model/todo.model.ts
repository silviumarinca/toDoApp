export class ToDoModel {
  constructor(
    public id: number,
    public name: string,
    public done: boolean,
    public selected: boolean
  ) {}
}
