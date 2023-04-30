import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[todo] increment',
    props<{nombre:string,apellido:string,email:string}>()
    );