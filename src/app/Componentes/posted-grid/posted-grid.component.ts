import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Swiper } from 'swiper';
import { Movie } from '../../Interfaces/cartelera-response';

@Component({
  selector: 'app-posted-grid',
  templateUrl: './posted-grid.component.html',
  styleUrls: ['./posted-grid.component.css']
})
export class PostedGridComponent implements OnInit, AfterViewInit {
  @Input() serie: Movie[];

  constructor() { }
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {
    console.log(this.serie);
  }

}
