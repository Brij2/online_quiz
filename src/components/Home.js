import React from 'react'
import Axios from 'axios'

const Home = () => {
  const handleClick = async ()  =>{
    await  Axios.get('https://quiz-server-ab0n.onrender.com/config').then(()=>{
          alert("Queries executed! ")
      }).catch(err=>{
          console.log(err)
          alert("Something went wrong")
      })
  }
  return (
    <div className='container mt-4 text-center'>
      <h3>Quiz App</h3>
      <button><div className="" onClick={handleClick}>configure</div></button>
    </div>
  )
}

export default Home