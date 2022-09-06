import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    searchName:"",
    name:'tariel@gmail.com',
    pass: '1234567',
    isLoaded: false,
    renderTextareaIsLoaded: false
}
const cartSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        todoLogic(state,action){
            
            state.todos.push({
                name: action.payload,
                id: Math.random().toString(),
                textarea: [],
            })
        },

        validation(state,action){
            if(state.name === action.payload.name && state.pass === action.payload.password){
                state.isLoaded=true  
            }else{
                state.isLoaded = false
            }
        },
        textareaTodo(state,action){
            if(action.payload.value !==""){
            const id = action.payload.id
            const newItem = state.todos.find((el)=>el.id ===id)
            newItem.textarea.push({
            name: action.payload.value,
            id: Math.random().toString()
          })  
        }    
        },
        deleteCart(state,action){
            const newTodos = state.todos.filter((el)=>{
                if(el.id !== action.payload){
                    return el
                }
            })
            state.todos = newTodos
        },
        search(state,action){
            state.searchName = action.payload
        }
    }
})

export const todoActions = cartSlice.actions
export default cartSlice