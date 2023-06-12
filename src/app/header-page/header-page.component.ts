import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})

export class HeaderPageComponent implements OnInit {
  showPopup = false;

  @Input() title!: string;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
