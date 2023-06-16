import{createSlice} from "@reduxjs/toolkit";
export const dataSlicing=createSlice({
    name:'dataslice',
    initialState:{viewdata:[]},

    reducers:{
        change:(state,action)=>{
            console.log(action.payload);
           
            // state.viewdata=action.payload.viewdata  
            state.viewdata.push(action.payload)
        },  

    //     dele:(state)=>{
    //         state.viewdata=''
    //       }
      
    }

})

export const {change,}=dataSlicing.actions
export default dataSlicing.reducer