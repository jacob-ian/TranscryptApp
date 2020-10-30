import { Component, OnInit, Input } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input()
  year: number;

  public payPalConfig?: IPayPalConfig;

  constructor() {}

  ngOnInit(): void {
    this.year = new Date(Date.now()).getFullYear();

    // Initialise the paypal button
    //this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'ARY7lC6vPk5RHep0Qoml3oZYXoLW8Nn6WeJpG2FQ5kMOOM1eYNcti5hpfG1SZvmRqLcwnMsLxn3ifnK1',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: '1.00',
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: '1.00',
                  },
                },
              },
              items: [
                {
                  name: 'Donation to transcrypt.app',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: '1.00',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'horizontal',
        shape: 'pill',
        color: 'gold',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
