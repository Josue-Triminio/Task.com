import { useSelector,useDispatch } from "react-redux"
import {deleteTask} from '../slices/tasks/taskSlice'
import { Link } from "react-router-dom"
import { useEffect } from "react"


export const TaskList = () => {

   const task =useSelector(state=>state.task)
   const dispatch=useDispatch()

   const handleDelete=(id)=>{
    dispatch(deleteTask(id))
   }

   function saveDataLocal(){
    localStorage.setItem("myTasks",JSON.stringify(task))
  }
useEffect(() => {
  saveDataLocal()
}, [])

  return (
   <>
   <header className="flex justify-evenly items-center bg-blue-500 text-white p-3 ">
      <h1 className=" text-2xl font-bold md:text-4xl">Tasksme.com</h1>
      <div>
        <h2 className="text-2xl">{task.length} tasks</h2>
      </div>
   </header>
     <Link to="/create" 
     className=" bg-slate-50 flex items-center top-0 sticky p-3 gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-plus-circle-fill add ml-7" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
      </svg>
      Add Task
    </Link>
    
   <main className=" md:w-[80%] lg:w-[80%] mx-auto p-8">

      {task.map(task=>(
        <div key={task.id} className=" bg-white flex flex-col  items-center shadow-lg rounded-md mb-3 ">
          <h2 className="text-xl p-4 md:text-2xl font-semibold"><span className="text-gray-500 text-lg">Title:</span> {task.name}</h2>
          <p className="border w-[95%] p-10 rounded-lg text-sm md:text-xl "><span className=" font-semibold"><span className="text-gray-500 text-lg">Description:</span><br /> </span> {task.description}</p>
          <div className="flex gap-10 p-2 md:p-4">
            <Link 
              to={`/edit/${task.id}`}
              className="flex items-center gap-2 bg-blue-500 text-sm
              p-1 rounded-md text-white update shadow-xl
               lg:p-2"> TASK EDIT
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </Link>
            <button 
              onClick={()=>handleDelete(task.id)}
              className=" flex items-center gap-2 bg-red-500 rounded-md p-1 text-white text-sm delete shadow-xl
               lg:p-2">
                DELETE TASK <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
            </button>
            
          </div>
        </div>
      ))}
    </main>
   
   
   </>
  )
}
