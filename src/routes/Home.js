import React, { useState } from 'react'
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../store';

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");
    function onChange(e) {
      setText(e.target.value);
    }
    function onSubmit(e) {
      e.preventDefault();
      addToDo(text);
      setText("");
    }
    return (
        <div>
            <h1>To Dos</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        toDos: state
    };
};

function mapDispatchToProps(dispatch) {
    return {
      addToDo: text => dispatch(add(text))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);