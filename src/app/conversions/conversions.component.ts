import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css']
})


export class ConversionsComponent {
  conversions: any[] = [];

  @Input() currencies!: string[];
  @Input() exchangeRates!: any;

  colorConversion='info';

  addConversionAllert() {
    this.alerts.push({type: this.colorConversion});
  }


  alerts: Alert[] = [{type: this.colorConversion}];


	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
    this.alerts.splice(1, this.alerts.length-1);
	}
}

interface Alert {
	type: string;
}
