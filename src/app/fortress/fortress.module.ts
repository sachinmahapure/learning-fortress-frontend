import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { FortressRoutingModule } from './fortress.routing';

import { FortressComponent } from './fortress.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [FortressRoutingModule, CommonModule, MaterialModule],
    declarations: [FortressComponent, HomeComponent],
})
export class FortressModule { }