import { Component, OnInit } from '@angular/core';

interface SocialLink {
  name: string
  link: string
}

@Component({
  selector: 'malloc-social',
  template: `
    <div class="social">
      <a *ngFor="let link of links" href="{{link.link}}" target="_blank"><i class="fa fa-{{link.name}}"></i></a>
    </div>
  `,
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  links: SocialLink[] = [
    {
      name: 'github',
      link: 'https://github.com/alombardo4',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/alec-lombardo',
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/lombardown',
    },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/alec.lombardo'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
