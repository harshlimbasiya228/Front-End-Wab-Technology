import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function StudentDetails() {

    const { id } = useParams(); 
    const [student, setStudent] = useState({});

   const apiUrl = "https://6aaab748ff4dd5698b4ef4f2.mockapi.io/students";

    useEffect(() => {
    fetch(`${apiUrl}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setStudent(res);
      });
  }, [id]);


  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            
            {/* Card Header */}
            <div className="card-header bg-dark text-white text-center py-3 rounded-top-4">
              <h5 className="mb-0">Student Profile</h5>
            </div>

            <div className="card-body p-4 text-center">
              {/* Profile Image */}
              <img 
                src={student.avatar} 
                alt={student.name} 
                className="rounded-circle img-thumbnail mb-3 shadow-sm" 
                style={{ width: "130px", height: "130px", objectFit: "cover" }} 
              />
              
              <h4 className="fw-bold text-primary mb-1">{student.name}</h4>
              <p className="text-muted mb-4">{student.Depertment} Department</p>

              {/* Student Details in List Group */}
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="list-group-item d-flex justify-content-between align-items-center px-1">
                  <strong>ID:</strong> <span className="text-secondary">{student.id}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-1">
                  <strong>Email:</strong> <span className="text-secondary">{student.Email}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-1">
                  <strong>SPI:</strong> 
                  <span className="badge bg-success rounded-pill px-3 py-2">
                    {student.spi}
                  </span>
                </li>
              </ul>
              
             
              <Link to="/" className="btn btn-outline-dark w-100 rounded-pill fw-bold">
                Back to Student List
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default StudentDetails