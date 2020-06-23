import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm

  constructor(
    private carteService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name:'',
      adress:''
    })
  }

  ngOnInit() {
    this.items =  this.carteService.getItems();
    this.checkoutForm.reset();
  }

  onSubmit(customerData){
    this.items = this.carteService.clearCart();
    this.checkoutForm.reset()

    console.warn('Your order has been submitted', customerData);

  }

}