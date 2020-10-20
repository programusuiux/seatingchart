import { Component, OnInit } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-sc-header-slider',
  templateUrl: './sc-header-slider.component.html',
  styleUrls: ['./sc-header-slider.component.scss']
})
export class ScHeaderSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: '~src/assets/image/1(4).jpg',
    thumbImage: '~src/assets/image/1(4).jpg',
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: '~src/assets/image/1(4).jpg', // Support base64 image
    thumbImage: '~src/assets/image/1(4).jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
];

}

// @Component({
//   selector: 'sample',
//       template:`
//       <ng-image-slider [images]="imageObject" #nav>
//       </ng-image-slider>
//       <button (click)="prevImageClick()">Prev</button>
//       <button (click)="nextImageClick()">Next</button>
//       `
// })
// class Sample {
//   @ViewChild('nav') slider: NgImageSliderComponent;
//   imageObject = [{...}]

//   prevImageClick() {
//       this.slider.prev();
//   }
  
//   nextImageClick() {
//       this.slider.next();
//   }
// }

