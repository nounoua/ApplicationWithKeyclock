import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new IProduct(); //mfhmthch
  prod: any;
  data: any;
  id: string = ''
  constructor(private service: ProductService, private activateRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.getList();
    this.id = this.activateRoute.snapshot.params['idPerson'];
  }
  getList() {
    this.service.list().subscribe((e) => { //je pense cette methode pour lister les produit 
      return this.prod = e;//mfhmtch
    })

  }
  Delete(id: any) {
    this.service.delete(id).subscribe((e) => {
      alert("product is deleted");
      window.location.reload();
    })
  }
  onClick(id: any) {
    this.service.getProductById(id).subscribe((e) => {
      this.product = e;
      alert(this.product.name)
    });
  }
  onSubmit() {
    this.service.update(this.id , this.product).subscribe(e => {
      this.product = e;
      alert(this.product.name)
    });
  }

}
