import { Component, OnInit } from '@angular/core';
declare var $: any;
import Swal from 'sweetalert2';

export interface Order {
  id?: number;
  ordernumber?: number;
  orderduedate?: string;
  CustomerBuyerName?: string;
  CustomerAddress?: string;
  CustomerPhone?: number;
  OrderTotal?: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  // hardcoded data for input
  fields = [
    {
      id: 1,
      ordernumber: 123,
      orderduedate: '2021-10-02',
      CustomerBuyerName: 'bunny',
      CustomerAddress: 'hyderabad',
      CustomerPhone: 9874563210,
      OrderTotal: 20000,
    },
    {
      id: 2,
      ordernumber: 987,
      orderduedate: '2021-07-21',
      CustomerBuyerName: 'sunny',
      CustomerAddress: 'mumbai',
      CustomerPhone: 9632145870,
      OrderTotal: 40000,
    },
  ];
  set: any;
  constructor() {}

  ngOnInit(): void {}

  // to edit data & fill in fields
  editData(value: Order) {
    this.set = value;
    document
      .getElementById('ordernumber')
      ?.setAttribute('value', this.set.ordernumber);
    document
      .getElementById('duedate')
      ?.setAttribute('value', this.set.orderduedate);
    document
      .getElementById('customername')
      ?.setAttribute('value', this.set.CustomerBuyerName);
    document
      .getElementById('custumeraddress')
      ?.setAttribute('value', this.set.CustomerAddress);
    document
      .getElementById('customerphone')
      ?.setAttribute('value', this.set.CustomerPhone);
    document
      .getElementById('ordertotal')
      ?.setAttribute('value', this.set.OrderTotal);
  }

  //to view data
  viewData(value: Order) {
    this.set = value;
    document
      .getElementById('ordernumber1')
      ?.setAttribute('value', this.set.ordernumber);
    document
      .getElementById('duedate1')
      ?.setAttribute('value', this.set.orderduedate);
    document
      .getElementById('customername1')
      ?.setAttribute('value', this.set.CustomerBuyerName);
    document
      .getElementById('custumeraddress1')
      ?.setAttribute('value', this.set.CustomerAddress);
    document
      .getElementById('customerphone1')
      ?.setAttribute('value', this.set.CustomerPhone);
    document
      .getElementById('ordertotal1')
      ?.setAttribute('value', this.set.OrderTotal);
  }

  // to delete data
  delete() {
    // added seetalerts
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
