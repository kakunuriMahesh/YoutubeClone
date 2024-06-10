import {createSlice, configureStore} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "user",
    initialState:{
        isMenuOpen:true,
        
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
    }
})

const store = configureStore({
    reducer:{
        user: appSlice.reducer
    }
})


export const {toggleMenu} = appSlice.actions;

export default store 

