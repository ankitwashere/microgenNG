import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Payment} from './model.payment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  title = 'app';

  response: any;

  payments: Payment[] = [];
  payment1: Payment = new Payment();
  payment2: Payment = new Payment();
  payment3: Payment = new Payment();
  payment4: Payment = new Payment();
  payment5: Payment = new Payment();


  sendPayments(sort) {
    this.payments = [];
    this.payment1.amount = 20;
    this.payment1.date = '2019-08-10';
    this.payment1.currencyCode = 'GBP';
    this.payment1.sourceAccount = '123456';
    this.payment1.targetAccount = '654321';

    this.payment2.amount = 10;
    this.payment2.date = '2018-08-08';
    this.payment2.currencyCode = 'GBP';
    this.payment2.sourceAccount = '123456';
    this.payment2.targetAccount = '654321';

    this.payment3.amount = 36;
    this.payment3.date = '2018-08-21';
    this.payment3.currencyCode = 'GBP';
    this.payment3.sourceAccount = '123456';
    this.payment3.targetAccount = '654321';

    this.payment4.amount = -29;
    this.payment4.date = '2018-08-20';
    this.payment4.currencyCode = 'GBP';
    this.payment4.sourceAccount = '123456';
    this.payment4.targetAccount = '654321';

    this.payment5.amount = 25;
    this.payment5.date = '2018-07-18';
    this.payment5.currencyCode = 'GBP';
    this.payment5.sourceAccount = '123456';
    this.payment5.targetAccount = '654321';

    this.payments.push(this.payment1);
    this.payments.push(this.payment2);
    this.payments.push(this.payment3);
    this.payments.push(this.payment4);
    this.payments.push(this.payment5);

    this.sendPost('/' + sort, this.payments).subscribe(data => this.response = data);

  }

  sendPost(request: string, object: any): Observable<any> {
    const url = 'http://localhost:8080/payment/submit-payments' + request;
    return this.http.post(url, object, {withCredentials: true});
  }
}
