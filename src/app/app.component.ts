import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="site-title">{{title}}</h1>
      <p class="subtitle">{{subtitle}}</p>
      <malloc-social></malloc-social>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  subtitle: string;

  ngOnInit() {
    switch (environment.site) {
      case 'aleclombardo': 
        this.title = 'Alec Lombardo'
        this.subtitle = 'technical lead, devops engineer, and self-proclaimed foodie'
        break;
      case 'malloc':
        this.title = 'malloc.space'
        this.subtitle = 'lab home'
        break;
    }
    document.title = this.title
  }
}
