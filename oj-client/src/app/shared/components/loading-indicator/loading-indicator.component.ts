import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loading-indicator",
  template: `
  <div *ngIf="display" class="loader-wrapper">
    <div class="loader"></div>
    <p *ngIf="text">{{text}}</p>
  </div>
  `,
  styles: [
    `
  .loader-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loader {
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #555; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    text-align: center;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`
  ]
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() display: boolean;
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}
