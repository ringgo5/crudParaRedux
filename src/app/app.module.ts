import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//formularios
import { ReactiveFormsModule } from '@angular/forms';
//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TodoModule } from './todos/todo.module';
import { todosReducer } from './todos/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    TodoModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({usuarios:todosReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
