import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byride';
  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    navSpeed: 500,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 5
      },
    }
  };


  imagArray = ['men.jpg', 'women.jpeg', 'children.jpg'];

  featuredProducts = [
    {
      imageSrc: 'men 1.jpeg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '100.00'
    },
    {
      imageSrc: 'men 2.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '200.00'
    },
    {
      imageSrc: 'men 3.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '300.00'
    },
    {
      imageSrc: 'men 4.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '400.00'
    },
    {
      imageSrc: 'women 1.jpeg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '500.00'
    },
    {
      imageSrc: 'women 2.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '600.00'
    },
    {
      imageSrc: 'women 3.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '700.00'
    },
    {
      imageSrc: 'women 4.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '800.00'
    },
  ];


  latestProducts = [
    {
      imageSrc: 'L 1.webp',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '100.00'
    },
    {
      imageSrc: 'L 2.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '200.00'
    },
    {
      imageSrc: 'L 3.webp',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '300.00'
    },
    {
      imageSrc: 'L 4.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '400.00'
    },
    {
      imageSrc: 'vintage 1.jpeg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '500.00'
    },
    {
      imageSrc: 'vintage 2.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '600.00'
    },
    {
      imageSrc: 'vintage 3.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '700.00'
    },
    {
      imageSrc: 'vintage 4.jpg',
      title: 'Mountain CG3E-Fat Bike Racing Ride Road Off-road Bicycle',
      price: '800.00'
    },
  ];

  reviewData = [
    {
      imageSrc: "customer 1.ico",
      custName: "Markus Ludo",
      custComments: "I must say that its an All in one store for all your bicycle needs! Have a wide variety of bicycles to choose , explore decide and buy. Knowledgeable and friendly staff who is ready to answer all your questions and resolve your bicycle .",
      rating: 5
    },
    {
      imageSrc: "customer 2.jpg",
      custName: "Lucia",
      custComments: "I must say that its an All in one store for all your bicycle needs! Have a wide variety of bicycles to choose , explore decide and buy. Knowledgeable and friendly staff who is ready to answer all your questions and resolve your bicycle .",
      rating: 2
    },
    {
      imageSrc: "customer 1.ico",
      custName: "John Doe",
      custComments: "I must say that its an All in one store for all your bicycle needs! Have a wide variety of bicycles to choose , explore decide and buy. Knowledgeable and friendly staff who is ready to answer all your questions and resolve your bicycle .",
      rating: 3
    },
    {
      imageSrc: "customer 2.jpg",
      custName: "Mark",
      custComments: "I must say that its an All in one store for all your bicycle needs! Have a wide variety of bicycles to choose , explore decide and buy. Knowledgeable and friendly staff who is ready to answer all your questions and resolve your bicycle .",
      rating: 4
    }
  ];


  brandArr = [
    'brand1.jpg',
    'brand2.jpg',
    'brand3.png',
    'brand4.jpg',
    'brand5.jpg',
    'brand6.jpg',
    'brand7.jpg',
    'brand8.jpg',
    'brand9.jpg',
    'brand10.png',
    'brand11.png',
    'brand12.jpg',
  ];
  counter(i: number) {
    return new Array(i);
  }
}
