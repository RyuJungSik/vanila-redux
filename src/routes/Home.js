import React, { useState } from 'react'
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';


 function Home({toDos, addToDo}) {

    const [text, setText]=useState("");
    const onChange=(event)=>{
        setText(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        addToDo(text);
        setText("");
       
    }
    return (
        <>
         <h1>To Do</h1> 
         <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>Add</button>
        </form>  
        <ul>{toDos.map(toDo=>(<ToDo {...toDo} key={toDo.id}/>))} </ul>
        </>
    )
}

function mapStateToProps(state) {
    return {toDos : state};
}

function mapDispatchToProps(dispatch){
    return {
        addToDo:(text)=>dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);