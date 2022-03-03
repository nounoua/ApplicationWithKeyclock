import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../product/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  newProduit = new IProduct(); // en faite c'est une instance cette attribut contient des objets vide on le remplire par le formulaire   
  message: any;

  constructor(private produitService: ProductService) { }

  ngOnInit(): void {
  }
  addProduit() {
    this.produitService.add(this.newProduit).subscribe(Response => {
      this.message = "Produit " + this.newProduit.name + " ajouter avec succes !";
      //ce block pour l'arlete qui s'affiche 
      if (Response) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Votre Produit a était Ajouter',
          showConfirmButton: false,
          timer: 5000
        }).then((Response) => {
          return location.reload();
        })
      }
    }
    )
  }
}
