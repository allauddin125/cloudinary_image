import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import {postP} from '../api/api'

const Register = () => {
    const [data,setData] = useState({
        name:'',
        file:''
    })
    const navigate= useNavigate();
    const savedb = async() =>{
     
      try {
        const formData = new FormData();
        formData.append('photo', data.file); // 'photo' matches the backend multer field
        formData.append('name', data.name);
    
        const res = await postP(formData);
        
        console.log(res.data); // Check the response
        if(res.status === 200){
          navigate('/');
          console.log("register")
        }else{
          alert("error")
        }

      } catch (error) {
        console.error('Error during API call:', error.response ? error.response.data : error.message);
      }
     
    }


    const save = (e) => {
      e.preventDefault();
      savedb()
      navigate('/');
      
       
      
    };
    
  return (
    <div className='container mt-3'>
      <h1>Register</h1>
      <Form className='mt-3' onSubmit={save}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  name="fname" onChange={(e)=>setData({...data,name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Your Image</Form.Label>
        <Form.Control type="file"  name="photo" onChange={(e)=>setData({...data,file:e.target.files[0]})}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  );
}

export default Register;
