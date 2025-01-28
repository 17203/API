import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  imageData: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getImageofTheDay().subscribe((data) => {
      this.imageData = data;
    });
  }
}
