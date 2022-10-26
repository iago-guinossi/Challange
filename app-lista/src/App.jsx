import './App.css';
import React from 'react'

function DisplayMessage(){
  
  const [message, setMessage] = React.useState([])
  const newMessage = (name)=>{
    setMessage([...message, {id: Math.random(), nameToDo: name, done: false}])
  }
  
  const cheked = (id) => {
    const changeDone = message.map((message) => {
      if(message.id === id){
        return {...message, done: !message.done}
      }
      return message
    })
    setMessage(changeDone)
  }
  
  const removeMessage= (id) => {
    setMessage(message.filter((message) => message.id !== id))
  }
  const removeAllDone=() => {
    setMessage(message.filter((message) => !message.done))
  }
  const [name, setName] = React.useState('')
  function handleChange(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    newMessage(name)
    setName('')
  }

  function renderAction(message){
    return(<td>
      <button onClick={() => removeMessage(message.id)}>excluir</button>
    </td>)
  }

  function renderMessages(message){
    return (<tr key={message.id}>
          <td><input type='checkbox' defaultChecked={message.done} onClick={() => cheked(message.id)}/></td>
          <td>{message.nameToDo}</td>
          {renderAction(message)}
        </tr>)
  }
  const [view, setView] = React.useState('all')

  const [count, setCount] = React.useState(0)

  React.useEffect(()=>{
  setCount(0)
  message.map((message)=>{
  if(!message.done){
    return setCount(c => c + 1)
  }
  return {}
})}, [message])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {name ? <button type='submit'/> : <button disabled={true}/>}
      
        <input value={name} onChange={handleChange} id="name" placeholder='New Task...'/>
      </form>
      {message.map((message) => {
        if(view === 'all'){
          return renderMessages(message)
        } else if(view === 'act'){
          return !message.done ? renderMessages(message) : null
        } else{
          return message.done ? renderMessages(message) : null
        }
      })}
      <div>
        <tr>
        {(message.length !== 0 ) ?
        <>
        <td><div>{count} items left</div> </td>
        <td><button onClick={() => removeAllDone()}>Clear Completed</button></td>
        </>
        : null}
        </tr>
      </div>
      <div>
          <tr>
            <td><button onClick={()=>setView('all')}>All</button></td>
            <td><button onClick={()=>setView('act')}>Active</button></td>
            <td><button onClick={()=>setView('com')}>Completed</button></td>
          </tr>
      </div>
    </div>
  )
}



function App() {
  return (
    <div>
      <DisplayMessage/>
    </div>
  )
}

export default App;
