import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';

function Counter(props) {
    console.log(props);
    return(
        <div>
            <h1>Counter Component</h1>
            <p>Count : {props.count}</p>
            <Button variant="outline-primary"  onClick = {props.onincrementClick}>+</Button>&nbsp;
            <Button variant="outline-danger"  onClick = {props.ondecrementClick}>-</Button>
        </div>
    )
}

function mapStateToProps(state){
    console.log("mapStateToProps", state);
    return {count:state.count}
}

function mapDispatchToProps(dispatch)
{
    return{
        onincrementClick: ()=>{
            console.log("clicked");
            const action = {type:'increment'}
            dispatch(action);
        },
        ondecrementClick:()=>{
             const action = {type:'decrement'}
             dispatch(action);
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
