import dataa from './data.json';

const INITIAL_STATE = {
    notes : [] 
}

function noteReducer(state = INITIAL_STATE, action) {

    switch(action.type) {
        case "LOADNOTES": {
            return{
                ...state,
                notes: action.payload
            }
        }
        case "ADDNOTE": {
            let newArr = [
                ...state.notes
            ];
            newArr.unshift(action.payload);
            return {
                notes : newArr
            }
        }
        case "DELETENOTE" : {
            let newArrState = [
                ...state.notes
            ]
            const newArr = newArrState.filter(el => el.id !== action.payload);
            return {
                notes: newArr
            }
        }
    }

    return state;
}

export default noteReducer;


export const getNotes = () => dispatch =>{
    
        dispatch({
            type: 'LOADNOTES',
            payload: dataa.notes
        })

}

/* https://jsonplaceholder.typicode.com/posts */