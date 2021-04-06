import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [list, setList] = useState([]);
  const [listTitle, setListTitle] = useState([]);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  
  const user = "Phil"
  const time ="11:23 - 06.04.20201"


  const handleSubmit = (event) => {
    event.preventDefault()
    setList([...list, input])
    setListTitle([...listTitle, title])

    setInput("")
    setTitle("")
  }

  const handleDelete = (i) => {
    let tempArr = [...list]
    let titleArr = [...listTitle]
    tempArr.splice(i, 1)
    titleArr.splice(i, 1)
    setList(tempArr)
    setListTitle(titleArr)
  }

 

  return (
    <div className="App">
      {/* <button onClick={() => setList([...list,1])}></button> */}
      <form className="input-wrapper" onSubmit={handleSubmit}>
      <input className="post-title" type="text" placeholder="Add your Post Title" onChange={(event) => setTitle(event.target.value)} value={title} />
        <input className="post-txt" type="text" placeholder="Write your Post Txt" onChange={(event) => setInput(event.target.value)} value={input} />
        <button className="submit" type="submit" value="submit" >Post</button>
      </form>
      {list.map((item, i) => (
        <div className="post-element">
          <h4>{user}</h4>
          <h4>{listTitle[i]}</h4>
          <p>{item}</p>
          <p>{time}</p>
          <button onClick={() => handleDelete(i)}>Delete</button>
          
        </div>
      ))}

    </div>
  )
}
export default App;
