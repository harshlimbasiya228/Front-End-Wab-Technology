import React, { useState } from 'react'

function Crud() {
     const [student, setStudent] = useState({
      name:"",
      branch:"",
      spi:""
     });
     const [studentlist, setStudentList] = useState([]);

     const [editIndex, setEditIndex] = useState(null);
     
     const handle=(e)=>{
      e.preventDefault()
      if(!student.name || !student.branch || !student.spi)
      {
        alert("Please fill out a Valid Details...");
        return;
      }

      if(editIndex !== null){
        
        const updatedList = [...studentlist];
        updatedList[editIndex] = student;
        setStudentList(updatedList);
        setEditIndex(null);
      }else{
        setStudentList([...studentlist,student]);
      }
      setStudent({name:"", branch:"", spi:""});
     }

     const handleEdit = (index) => {
      setStudent(studentlist[index]);
      setEditIndex(index);
     };

     const handleDelete = (index) =>{
      const updatedList = [...studentlist];
      updatedList.splice(index,1);
      setStudentList(updatedList);
     }
     

  return (
  <>
  <div style={{ textAlign: 'center' }}>
        <h2>Student CRUD</h2>

       
        <form onSubmit={handle}>
          <label htmlFor='name'>Student Name : </label>
          <input 
            type='text' 
            value={student.name} 
            onChange={(e) => setStudent({ ...student, name: e.target.value })} 
          /><br /><br />
          
          <label htmlFor='branch'>Student Branch : </label>
          <input 
            type='text' 
            value={student.branch} 
            onChange={(e) => setStudent({ ...student, branch: e.target.value })} 
          /><br /><br />
          
          <label htmlFor='spi'>Student SPI : </label>
          <input 
            type='number' 
            value={student.spi} 
            onChange={(e) => setStudent({ ...student, spi: e.target.value })} 
          /><br /><br />
          
         
          <button type="submit" style={{backgroundColor:'blue'}}>
            {editIndex !== null ? "Update Student" : "Submit"}
          </button>
        </form>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <table border="1" style={{ margin: "0 auto", width: "60%", textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Branch</th>
              <th>Student SPI</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           
            {studentlist.map((stu, index) => (
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.branch}</td>
                <td>{stu.spi}</td>
                <td>
                  <button onClick={() => handleEdit(index)} style={{ marginRight: '10px' }}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </>
  )
}

export default Crud