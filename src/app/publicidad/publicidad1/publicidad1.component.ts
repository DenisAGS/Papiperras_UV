import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicidad1',
  templateUrl: './publicidad1.component.html',
  styleUrls: ['./publicidad1.component.css']
})
export class Publicidad1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continuar(){
    this.router.navigate(['/publicidad2']);
  }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
