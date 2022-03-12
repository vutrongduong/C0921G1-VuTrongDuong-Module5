import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.getProduct(this.id);
  }


  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(value => {
      this.productForm = new FormGroup(
        {
          id: new FormControl(value.id)
        }
      );
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe();
    this.router.navigate(['/product/list']);
  }
}
