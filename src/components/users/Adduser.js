import React, { useState } from "react"
import './Adduser.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import cancelButton from '../../Assets/images/cross.png'
import logo from "../../Assets/images/logo.png"
const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phonenumber: '',
        id: '',
        isUpdate: false,
        errorname: '',
        errorzipcode: '',
        errorphonenumber: '',

    });
    const [validation, setvalidaton] = useState({
        nameerror: false,
        zipcodeerror: false,
        phonenumbererror: false,

    })


    const onInputChange = async event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = async event => {
        event.preventDefault();
        if (validation.nameerror == false && validation.zipcodeerror == false && validation.phonenumbererror == false) {
            
            await axios.post("http://localhost:3001/users", user);
            history.push("/");
        }
    };


    const changeValue = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const firstname_validation = (event) => {
        const data = event.target.value;
        const Regexp = new RegExp("^[A-Z]{1}[a-z]{2,}$");
        const test = Regexp.test(data);
        if (!test) {

            setUser((user) => ({
                ...user,
                errorname: 'Please Enter valid Name'
            }))
            setvalidaton((validation) => ({
                ...validation,
                nameerror: true
            }))

        }
        else {
            console.log('else')
            setUser((user) => ({
                ...user,
                errorname: ''

            }))
            setvalidaton((validation) => ({
                ...validation,
                nameerror: false
            }))
        }
    }
    const phonenumber_validation = (event) => {
        const data = event.target.value;
        const Regexp = new RegExp("^[+][1-9]{2}[-][0-9]{10}$");
        const test = Regexp.test(data);
        if (!test) {

            setUser((user) => ({
                ...user,
                errorphonenumber: 'Enter valid Number'
            }))
            setvalidaton((validation) => ({
                ...validation,
                nameerror: true
            }))
        }
        else {
            console.log('else')
            setUser((user) => ({
                ...user,
                errorphonenumber: ''
            }))
            setvalidaton((validation) => ({
                ...validation,
                nameerror: false
            }))
        }
    }
    const zipcode_validation = (event) => {
        const data = event.target.value;
        const Regexp = new RegExp("^[0-9]{6}(?:-[0-9]{4})?$");
        const test = Regexp.test(data);
        if (!test) {

            setUser((user) => ({
                ...user,
                errorzipcode: 'Enter valid zip-code'
            }))
            setvalidaton((validation) => ({
                ...validation,
                nameerror: true
            }))
        }
        else {
            console.log('else')
            setUser((user) => ({
                ...user,
                errorzipcode: ''
            }))
            setvalidaton((validation) => ({
                ...validation,
                nameerror: false
            }))
        }
    }
    return (
        <div className="payroll-main">
            <header className='header-content header'>
                <div className="logo-content">
                    <img src={logo} alt="" />
                    <div><Link to="/" className="button">
                        <span className="emp-text">ADDRESS</span> <br />
                        <span className="emp-text emp-payroll">BOOK</span>
                    </Link>
                    </div>

                </div>
            </header>

            <div className="form-content">
                <form className="form-head" action="#" onSubmit={onSubmit}>

                    <header className="form-header">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>PERSON ADDRESS FORM </span>
                        <span>
                            <Link to=''><img className="cancel-img" src={cancelButton} alt="" /></Link>
                        </span>
                    </header>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">FullName</label><br />
                        <input className="input" type="text" id="name" name="name" value={user.name} onChange={changeValue} onBlur={firstname_validation} placeholder="Your name.." />
                        <error className="error">{user.errorname}</error>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Address</label>
                        <input className="input" type="text" id="address" name="address" value={user.address} onChange={changeValue} placeholder="Your address.." />
                        {/* <error className="error">{user.error.name}</error> */}
                    </div>
                    <div class="row-content">
                        <div class="row">
                            <div class="label-city">
                                <label class="city" for="city">City</label>
                                <input class="input" type="city" id="city" name="city" value={user.city} onChange={changeValue} placeholder="Your city.." />
                                {/* <error className="error">{user.error.name}</error> */}
                            </div>

                            <div class="label-state">
                                <label class="state" for="state">State</label>
                                <select id="state" name="state" value={user.state} onChange={changeValue}>
                                    <option value="">Select State</option>
                                    <option value="DELHI">DELHI</option>
                                    <option value="HARYANA">HARYANA</option>
                                    <option value="HARYANA">HARYANA</option>
                                    <option value="HARYANA">HARYANA</option>
                                    <option value="UP">UP</option>
                                    <option value="TAMILNADU">TAMILNADU</option>
                                </select>
                            </div>


                            <div class="label-zip">
                                <label class="zip" for="zipcode">Zipcode</label>
                                <input class="input" type="zipcode" id="zipcode" name="zipcode" value={user.zipcode} onChange={changeValue} onBlur={zipcode_validation} placeholder="Your zipcode.." />
                                <error className="error">{user.errorzipcode}</error>
                                {/* <error className="error">{user.error.name}</error> */}
                            </div>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="phonenumber">phone-Number</label>
                        <input className="input" type="text" id="phonenumber" name="phonenumber" value={user.phonenumber} onChange={changeValue} onBlur={phonenumber_validation} placeholder="phonenumber.." />
                        <error className="error">{user.errorphonenumber}</error>
                        {/* <error className="error">{user.error.name}</error> */}
                    </div>




                    <div className="buttonParent">

                        <Link to="/" className="button resetButton">RESET</Link>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">{user.isUpdate ? 'Update' : 'Submit'}</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
};

export default AddUser
