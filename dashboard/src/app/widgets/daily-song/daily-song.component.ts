import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-daily-song',
  templateUrl: './daily-song.component.html',
  styleUrls: ['./daily-song.component.css']
})
export class DailySongComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  public response: string;

  ngOnInit() {
    this.test();
  }

  private test(): void {
    this.requestService.get('https://lcp-events.com')
    .then((response) => {
      this.response = response;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
