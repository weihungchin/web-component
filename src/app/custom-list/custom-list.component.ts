import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ListItem {
  desc: string;
  id: number;
}

@Component({
  selector: 'app-custom-list',
  template: `
    <p *ngFor = "let item of items; let i = index;" (click) = "handleItemClick(item)">
    {{i+1}} - {{item.desc}}
    </p>
  `,
  styles: [
    `
    h3, p {
      padding: 8px 8px;
      margin: 0 8px;
    }
    p {
      border: 1px solid lightgray;
    }
    p:hover {
      cursor: pointer
    }
    `
  ]
})
export class CustomListComponent{

  @Input()
  items = [{desc: 'Eat pizza', id: 1}]

  @Output()
  itemClicked = new EventEmitter<number>()

  constructor() { }

  handleItemClick(item: ListItem) {
   this.itemClicked.emit(item.id)
  }
}
