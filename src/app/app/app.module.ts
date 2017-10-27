import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AccordionModule, TabViewModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RoleComponent } from './content/role/role.component';
import { AddRoleComponent } from './content/role/add-role.component';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [
  { path: 'addrole', component: AddRoleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    RoleComponent,
    AddRoleComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
