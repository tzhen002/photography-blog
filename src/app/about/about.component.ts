import { Component, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    register();
  }
}
