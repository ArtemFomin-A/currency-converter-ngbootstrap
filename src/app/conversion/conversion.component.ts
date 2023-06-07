import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent {
  baseCurrency='UAH';
  targetCurrency='UAH';
  amount = 0;
  convertedAmount = 0;

  @Input() currencies!: string[];
  @Input() exchangeRates!: any;


  selectTargetCurrency(currency: string) {
    this.targetCurrency = currency;
    this.convertCurrency(false);
  }

  selectBaseCurrency(currency: string) {
    this.baseCurrency = currency;
    this.convertCurrency(true);
  }

  convertCurrency(isBase: boolean) {
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];

    if (isBase) this.convertedAmount = (this.amount / baseRate) * targetRate;
    else this.amount = (this.convertedAmount / targetRate) * baseRate;
  }

  swapCurrencies() {
    [this.baseCurrency, this.targetCurrency] = [
      this.targetCurrency,
      this.baseCurrency,
    ];
    this.convertCurrency(true);
  }
}
