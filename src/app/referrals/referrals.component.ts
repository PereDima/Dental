import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  public drafts = `(1)`;
  public refNumber = 'tst0000422';
  
  constructor() { }

  ngOnInit(): void {
  }

}
