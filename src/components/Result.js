import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

const Result = () => {
  const [resList, setResList] = useState([])
  const prn = localStorage.getItem("prn")
  // console.log(prn);
  useEffect(() => {
    // console.log("-------------------------------|");
    Axios.get(`https://quiz-server-ab0n.onrender.com/results/${prn}`).then((response) => {
      // console.log("REs:::::::",response)
      setResList(response.data);
      // console.log("REs:::::::Data:::::",response.data)
      // console.log(resList);
    });
    // console.log(resList);
  }, [prn])

  return (
    <div className="container mt-4">
        <h3 className='text-center' style={{ color: "orange" }}>Quizes Result</h3>
        {resList.length === 0 ? (
          <>
            <hr />
            <h4 className='text-danger text-center mt-4'>No quizes attempted so far !!</h4>
          </>
        ) : (

          <>
            <table className="table table-bordered mt-4 text-center">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Quiz ID</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                {resList.map((val, key) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{key + 1}</th>
                        <td>{val.quiz_id}</td>
                        <td><span style={{color: "orange", fontWeight: "bold"}}>{val.marks}</span> out of <span style={{fontWeight: "bold"}} className='text-success'>{val.out_of}</span></td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
  )
}

export default Result