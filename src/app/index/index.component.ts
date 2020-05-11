import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'Burgers';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['burgers']);
  }


}
