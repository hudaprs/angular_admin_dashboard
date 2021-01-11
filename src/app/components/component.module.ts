import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Layouts
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

// Main Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';

// Material
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const components = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  DashboardComponent,
  PostComponent,
];

const coreModules = [CommonModule];

const materialModules = [
  MatDividerModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
];

@NgModule({
  imports: [...coreModules, ...materialModules],
  declarations: components,
  exports: components,
})
export class ComponentModule {}
