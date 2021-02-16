import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.css']
})
export class WsComponent implements OnInit {
  weeklyAmount: number[] = [100];
  constructor() { }

  ngOnInit(): void {
  }

}
