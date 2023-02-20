import React from 'react';
import { connect } from 'react-redux';
import Main from './Main'

function MainConteiner(props) {
  return (
    <Main img = {props.state}/>

  )
}
let mapStateToProps = (state) =>{
	return{
        state: state.MainPageReducer.img
	}
}

export default connect(mapStateToProps)(MainConteiner);