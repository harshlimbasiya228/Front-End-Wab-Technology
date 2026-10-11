import React from "react";

function Student() {
  let student = [
    {
      name: "Harsh",
      erno: 250101011,
      collage: "Darshan University",
      age: 19,
    },
    {
      name: "Rudra",
      erno: 25010101156,
      collage: "Darshan University",
      age: 23,
    },
    {
      name: "Rohit",
      erno: 25010101153,
      collage: "Darshan University",
      age: 40,
    },
    {
      name: "rahul",
      erno: 25010101170,
      collage: "Darshan University",
      age: 19,
    },
    {
      name: "Ravindra",
      erno: 25010101190,
      collage: "Darshan University",
      age: 40,
    },
  ];
  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>name</th>
            <th>enro</th>
            <th>collage</th>
            <th>age</th>
          </tr>
        </thead>
        {student.map((s) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{s.name}</td>
                  <td>{s.erno}</td>
                  <td>{s.collage}</td>
                  <td>{s.age}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Student;
