import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: true
  };

  images: string[] = [
    
    'https://blog.hubspot.com/hubfs/Ecommerce/ecommerce-promotions-fail.jpg',
    'https://www.channelengine.com/media/labcysqb/blog-1.jpg',
   'https://printuk.com/blog/wp-content/uploads/2017/06/ecommerce-marketing.png'
  ];

  websiteDescription: string = 'Welcome to our online store! We offer a wide range of products at competitive prices. Shop now to discover great deals and enjoy a seamless shopping experience.';

  ngOnInit() { }
}
