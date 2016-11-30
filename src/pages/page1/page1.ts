import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TodoService} from '../../providers/todo-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    let dodo = new TodoService();
  }

}
