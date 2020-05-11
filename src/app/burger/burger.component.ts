import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  @Input() id:number;
  @Input() name:string;
  @Input() price:number;
  @Input() image: string;
  @Input() index:number;

  ngOnInit(): void {}

}
