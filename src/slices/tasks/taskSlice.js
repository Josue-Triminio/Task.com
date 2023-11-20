import { createSlice } from "@reduxjs/toolkit";



const getDataLocal=()=>{
   let datos=localStorage.getItem("myTasks")
   if (datos) {
    return JSON.parse(datos)
   }else{
    return []
   }
  }



  

export const taskSlice=createSlice({
    name:'task',
    initialState:getDataLocal(),   


    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
        },
        updateTask:(state,action)=>{
            const {id,name,description}=action.payload
            const foundTask = state.find(task=>task.id===id)
            if (foundTask) {
                foundTask.name=name
                foundTask.description=description
            }
            


        },
        deleteTask:(state,action)=>{
          const taskFound =  state.find(task=>task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound),1)
            }

        }
    
}

})


export const {addTask,updateTask,deleteTask}=taskSlice.actions
export default taskSlice.reducer