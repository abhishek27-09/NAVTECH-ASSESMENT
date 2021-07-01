import { Component, OnInit } from '@angular/core';
declare var $: any;
import Swal from 'sweetalert2';

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

  delete() {
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
