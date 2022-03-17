import React, {useState, useEffect} from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';
import { useCookies } from "react-cookie";
import { useIsAdminLoggedIn } from '../../lib/swr-hooks';
const AdminAuth = () => {
  const [email, setemail] = useState('')
  const [logPass, setlogPass] = useState('')
  const [messageAlert, setmessageAlert] = useState('')
  const [counter, setcounter] = useState(10)
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["staff"]);
  const {staffLoggedIn} = useIsAdminLoggedIn()

  useEffect(() => {
    if (staffLoggedIn) {
      router.push('/admin/home')
    }
  }, [staffLoggedIn])
  

  const logStaff = () => {
    if (email == '' && logPass == '') {
      alert("Please Enter Email And Password");
      return;
    }
    const formData = new FormData;
    formData.append('email', email);
    formData.append('password', logPass);

    fetch('http://192.168.1.158/cincinnatitimes/auth/staff_login.php', {
      method: 'POST',
      body: formData
    }).then((res) => res.json()).then((data) => {
      setmessageAlert(data[0])
      if (data[0] == 'AUTHENTICATED') {
       const myIntverl = setInterval(() => {
          if (counter <= 0) {
            clearInterval(myIntverl)
            var tomorrow = new Date();
            tomorrow.setDate(new Date().getDate() + 1);
            setCookie("staff", data[1], { path: "/", expires: tomorrow });
            router.push('/admin/home')
          }
          setcounter(counter--)
        }, 1000);
      }
    })
  }

  return <div className='admin_auth_conttt'>
      <br />
      <br />
      <br />
      <br />
      <div className="admin_auth_wrapperr">
        <h1>Admin Login</h1>
        <p>enter email and password</p>
          <br />
        <div style={{display: messageAlert !== '' ? 'flex' : 'none'}} className="message_alert">
              <p>{messageAlert == 'AUTHENTICATED' ? 'Logging you in ' : messageAlert} {counter}</p>
              </div>

        <div className="form">
            <input onChange={(e) => setemail(e.target.value)} type="email" name='email' placeholder='Enter cincytimes email' />
            <input onChange={(e) => setlogPass(e.target.value)} type="password" name="password" placeholder='Enter Password' />

<button onClick={() => logStaff()}>Login!</button>
        </div>
      </div>
  </div>;
};

export default AdminAuth;
