import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AccordionModule, TabViewModule, MultiSelectModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RoleManageComponent } from './content/role/role-manage.component';
import { CreateRoleComponent } from './content/role/create-role/create-role.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RoleListComponent } from './content/role/role-list/role-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    RoleManageComponent,
    CreateRoleComponent,
    RoleListComponent
  ],
  imports: [
  BrowserModule,
  TabViewModule,
  AppRoutingModule,
  MultiSelectModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
