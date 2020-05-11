import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../services/api/burgers.service';
export { Subscribable, SubscribableOrPromise, ObservableInput, Subscription } from 'rxjs';

@Component({
  selector: 'app-burger-view',
  templateUrl: './burger-view.component.html',
  styleUrls: ['./burger-view.component.css']
})
export class BurgerViewComponent implements OnInit {

  burgers: any[];

  @Input() id: number;

  constructor(private burgerService: BurgersService) { }

  ngOnInit() {
    let burgers = this.burgerService.listBurgers().subscribe((value) => {
      this.burgers = value;
    },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      });
  }

}
