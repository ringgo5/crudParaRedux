import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Usuario } from '../modelos/usuario.model';



export const estadoInicial: Usuario[]=[
    new Usuario("Vicente", "mgimenez","xxx@gmail.com"),
    new Usuario("jose", "mgimenez","xxx@gmail.com"),
    new Usuario("pablo", "mgimenez","xxx@gmail.com")
]
  
const _todosReducer = createReducer(estadoInicial,

    on(actions.crearTodo,( state,{nombre,apellido,email}) => [
        ...state,
        new Usuario(nombre,apellido,email), //ojo, lo meto en []--------)    no hacer => ({})
            //con esto devolvemos otro arreglo
            
    ]),

);

export function todosReducer(state: Usuario[] | undefined, action: Action) {
    return _todosReducer(state, action);
}