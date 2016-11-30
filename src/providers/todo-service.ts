import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { TodoModel } from "../models/todo-model";

const DB_NAME = "todo_db";
const DB_LOCATION = "default";

@Injectable()
export class TodoService {

  private db: SQLite;

  constructor() {
    this.db = new SQLite();
    this.initDB();
  }

  initDB() {

    this.db.openDatabase({
      name: DB_NAME, 
      location: DB_LOCATION
    }).then(() => {

      let sql: string = "CREATE TABLE IF NOT EXISTS todo ("
                      + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                      + "item TEXT)";

      this.db.executeSql(sql, {}).then(() => {
        console.log("Table created successfully");
      }, (err) => {
        console.error("Unable to execute SQL: ", err);
      });

    }, (err) => {
      console.error("Unable to open database: ", err);
    });
  } 

  addTodo(item: TodoModel) {
    
  }

  getTodo() {

  }

  getTodos() {

  }

  updateTodo(item: TodoModel) {

  }

  deleteTodo(item: TodoModel) {

  }

}
