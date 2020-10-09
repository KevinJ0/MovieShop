import { Cast } from './../../Interfaces/Castresponse';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  public mySwiper: Swiper;

  constructor( ) { }
  ngAfterViewInit(): void {
     this.mySwiper = new Swiper('.swiper-container', {
       slidesPerView:5.3,
       freeMode:true,
       spaceBetween:15
    });
  }

  ngOnInit(): void {
    console.log(this.cast);
  }
  
  // VerPeliculas(item: Movie): void {

  //   const peliculaId = item.id;
  //   this.router.navigate([ '/view',  peliculaId  ]);
  //   console.log(item)
  // }

}
