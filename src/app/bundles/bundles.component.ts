import { Component, OnInit } from '@angular/core';

import {AccordionModule} from 'primeng/primeng';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //msgs: Message[];

    onTabClose(event) {
        //this.msgs = [];
        //this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
    }
    
    onTabOpen(event) {
        //this.msgs = [];
        //this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

}
