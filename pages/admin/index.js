import React from 'react';
import Link from 'next/dist/client/link';
const AdminAuth = () => {
  return <div className='admin_auth_conttt'>
      <br />
      <br />
      <br />
      <br />
      <div className="admin_auth_wrapperr">
        <h1>Admin Login</h1>
        <p>enter email and password</p>

        <div className="form">
            <input type="email" name='email' placeholder='Enter cincytimes email' />
            <input type="password" name="password" placeholder='Enter Password' />

            <Link className='login_btn' href={'/admin/home'}><button>Login!</button></Link>
        </div>
      </div>
  </div>;
};

export default AdminAuth;
