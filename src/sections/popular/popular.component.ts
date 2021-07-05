import { Component } from "@angular/core";


import { PopularService } from "./popular.service";


@Component({
  selector: "popular-component",
  templateUrl: "./popular.component.html",
  styleUrls: ["./popular.component.scss"]
})
export class PopularComponent  {

  constructor(public popularService: PopularService) {


  }
}

