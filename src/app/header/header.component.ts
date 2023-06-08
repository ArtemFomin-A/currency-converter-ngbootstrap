import { Component, Input, TemplateRef, EventEmitter, Output, OnInit  } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  @Input() currencies: string[] = [];
  @Input() exchangeRates: { [key: string]: number } = {};

  @Output() currenciesChanged: EventEmitter<string[]>  = new EventEmitter<string[]>();


  get exchangeRatesKeys(): string[] {
    return Object.keys(this.exchangeRates);
  }

  exchangeRateFromKey(key: string): string {
    return (1/this.exchangeRates[key]).toFixed(4);
  }

  ngOnInit() {
    this.currencies = this.currencies.filter(currency => this.exchangeRates.hasOwnProperty(currency));  
  }



  handleClick(event: Event, checkedCurrency: string) {
    const checkbox = event.target as HTMLInputElement;
    const checked = checkbox.checked;

    if (checked && !this.currencies.includes(checkedCurrency)) {
      this.currencies.push(checkedCurrency);
    } else if (!checked) {
      const index = this.currencies.indexOf(checkedCurrency);
      if (index !== -1) {
        this.currencies.splice(index, 1);
      }
    }
  
    this.currenciesChanged.emit(this.currencies);
  }

  isOffcanvasOpen: boolean = false;

  constructor(private offcanvasService: NgbOffcanvas) {}

  openStart(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'start' });
	}
}
