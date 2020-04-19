import {SET_CITY} from '../actions/index';
//reducer definit per gestionar les ciutats, es poden crear varis reducers lo ideal es tenir un reducer per a cada acció
//si l'state es null, l'inicialitzem a buit
export const city = (state={},action) =>{
    //els reducers han de ser funcions pures--> o sigui han de dependre dels parametres d'entrada, no han de fer crides a BD o a WS, no s'han d'alterar els valors del parametres.
    switch (action.type){
        case SET_CITY: // per l'accio set_city retornem el nou valor
            return action.payload;
        default:
            return state;
    }
};