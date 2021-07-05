import { Component } from "@angular/core";
import { Url } from "../../interfaces/url";
import { MainService } from "../../service/main.service";

import { CompositionService } from "./compositions.service";


@Component({
  selector: "compositions-component",
  templateUrl: "./compositions.component.html",
  styleUrls: ["./compositions.component.scss"]
})
export class CompositionsComponent  {

  constructor(public compositionService: CompositionService) {


  }
}

