import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../store'

 function ToDo({text, onBtnClick, id}) {
    return (
        <li>
            <Link to={`/${id}`}>
            {text}
            </Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return{
        onBtnClick:()=>{
            console.log(ownProps);
            dispatch(remove(ownProps.id))
        }
    }
}

export default connect(null, mapDispatchToProps) (ToDo);