import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model = 1;

  constructor() { }

  ngOnInit() {
  }

  getBundlesMenuTitle() {
        var bundlesCount: number;
        //this._backend.getBundles().subscribe(res => bundlesCount = res.length);
        return "Bundles";//(" + bundlesCount + ")";
  }
}
