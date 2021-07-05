
import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Categories } from "../../../interfaces/categories";
import { ProductInterface } from "../../../interfaces/product-state";
import {
  flowers,
  flowersArray,
  flowersArray2,
  reason,
  reasonsArray,
  reasonsArray2,
} from "../../../interfaces/tags/tags-interface";
import { LoadBackService } from "../../../service/loadback.service";
import { bouquetsChangeElement } from "../../../store/actions/bouquets.actions";
import { compositionsChangeElement } from "../../../store/actions/compositions.actions";
import { flowersChangeElement } from "../../../store/actions/flowers.actions";
import { giftsChangeElement } from "../../../store/actions/gifts.actions";
import { ProductService } from "../../product/product.service";
import { EditService } from "./edit.service";


@Component({
  selector: "edit-product-component",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.scss"]
})
export class EditProductComponent  {


  public myform: FormGroup;



  public hideS: boolean = false;
  public hideD: boolean = false;
  public hideP: boolean = false;
  public hideF: boolean = false;
  public hideR: boolean = false;


  public text: string = "false";

  public flowersTagArray: flowers[] = [];
  public flowersActiveTag: flowers[] | string[]  = this.productService.product.flowers.map( el => el);
  public flowersTagStr: string = this.flowersActiveTag.join(",");

  public reasonsTagArray: reason[] = [];
  public reasonsActiveTag: reason[] | string[] = this.productService.product.reason.map( el => el);
  public reasonsTagStr: string = this.reasonsActiveTag.join(",");


  public flowers: FormArray =  new FormArray([]);


  constructor(public loadBackService: LoadBackService,
              public editService: EditService,
              public productService: ProductService,
              public store: Store,
  ) {

    console.log(this.flowersTagStr);

    this.myform = new FormGroup({
      category: new FormControl(this.productService.product.categories, [Validators.required]),
      name: new FormControl(this.productService.product.name, [Validators.required]),
      price: new FormControl(this.productService.product.price, [Validators.required, Validators.min(0)]),
      popularity: new FormControl(this.productService.product.popularity, [Validators.required, Validators.min(0), Validators.max(100), ]),
      flowers: new FormControl({value: this.productService.product.flowers.join(","), disabled: true}),
      reasons: new FormControl({value: this.productService.product.reason.join(","), disabled: true}),
      structure: new FormControl(this.productService.product.structure, [Validators.required]),
      description: new FormControl(this.productService.product.description, [Validators.required]),
      photo: new FormArray([])
    });
    this.flowersTagArray = this.flowersTagArray.concat(flowersArray, flowersArray2);

    this.reasonsTagArray = this.reasonsTagArray.concat( reasonsArray, reasonsArray2);


    for ( const img of this.productService.product.image) {
      const controlNewPhoto = new FormControl(img, Validators.required);
      (this.myform.get("photo") as FormArray).push(controlNewPhoto);
    }



  }

  addPhoto(): void {
    const controlNewPhoto = new FormControl("", Validators.required);
    (this.myform.get("photo") as FormArray).push(controlNewPhoto);
  }

  // tslint:disable-next-line:typedef
  getControls() {
    return (this.myform.get("photo") as FormArray).controls;
  }
  // tslint:disable-next-line:typedef
  getPhotoNameControls(name: number) {
    return(this.myform.get("photo")?.get(`${name}`)?.touched);
  }
  // tslint:disable-next-line:typedef
  InvalidPhotoControls(name: number) {
    return(this.myform.get("photo")?.get(`${name}`)?.invalid);
  }






  showFlowers(): void {
    this.hideF = !this.hideF;


  }

  showReason(): void {
    this.hideR = !this.hideR;
  }

  hideStructure(): void {

    this.hideS = !this.hideS;

  }

  hideDescription(): void {
    this.hideD = !this.hideD;
  }


  addFlower(flowerElement: flowers): void {
    if (this.flowersActiveTag.includes(flowerElement)) {
      this.flowersActiveTag = this.flowersActiveTag.filter( (f) => f !== flowerElement);
    } else {
      this.flowersActiveTag.push(flowerElement);
    }

    this.flowersTagStr = "";

    for ( const element of this.flowersActiveTag) {
      if (this.flowersTagStr.length === 0) {
        this.flowersTagStr += `${element}`;
      } else {
        this.flowersTagStr += `;${element}`;
      }
    }


    // this.myform.controls[this.groupControl].setValue()
    this.myform.get("flowers")?.setValue(this.flowersTagStr);


  }



  addReason(reasonElement: reason): void {
    if (this.reasonsActiveTag.includes(reasonElement)) {
      this.reasonsActiveTag = this.reasonsActiveTag.filter( (f) => f !== reasonElement);
    } else { this.reasonsActiveTag.push(reasonElement); }

    this.reasonsTagStr = "";

    for ( const element of this.reasonsActiveTag) {
      if (this.reasonsTagStr.length === 0) {
        this.reasonsTagStr += `${element}`;
      } else { this.reasonsTagStr += `;${element}`; }
    }
    this.myform.get("reasons")?.setValue(this.reasonsTagStr);
  }




  submit(): void {
    if (this.myform.valid) {
      const formData = {...this.myform.value};
      this.translete(formData);
    }


    // привести в форму в продукт интерфейс

  }




// tslint:disable-next-line:no-any
  translete ( object: any): void {
    const product: ProductInterface = {
      name: object.name,
      image: object.photo,
      price: object.price,
      structure: object.structure,
      description: object.description,
      categories: object.category,
      flowers: this.flowersActiveTag,
      reason: this.reasonsActiveTag,
      popularity: object.popularity,
      favorite: false,
      _id: this.productService.product._id,
      discount: 0
    };

    let url: string = "";

    switch (product.categories) {
      case Categories.bouquets: {
        url = `http://localhost:3000/bouquets/${this.productService.product._id}`;
        this.store.dispatch(bouquetsChangeElement({newElement: product}));
        break; }
      case Categories.compositions: {
        url = `http://localhost:3000/compositions/${this.productService.product._id}`;
         this.store.dispatch(compositionsChangeElement({newElement: product}));
        break; }
      case Categories.flowers: {
        url = `http://localhost:3000/flowers/${this.productService.product._id}`;
        this.store.dispatch(flowersChangeElement({newElement: product}));
        break; }
      case Categories.gifts: {
        url = `http://localhost:3000/gifts/${this.productService.product._id}`;
        this.store.dispatch(giftsChangeElement({newElement: product}));
        break; }
      default: break;
    }


    this.loadBackService.putElement(url, product);

  }


}


