import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Studentadd() {
  const [data, setData] = useState({
    name: "",
    Email: "",
    spi: "",
    Department: "",
  });
  const { id } = useParams();
  const nevigate = useNavigate();
  const apiUrl = "https://6aaab748ff4dd5698b4ef4f2.mockapi.io/students";

  useEffect(() => {
    if (id) {
      fetch(apiUrl + "/" + id)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
   e.preventDefault();
    if (id) {
      fetch(apiUrl + "/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => nevigate("/"));
    } else {
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => nevigate("/"));
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (<>

  <div className="container mt-5">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-header bg-dark text-white text-center">
                    <h5 className="mb-0">{id ? "Edit Student Details" : "Add New Student"}</h5>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                value={data.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Email:</label>
                            <input 
                                type="email" 
                                name="Email" 
                                className="form-control" 
                                value={data.Email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">SPI:</label>
                            <input 
                                type="text" 
                                name="spi" 
                                className="form-control" 
                                value={data.spi} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Department:</label>
                            <input 
                                type="text" 
                                name="Depertment" 
                                className="form-control" 
                                value={data.Department} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100 fw-bold">
                            {id ? "Update Data" : "Save Student"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
        {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentCrud />}></Route>
      <Route path="/students" element={<StudentCrud />} />
      <Route path="/students/:id" element={<StudentDetails />} />
      <Route path="/students/edit/:id" element={<Studentadd/>}/>
    </Routes>
    </BrowserRouter> */}
  </>
  )
}

export default Studentadd;
