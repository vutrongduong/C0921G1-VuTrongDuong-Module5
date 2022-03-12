import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.categoryService.getAll().subscribe(value => this.categories = value);
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value =>
      this.product = value, error => {
    }, () => this.productForm.patchValue(this.product));

    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  updateProduct(){
    const productUpdate = this.productForm.value;
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.updateProduct(id, productUpdate).subscribe();
    this.router.navigateByUrl('/product/list');
  }
}
