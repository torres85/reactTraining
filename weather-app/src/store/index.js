import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

//estat inicial
const initialState = {
    city: 'Reus,es',
};


//creem l'store de redux, necessita que li passem una funcio que es diu reducer, ara per ara li passem buida, els reducer posen la informacio dels actions a l'store de l'aplicació  
//aquests parametres son necessaris pq funcioni el pluguin de redux de chrome window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // aixi s'applica pluguin de redux de chrome amb middlewares 
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
