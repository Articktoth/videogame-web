import { Component, OnInit } from '@angular/core';
import { items } from '../../items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = items;

  constructor() { }

  ngOnInit() {
    console.log(items);
  }

}
