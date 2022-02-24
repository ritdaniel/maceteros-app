import { TYPES } from "../Actions/CarroComprasAction";


export const EstadoInicialCarro = {

cart:[],
};

export function CarroComprasReducer(state,action){

switch (action.type){
    case TYPES.ADD_TO_CART:{
            
    }
    case TYPES.REMOVE_ONE_BY_ONE:{

    }
    case TYPES.REMOVE_ALL_FROM_CART:{

    }
    case TYPES.CLEAR_CART:{

    }
    default:
        return state;
}

}
