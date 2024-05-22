import React,{useState} from 'react'
import "./Form.css"
const Form = () => {
  const [client,setClient]=useState({
    name:"",
    email:"",
    subject:"",
    description:"",
  });
  const changeHandler=(e)=>{
    setClient({...client,[e.target.name]:e.target.value})
  }
  const addClient=async()=>{
    console.log(client);
    let clientDetails=client;
    await fetch("http://localhost:4000/client",{
      method:"POST",
      headers:{
        Accpet:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(clientDetails),
    }).then((res)=>res.json()).then((data)=>{
      data.success?alert("your information is submited"):alert("something went wrong");
    });

    
  }

  return (
    <div className='form'>
      <div className='name form-components'>
        <span>Your Name</span>
        <input type="text" placeholder='Name' name='name' onChange={changeHandler} value={client.name} />
      </div>
      <div className='email form-components'>
        <span>Email</span>
        <input type="email" placeholder='Email' name='email' onChange={changeHandler} value={client.email} />
      </div>
      <div className='subject form-components'>
        <span>Subject</span>
        <input type="text" placeholder='Subject' name='subject' onChange={changeHandler} value={client.subject} />
      </div>
      <div className='description form-components'>
        <span>Description</span>
        <textarea name="description" id="" cols="30" rows="10" placeholder='Description'  onChange={changeHandler} value={client.description}></textarea>
      </div>
      <div className="btn submit">
        <button className='btn' onClick={addClient}>Submit</button>
      </div>
    </div>
  )
}

export default Form
