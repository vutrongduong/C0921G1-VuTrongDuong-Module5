import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  // constructor(private fb: FormBuilder, private customerService: CustomerService,
  //             private activatedRoute: ActivatedRoute,
  //             private router: Router) {
  // }


  constructor() {
  }

  ngOnInit(): void {
    // let id = +this.activatedRoute.snapshot.params.id;
    // this.customerService.findById(id).subscribe(data => {
    //   this.customerService.getAll()
    // })}
  }
}
