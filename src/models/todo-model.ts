export class TodoModel {

	public item: string;
	public status: boolean;

	constructor(item: string, status: boolean) {
		this.item = item;
		this.status = status;
	}

}