import { Component, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: 'mdp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {
  @Output() lateralBarToggled = new EventEmitter<void>();

  ToggleLateralBar() {
    console.log("ToggleLateralBar");
    this.lateralBarToggled.emit();
  }
}