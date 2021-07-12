import { Component } from "@angular/core";
import { FlowersService } from "./flowers.service";


@Component({
  selector: "flowers-component",
  templateUrl: "./flowers.component.html",
  styleUrls: ["./flowers.component.scss"]
})
export class FlowersComponent  {

  constructor(public flowersService: FlowersService) {
  }
}

