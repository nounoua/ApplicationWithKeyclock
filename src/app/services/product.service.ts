import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<any>(`${this.url}/getProduct`); //bch trj3lk produit 
  }
  add(data: any) {
    return this.http.post<any>(`${this.url}/createProduct`, data);//bch nb3th data
  }
  update(id: any, data: IProduct) {
    return this.http.put<any>(`${this.url}/updateProduct/` + id, data);
  }
  delete(id: any) {
    return this.http.delete<any>(`${this.url}/deleteProduct/` + id);//pour supprimer produit 
  }
  getProductById(id: any) {
    return this.http.get<any>(`${this.url}/getProductById/` + id);//pour supprimer produit 
  }
}
