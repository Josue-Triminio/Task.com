import { useState ,useEffect} from "react"
import {useDispatch,useSelector}from'react-redux'
import {v4 as uid} from 'uuid'
import { addTask,updateTask } from "../slices/tasks/taskSlice"
import {  Link, useNavigate ,useParams} from "react-router-dom"

export const TaskForm = () => {
  const [tasks, setTasks] = useState({
    name:'',
    description:''
  })
const dispatch=useDispatch()
  const handleChange=(e)=>{
    setTasks({
      ...tasks,
      [e.target.name]:e.target.value
    })
  }

  const task=useSelector(state=>state.task)
  const navigate = useNavigate()
  const params=useParams()


 
  const handleSubmit=(e)=>{
      e.preventDefault()
      if (params.id) {
        dispatch(updateTask(tasks))
      }else{
        dispatch(addTask({
          ...tasks,
          id:uid()
        }))
      }
      
      navigate('/')
      
    }
    
    
    
    useEffect(() => {
    
      if (params.id) {
        setTasks(task.find(task=> task.id===params.id))
      }
      
  }, [])
  

  return (
  <>
   <div className="flex justify-evenly items-center bg-blue-500 text-white p-3 ">
      <h1 className=" text-2xl font-bold md:text-4xl">Tasksme.com</h1>
      <div>
        <h2 className="text-2xl">{task.length} tasks</h2>
      </div>
   </div>
   <Link to={'/'} className=" flex items-center justify-end gap-2 p-5 text-2xl text-gray-600"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="add bi bi-box-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
      </svg>
My    Tasks
  </Link>
   <section className="w-full flex justify-center items-center flex-col p-5 mt-18">
    <h3 className="text-2xl font-semibold p-3 text-gray-600">Add your task.</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[90%] md:w-[40%] shadow-md p-6 bg-white rounded-md">
        <input className="p-2 rounded-md border" type="text" name="name" value={tasks.name}  placeholder="Title" required onChange={handleChange}/>
        <textarea className="p-2 border rounded-md min-h-[20rem]" name="description"  value={tasks.description} placeholder="Description" onChange={handleChange}></textarea>
        <button className="flex gap-3 justify-center bg-blue-500 w-[40%] mx-auto p-2 text-white rounded-md" type="submit">
          Save
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-floppy-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5v-13Z"/>
            <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V16Zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V0ZM9 1h2v4H9V1Z"/>
          </svg>
        </button>
    </form>
   </section>
    
  
  </>
  )
}
