import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() profile!: string;
  @Input() username!: string;
  @Input() email!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
