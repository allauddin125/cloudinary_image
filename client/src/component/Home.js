import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'
import {getP} from '../api/api'
import moment from 'moment'


const Home = () => {
  
    const [data,setData] = useState([]);
    
    const dataget = async() =>{
        try{
            const res = await getP()
      
                setData(res.data)
                console.log(res.data)
         
        }catch(error){
            console.log(error)
        }

    }
    useEffect(()=>{
        dataget()
        console.log("call")
    },[])
   
  return (
    <>
        <div className="container mt-2">
        <h1>Mern Image Upload Projet</h1>   
            <div className="text-end">
            <Button variant="primary"><NavLink to="/register" className='text-decoration-none text-light'>AddUser</NavLink></Button>
            </div> 
            <div className="row d-flex justify-content-between align-item-center mt-5">
                {
                    data.length > 0 && data.map((elem,index)=>{
                        const {name,imgpath,date} = elem;
                        return(
                            <Card style={{ width: '22rem' , height:"18rem"}} className='md-3' key={index}>
                            <Card.Img variant="top" src={imgpath} style={{width:'100px' ,textAlign:'center', margin:'auto'}} className='mt-2'/>
                                <Card.Body className='text-center'>
                                    <Card.Title>User Name : {name}</Card.Title>
                                        <Card.Text>
                                            Date Added :{moment(date).format("L")}
                                        </Card.Text>
                                        <Button variant="danger" >Delete</Button>
                                </Card.Body>
                        </Card>
                        )
                    })
                }
               
            </div>
        </div> 

    </>
  );
}

export default Home;
