import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currency-exchange';

  currencies: string[] = ['UAH', 'USD', 'EUR', 'PLN', 'CNY', 'TRY'];
  exchangeRates: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchExchangeRates();
  }

  fetchExchangeRates() {
    const url = 'https://api.exchangerate-api.com/v4/latest/UAH';
    this.http.get(url).subscribe((response: any) => {
      
      this.exchangeRates = response.rates;
      response.header({
        'Access-Control-Allow-Origin': '*',
      });
    });
  }

  updateCurrencies(selectedCurrencies: string[]) {
    this.currencies = selectedCurrencies;
  }
}
