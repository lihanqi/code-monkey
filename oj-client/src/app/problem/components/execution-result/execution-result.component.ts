import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-execution-result',
  templateUrl: './execution-result.component.html',
  styleUrls: ['./execution-result.component.css']
})
export class ExecutionResultComponent implements OnInit {
  
  // @Output() resultDisplay: boolean;
  // status: string;
  // output: string;
  @Input() status: string = 'Default_status';
  @Input() result: string = 'Default_result';

  constructor() { }

  ngOnInit() {
  }

}
