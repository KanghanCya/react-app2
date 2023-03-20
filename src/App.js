import Todo from './component/Todo';
import './App.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tree } from 'primereact/tree';
import React, { useState, useEffect } from 'react';
import { NodeService } from './service/NodeService';

function App() {
  const data = [
   { 
    id: 1,
    text: "Test1"
   },
   { 
    id: 2,
    text: "Test2"
   },
   { 
    id: 3,
    text: "Test3"
   },
   { 
    id: 4,
    text: "Test4"
   },
  ] 
  const products =[
    {
        code: 1,
        name: 2,
        category: 3,
        quantity: 4,
    },
    {
      code: 1,
      name: 2,
      category: 3,
      quantity: 4,
  },
  {
    code: 1,
    name: 2,
    category: 3,
    quantity: 4,
}
]

const [nodes, setNodes] = useState([]);
    
useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
}, []);

   console.log(data[0])
     
   const a = data.map(
    (e)=>{
    return e.id
   })    

   console.log(a)

   const b = data.filter(
    (e)=>{
      if(e.id==2)
    return true

  return false  
   })

  console.log(b)




  return (
    <div>
      <h1>To Do</h1>
 
      { data.map((e)=>{ return <Todo text={e.id}></Todo>})}

      <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<Tree value={nodes} className="w-full md:w-30rem" />


      {/*
      <Todo text="Hello1"></Todo>
      <Todo text="Hello2"></Todo>
      <Todo text="Hello3"></Todo>
  */}
    
    </div>


  );
}

export default App;
