import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/fireservices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: AuthService) { 

    this.authService.status().subscribe(res=>{
      console.log('RES=>', res)
    })
  }

  ngOnInit() {
  }



}
