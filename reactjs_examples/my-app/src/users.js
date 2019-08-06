import React from 'react';

const UserList = (props) => (         
    <p><strong>name : </strong> {props.name.title} {props.name.first} {props.name.last},<img src= {props.picture.medium} /></p>
)

export default users;   