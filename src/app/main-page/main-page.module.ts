import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HeroSecComponent } from './hero-sec/hero-sec.component';
import { MatButtonModule } from '@angular/material';
import { WorkHighlightsComponent } from './work-highlights/work-highlights.component';

import {CarouselModule} from "ngx-carousel-lib";



const routes: Routes = [
{path: 'main', 
component: MainPageComponent,
children: [
{path: '', component: HeroSecComponent},
{path: 'highlights' , component: WorkHighlightsComponent}
]
}
]

@NgModule({
	declarations: [
	MainPageComponent,
	HeroSecComponent,
	WorkHighlightsComponent
	],
	imports: [
	RouterModule.forChild(routes),
	MatButtonModule,
	CarouselModule
	],
	exports: [],
	providers: []
})
export class MainPageModule { }
