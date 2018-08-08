import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../services/simple.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  viewProviders: [SimpleService],
  // providers: [SimpleService]
})
export class ParentComponent implements OnInit {
  // simpleService: SimpleService;
  constructor(private simpleService: SimpleService) {
    // this.simpleService = new SimpleService();
  }

  ngOnInit() {
  }

}
