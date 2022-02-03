import { Component, OnInit } from '@angular/core';

export interface UserInfo {
  data: string;
  info: string;
}

const USER_DATA: UserInfo[] = [
  { data: 'URN:', info: 'TST0000422' },
  { data: 'Patient:', info: 'Pereklita Dmytro' },
  { data: 'Patient\'s DOB:', info: '09/11/91' },
  { data: 'Referral Entered the System:', info: '13/09/2019' },
  { data: 'Practice Address:', info: 'Confidential' },
  { data: 'Practice Telephone:', info: '+380978525640' },
  { data: 'Referrer:', info: 'Confidential' },
  { data: 'Referral Reason:', info: 'Urgent 2WW Referral' },
  { data: 'Clinical Activity:', info: 'No Info' },
  { data: 'Receiver:', info: 'Pereklita Dmytro' },
  { data: 'Radiographs:', info: 'NO' },
  { data: 'Primary care choice:', info: 'Urgent 2WW Referral' },
  { data: 'Secondary care choice:', info: 'Urgent 2WW Referral' },
  { data: 'Tertiary care choice:', info: 'Urgent 2WW Referral' },
  { data: 'Triage Date:', info: 'Urgent 2WW Referral' },
  { data: 'Comments to Referrer:', info: 'Urgent 2WW Referral' },
  { data: 'Comments from Triager:', info: 'Urgent 2WW Referral' },
]

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.scss']
})
export class RejectedComponent implements OnInit {

  public refNumber = 'tst0000422';
  public displayedColumns: string[] = ['data', 'info'];
  public userInfo = USER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
