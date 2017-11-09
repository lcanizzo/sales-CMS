import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    {
        id: 1,
        name: "Baby",
        image: "https://i.pinimg.com/564x/a0/6d/ca/a06dca921b451392faa508c6dc98d4e5.jpg"
    },
    {
        id: 2,
        name: "Kitchen",
        image: "https://i.pinimg.com/564x/f5/b5/24/f5b52409af4cd6742dd3432156fb38f6.jpg"
    },
    {
        id: 3,
        name: "Home",
        image: "https://i.pinimg.com/236x/15/52/92/155292fbd4c11fe1a6248a6033b06d21.jpg"
    }
]

  constructor() { };

  ngOnInit() {
  }

}
