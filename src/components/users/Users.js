import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: '',
          address:'',
          city:'',
          state:'',
          zipcode:'',
          phonenumber:'',

            id: '',
            isUpdate: false,
            error: {
                name: '',
                address:'',
               city:'',
              state:'',
            zipcode:'',
            phonenumber:'',
          
            }
      });
      const { id } = useParams();
    useEffect(() => {
      loadUser();
    }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="">
          <div>
              <h1 className="display-4">User Id: {user.id}</h1>
              
          </div>
          <div>
               
                
                    <h4><b> {user.name}</b></h4> 
                    <p>Id: <b>{user.id}</b></p>
                    <p>address: <b>{user.address}</b></p> 
                    <p>city : <b>{user.city}</b></p>
                    <p>state : <b>{user.state}</b></p>
                    <p>zipcode : <b>{user.zipcode}</b></p>
                    <p>phonenumber : <b>{user.phonenumber}</b></p>
              
          </div>
         
      <div style={{"margin":"25px"}}>
        <Link className="backbutton" to="/"> Back Page</Link> 
      </div>
    </div>
  );
};

export default User;