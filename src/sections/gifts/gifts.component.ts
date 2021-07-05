import { Component } from "@angular/core";

import { GiftsService } from "./gifts.service";


@Component({
  selector: "gifts-component",
  templateUrl: "./gifts.component.html",
  styleUrls: ["./gifts.component.scss"]
})
export class GiftsComponent  {

  constructor(public giftsService: GiftsService) {


  }
}

