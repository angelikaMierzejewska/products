import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ItemService} from '../services/ItemService';
import {Item} from "../shared/interfaces";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  private items: Item[] = [];

  itemForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl(''),

  });

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getAllItmes();

  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value);
    this.itemForm.controls.name.setValue('');
    this.itemForm.controls.color.setValue('');
    this.itemForm.controls.desc.setValue('');
    this.itemForm.controls.price.setValue('');
    this.getAllItmes();

  }

  getAllItmes() {
    this.items = this.itemService.getItems();

  }


}
