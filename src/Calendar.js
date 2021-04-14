import React, { Fragment, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useCalendar from './useCalendar';
import EventList from './eventList';
import './Calendar.css';


const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();
  const [show, setShow] = useState(false);
  const [add,setEvent]=useState("");
  const [items,setItems]=useState([]);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

 const eventName=(e)=>{
   setEvent(e.target.value)
 }
  const addItem=() =>{
    

   console.log(add);
   setItems((oldItems)=>{
     return [...oldItems,add];
   });
   setEvent("");
   
  }
  const deleteItems=(id)=>{
console.log("deleted");
setItems((oldItems)=>{
  return oldItems.filter((arrElem,index)=>{
return index!==id;
  })
})
  }
  
 
  return (
    <Fragment>



      <div className="month">
        <div className="button" id="prev" onClick={getPrevMonth} >
          <span>&#10094;</span>
        </div>
        <div className="date">
          <h2 id="month"></h2>
          <p id="dateStr"></p>
          <p id="month"> {`${monthNames[selectedDate.getMonth()]}  ${selectedDate.getFullYear()}`}</p>
        </div>
        <div className="button" id="next" onClick={getNextMonth}>
          <span>&#10095;</span>

        </div>
      </div>

      <table className="table">
        <thead className="weekends" >
          <tr >
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className="days">
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => handleShow(col.date)} >
                      {col.value}
                  
                    </td>
                    : <td key={col.date} className={col.classes}  onClick={() => handleShow(col.date)}>{col.value}</td>
                    
                ))}
              </tr>

            })
          }
        </tbody>
      </table>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD <span className="form-color">EVENTS</span>!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addItem}>  
          

              <ul>
            
            {
            items.map((itemval,index)=>{
              return <EventList 
              key={index} 
              id={index}
              text={itemval}
              onSelect={deleteItems}
              />
            })
          }
            </ul>
            <br/>
            <Form.Group controlId="formGroupEmail">

            <Form.Control type="text" onChange={eventName} placeholder="Add Event" value={add} />
            </Form.Group>


          </Form>

        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="success" onClick={addItem}>
            Add
          </Button>
        </Modal.Footer> 
      </Modal>

    </Fragment>
  );
}

export default Calendar;