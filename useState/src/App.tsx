import { useState } from "react"

function App() {
// Hooks can only be used in function components not in class components 
// hooks can also not be used in conditional statements , cannot be nested in anything. They should run all at the same time 
const [count, setCount] = useState(4) // use state always return an array hence we put count for default state and setCount for the updated state
// in this case 4 is our default value passed to useState

// we can run it one time, instead of every render like the example above using the function approach

const[example, setExample] = useState(()=>{ // this function version is for complex computation 
//do something here
// also works for functions just put function here 
})

// for objects 
const [state , setState] = useState({color:"Blue", number:4})
const color = state.color
 const number = state.number


function decrementCount(){
setState(prevState =>{ // without using spread operator it overides every object value we have soo we use spread operator as a copy 
return {...prevState, number: prevState.number - 1}} ) // basically setCount have a function component where it stores previous value, i use it whenever a change in previous value is involved
// setCount(Prevcount => Prevcount -1 )
}
// in this example above out previous state is a copy
let incrementCount = ()=>{
  // setCount(count + 1)
  setState(prevState =>{
   return {...prevState, number: prevState.number +1} 
  })
}

// or just use multiple states.. 
  return (
    <>
     
    <button style={{padding:"2rem", fontSize:"50px"}} onClick={decrementCount} > - </button>
    <span style={{padding:"2rem", fontSize:"50px"}}>{color}</span>
    <span style={{padding:"2rem", fontSize:"50px"}}>{number}</span>
    <button style={{padding:"2rem", fontSize:"50px"}} onClick={incrementCount}>+</button>

 
    </>
  )
}

export default App
