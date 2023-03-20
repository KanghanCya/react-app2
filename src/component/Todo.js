import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function ToDo(props) {


    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandle(){    
        setModalIsOpen(true)
    }

    function closeHandle(){    
        setModalIsOpen(false)
    }

    return (
      
        <div className='card'>
          <h2>{props.text}</h2>       
          {/* 
          <button className='btn' onClick={deleteHandle}>Delete</button>
        */}

          <Button label="Success" severity="success" raised />

          {modalIsOpen && <Modal onCancel={closeHandle} onConfirm={closeHandle}/>}
          {modalIsOpen && <Backdrop/>}


        </div>
  
      
    );
  }
  
  export default ToDo;