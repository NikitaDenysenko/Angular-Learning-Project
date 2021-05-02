import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CmpComponent } from './topics/1-components-databinding/cmp/cmp.component'
import { CockpitComponent } from './topics/1-components-databinding/cockpit/cockpit.component'
import { ServerElementComponent } from './topics/1-components-databinding/server-element/server-element.component'

import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext';
import { MainDirectivesComponent } from './topics/2-directives/main-directives/main-directives.component';
import {BasicHighlightDirective} from './topics/2-directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './topics/2-directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './topics/2-directives/structural-directives/unless.directive'

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    CockpitComponent,
    ServerElementComponent,
    MainDirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
