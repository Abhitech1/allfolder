import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
// import Comment from "./Comment";

const LifeCycle = () => {
  const [data, setData] = useState();

  let url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    function myData(){
     Axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
    myData();
  })

  const setClick =()=>{}

  return(
    <>
    <pre>{JSON.stringify(data)}</pre>
      <table className="table">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.length > 0  && data.data.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="ps-5 ms-5">
      <button onClick={() => setClick(true)} className="btn btn-primary text-center">Send Data</button>
      </div>
    </>
  )
}

export default LifeCycle;


