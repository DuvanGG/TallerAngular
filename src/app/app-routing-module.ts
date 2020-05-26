import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ContentComponent } from './components/content/content.component';
import { ZombiComponent } from './components/zombi/zombi.component';
import { VampiroComponent } from './components/vampiro/vampiro.component';
import { MomiaComponent } from './components/momia/momia.component';
import { HombloboComponent } from './components/homblobo/homblobo.component'


const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'zombi', component: ZombiComponent},
    {path: 'vampiro', component: VampiroComponent},
    {path: 'momia', component: MomiaComponent},
    {path: 'homblobo', component: HombloboComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}