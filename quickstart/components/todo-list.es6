import {Component, Template, For, If} from 'angular2/angular2';
import {todoItems} from 'services/todoItems';

@Component({
    selector: 'todo-list'
})
@Template({
    url: 'components/todo-list.html',
    directives: [For, If]
})
export class TodoList {
    constructor() {
        this.items = todoItems;
    }
}