import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewEmployeeTaskComponent } from './view-employee-task/view-employee-task.component';

const myRoute:Routes = [
  {
    path: "",
    component: AdminLoginComponent
  },
  {
    path: "userLogin",
    component: UserLoginComponent
  },
  {
    path:"addEmployee",
    component: AddEmployeeComponent
  },
  {
    path:"addTask",
    component: AddTaskComponent
  },
  {
    path:"viewEmployee",
    component: ViewEmployeeComponent
  },
  {
    path:"viewTask",
    component: ViewTaskComponent
  },
  {
    path:"viewEmpTask",
    component: ViewEmployeeTaskComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AddEmployeeComponent,
    AddTaskComponent,
    NavbarComponent,
    ViewEmployeeComponent,
    ViewTaskComponent,
    ViewEmployeeTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
