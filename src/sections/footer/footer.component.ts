import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";






@Component({
  selector: "footer-component",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
