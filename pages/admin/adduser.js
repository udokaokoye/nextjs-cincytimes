import React, { useState, useRef } from "react";
import AdminNav from "../../Components/AdminNav/AdminNav";

const Adduser = () => {
    const alertBox = useRef(null)
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [messageAlert, setmessageAlert] = useState('')
  var passwordtest = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  var numerics = ["1","2","3","4","5","6","7","8","9","0"];

  const registerStaffHandler = () => {
      const formData = new FormData;
      if (fname == '' || lname == '' || email == '' || role == '') {
          alert("Please enter value for all feilds");
          return;
      } 

      if (password.length < 8 
        // || 
        // !passwordtest.test(password) || 
        // !password.includes("1")
        ) {
          alert("Make sure password is greater than 8");
          return;
      } 

      formData.append("s_fname", fname)
      formData.append("s_lname", lname)
      formData.append("s_email", email)
      formData.append("s_role", role)
      formData.append("s_password", password)
      formData.append("reg_by", "demo")

      fetch('http://192.168.1.158/cincinnatitimes/register_staff.php', {
          method: "POST",
          body: formData
      }).then((res) => res.json()).then((data) => {
          setmessageAlert(data)
          alertBox.current.scrollIntoView({behavior: 'smooth'})
      })
      

  }

  return (
    <>
      <AdminNav />

      <div className="adduser_container">
        <h1>Register New Cincy Times Staff</h1>

        <br />

        <div ref={alertBox} style={{display: messageAlert !== '' ? 'flex' : 'none'}} className="message_alert">
              <p>{messageAlert}</p>
              </div>

        <div className="register_form">
          <div className="fld">
            <p>Staff First Name</p>
            <input
              onChange={(e) => setfname(e.target.value)}
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="fld">
            <p>Staff Last Name</p>
            <input
              onChange={(e) => setlname(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="fld">
            <p>Staff Email</p>
            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="fld">
            <p>Staff Role</p>
            <select onChange={(e) => setrole(e.target.value)}>
              <option value="Editor">Editor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="fld">
            <p>Password</p>
            <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Enter Password" />
          </div>

          <button onClick={() => registerStaffHandler()} className="register_btn">Register Staff</button>
        </div>
      </div>
    </>
  );
};

export default Adduser;
