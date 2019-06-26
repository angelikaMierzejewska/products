import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../services/ItemService';
import {Item} from "../shared/interfaces";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  private item: Item;

  constructor(    private route: ActivatedRoute, private itemService: ItemService
  ) { }

  ngOnInit():void {
    this.getItem();

  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
   this.item =  this.itemService.getItem(id);
  }

}
