import React from 'react';

const EventList =(props)=>{
    
    return (
        <>
        <div className="estyle">
    <li>{props.text} 
    <i className="fas fa-trash-alt" 
    onClick={()=>{
        props.onSelect(props.id);
    }}>
        
    </i>
    </li>
    </div>
    </>
    )
}
export default EventList;