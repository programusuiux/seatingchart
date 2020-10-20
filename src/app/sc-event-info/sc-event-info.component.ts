import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-event-info',
  templateUrl: './sc-event-info.component.html',
  styleUrls: ['./sc-event-info.component.scss']
})
export class ScEventInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  imageObject: Array<object> = [{
    image: 'assets/image/info-banner.jpg',
    thumbImage: 'assets/image/info-banner.jpg',
    alt: 'alt of image',
    title: 'title of image'
    
}, {
    image: 'assets/image/info-banner.jpg', // Support base64 image
    thumbImage: 'assets/image/info-banner.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/image/info-banner.jpg', // Support base64 image
  thumbImage: 'assets/image/info-banner.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/image/info-banner.jpg', // Support base64 image
  thumbImage: 'assets/image/info-banner.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/image/info-banner.jpg', // Support base64 image
  thumbImage: 'assets/image/info-banner.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/image/info-banner.jpg', // Support base64 image
  thumbImage: 'assets/image/info-banner.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},

{
  image: 'assets/image/info-banner.jpg', // Support base64 image
  thumbImage: 'assets/image/info-banner.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
];
}
