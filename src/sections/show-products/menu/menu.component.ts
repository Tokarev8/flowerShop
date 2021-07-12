import { Component, OnInit } from "@angular/core";
import {
  flowers,
  flowersArray,
  flowersArray2,
  reason,
  reasonsArray,
  reasonsArray2,
} from "../../../interfaces/tags/tags-interface";
import { MenuService } from "./menu.service";


@Component({
  selector: "menu-products",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss", "./menu-style.scss"]
})
export class MenuComponent  {

  public miniMenu: number = 0;
  public showMiniMenu: number = 4;

  public sortUp: string = "\u25B2";
  public sortDown: string = "\u25BC";
  public sortTextPopular: string = "";
  public sortTextPrice: string = "";


  public popular: boolean = false;
  public price: boolean = false;



  public arrayFlowers: flowers[] = flowersArray;
  public arrayFlowers2: flowers[] = flowersArray2;
  public arrayReasons: reason[] = reasonsArray;
  public arrayReasons2: reason[] = reasonsArray2;


  public minPrice: number = 0;
  public maxPrice: number = 0;
  public activeTagArrayFlower: flowers[] = [];
  public activeTagArrayReason: reason[] = [];

  addFlowersTag(flower: flowers): void {
    if (!this.activeTagArrayFlower.includes(flower)) {
      this.activeTagArrayFlower.push(flower);
    } else {
      this.activeTagArrayFlower =  this.activeTagArrayFlower.filter(elem => elem !== flower);
    }
     this.menuService.tagFlower = this.activeTagArrayFlower;
    this.menuService.subject$.next();
  }

  addReasonTage(reasonTag: reason): void {
    if (!this.activeTagArrayReason.includes(reasonTag)) {
      this.activeTagArrayReason.push(reasonTag);
    } else {
      this.activeTagArrayReason =  this.activeTagArrayReason.filter(elem => elem !== reasonTag);
    }
    this.menuService.tagReason = this.activeTagArrayReason;
    this.menuService.subject$.next();
  }



  constructor(public menuService: MenuService) {

  }

  sortPopular(): void {
    this.sortTextPrice = "";
    switch (this.sortTextPopular) {
      case "": this.sortTextPopular = this.sortUp;
        this.menuService.sortPopular = "up";
        break;
      case this.sortUp:  this.sortTextPopular = this.sortDown;
        this.menuService.sortPopular = "down";
        break;
      case this.sortDown: this.sortTextPopular = "";
        this.menuService.sortPopular = "epmty";
        break;
      default: break;
    }
    this.menuService.popular = true;
    this.menuService.price = false;
    this.menuService.subject$.next();
  }

  sortPrice(): void {
    this.sortTextPopular = "";
    switch (this.sortTextPrice) {
      case "":  this.sortTextPrice = this.sortUp;
        this.menuService.sortPrice = "up";
        break;
      case this.sortUp:  this.sortTextPrice = this.sortDown;
        this.menuService.sortPrice = "down";
        break;
      case this.sortDown:  this.sortTextPrice = "";
        this.menuService.sortPrice = "empty";
        break;
      default: break;
    }
    this.menuService.popular = false;
    this.menuService.price = true;
    this.menuService.subject$.next();
  }

  plusMiniMenu(): void {
    this.miniMenu++;
    if ( this.miniMenu > 3) {
      this.miniMenu = 0 ;
    }
    this.showMiniMenu = 4;
  }

  minusMiniMenu(): void {
    this.miniMenu--;
    if ( this.miniMenu < 0) {
      this.miniMenu = 3 ;
    }
    this.showMiniMenu = 4;
  }


  setShowMenu(number: number): void {
    this.showMiniMenu ===  this.miniMenu
      ? this.showMiniMenu = 4
      : this.showMiniMenu = number;
  }
}
