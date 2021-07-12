
import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Categories } from "../../../interfaces/categories";
import {
  flowers,
  flowersArray,
  flowersArray2,
  reason,
  reasonsArray,
  reasonsArray2,
} from "../../../interfaces/tags/tags-interface";
import { LoadBackService } from "../../../service/loadback.service";


@Component({
  selector: "add-product-component",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent  {

  public myform: FormGroup;

  public hideS: boolean = false;
  public hideD: boolean = false;
  public hideF: boolean = false;
  public hideR: boolean = false;

  public text: string = "false";

  public flowersTagArray: flowers[] = [];
  public flowersActiveTag: flowers[] = [];
  public flowersTagStr: string = "";

  public reasonsTagArray: reason[] = [];
  public reasonsActiveTag: reason[] = [];
  public reasonsTagStr: string = "";

  public flowers: FormArray =  new FormArray([]);


  constructor(public loadBackService: LoadBackService) {

    this.myform = new FormGroup({
      category: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required, Validators.min(0)]),
      popularity: new FormControl("", [Validators.required, Validators.min(0), Validators.max(100), ]),
      flowers: new FormControl({value: "", disabled: true}),
      reasons: new FormControl({value: "", disabled: true}),
      structure: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      photo: new FormArray([])
    });
    this.flowersTagArray = this.flowersTagArray.concat(flowersArray, flowersArray2);

    this.reasonsTagArray = this.reasonsTagArray.concat( reasonsArray, reasonsArray2);
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
  }

  submit(): void {
    if (this.myform.valid) {
      const formData = {...this.myform.value};
      this.translete(formData);
      this.myform.reset();
    }
  }

// tslint:disable-next-line:no-any
   translete ( object: any): void {
    const product = {
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
      discount: 0
    };

    let url: string = "";

    switch (product.categories) {
      case Categories.bouquets: url = "http://localhost:3000/bouquets"; break;
      case Categories.compositions: url = "http://localhost:3000/compositions"; break;
      case Categories.flowers: url = "http://localhost:3000/flowers"; break;
      case Categories.gifts: url = "http://localhost:3000/gifts"; break;
      default: break;
    }
    this.loadBackService.postElement(url, product);
  }
}


