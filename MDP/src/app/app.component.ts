import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "./components/base/base.component";
import { environment } from "../environments/environment";

@Component({
  selector: 'mdp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        'grid-template-columns': '0px auto',
      }), {params: {maxHeight: 10}}),
      state('expanded', style({
        'grid-template-columns': '{{start}} {{end}}'
      }), {params: {start: '1px', end: '1px'}}),
      transition('collapsed <=> expanded', [
        animate('250ms')
      ])
    ])
  ]
})
export class AppComponent extends BaseComponent{
  expandLateralBar: boolean = true;
  start: string = "250px";
  end: string = "auto";

  override ngOnInit() {
    super.ngOnInit();
    //console.log(environment.baseURL);
    this.mediaQuery.QueryMedia();
    if (this.mediaQuery.portrait) {
      this.expandLateralBar = false;
    }
  }

  ToggleLateralBar() {
    console.log("App received");
    this.expandLateralBar = !this.expandLateralBar;
    if (this.mediaQuery.portrait) {
      this.start = "auto";
      this.end = "0px";
    } else {
      this.start = "250px";
      this.end = "auto";
    }
  }

  LateralBarAnimationFinished(){
    this.common.EmitToggleBar(this.expandLateralBar);
  }

}
