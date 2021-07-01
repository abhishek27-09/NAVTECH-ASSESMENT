import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  fields = [
    {
      id: 1,
      ordernumber: 123,
      orderduedate: '10-02-2021',
      CustomerBuyerName: 'bunny',
      CustomerAddress: 'hyderabad',
      CustomerPhone: 9874563210,
      OrderTotal: 20000,
    },
    {
      id: 2,
      ordernumber: 987,
      orderduedate: '10-02-2021',
      CustomerBuyerName: 'sunny',
      CustomerAddress: 'mumbai',
      CustomerPhone: 9632145870,
      OrderTotal: 40000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  editData() {
    $(document).ready(() => {
      $('.editbtn').ready(() => {
        const $tr = $(this).closest('tr');
        var data = $tr['S.fn.init']
          .children('td')
          .map(() => {
            return $(this).text();
          })
          .get();

        $('#orderNumber').val(data[0]);
      });
    });
  }
}
