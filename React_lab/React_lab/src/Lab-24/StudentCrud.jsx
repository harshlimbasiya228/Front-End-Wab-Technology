import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function StudentCrud() {
  const [students, setStudents] = useState([]);

  const apiUrl = "https://6aaab748ff4dd5698b4ef4f2.mockapi.io/students";

  const studentDetails = () => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setStudents(res);
      });
  };

  useEffect(() => {
    studentDetails();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );
    if (!confirmDelete) return;

    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newStudents = [...students];
        const index = newStudents.findIndex((student) => student.id === id);

        if (index !== -1) {
          newStudents.splice(index, 1);
          setStudents(newStudents);
        }
      } else {
        alert("Failed to delete student.");
      }
    });
  };
  console.log("My Students Data:", students);
  return (
    <>
      <div className="container mt-4">
        <Link
          to="/students/add"
          className="btn btn-success me-3 fw-bold shadow-sm"
        >
          + Add New Student
        </Link>
        <h4 className="mb-4 text-center">Student List</h4>

        <div className="row">
          {students.map((student) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={student.id}>
              <div className="card shadow-sm h-100">
                <div className="text-center mt-3">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="rounded-circle img-thumbnail"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{student.name}</h5>
                  <hr />
                  <p className="card-text mb-1">
                    <strong>ID:</strong> {student.id}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Email:</strong> {student.Email}
                  </p>
                  <p className="card-text mb-1">
                    <strong>SPI:</strong> {student.spi}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Department:</strong> {student.Depertment}
                  </p>

                  
                  <div className="mt-auto d-flex justify-content-between">
                    <Link
                      to={`/students/${student.id}`}
                      className="btn btn-info btn-sm text-white flex-fill me-1 fw-semibold"
                    >
                      View
                    </Link>
                    <Link
                      to={`/students/edit/${student.id}`}
                      className="btn btn-warning btn-sm flex-fill mx-1 fw-semibold"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="btn btn-danger btn-sm flex-fill ms-1 fw-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudentCrud;
