import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo = ['Buy Milk', 'Build a Kanban Board'];
  inProgress = [];
  done = [];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.container.id == event.previousContainer.id) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addItem(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.todo.push(input.value);
    input.value = '';
  }
}
