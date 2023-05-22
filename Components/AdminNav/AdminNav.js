import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';

import {GetStaff, useIsAdminLoggedIn} from '../../lib/swr-hooks'
const AdminNav = ({staffName}) => {
    const {staffId, staffLoggedIn} = useIsAdminLoggedIn()
    const {staff, isLoad} = GetStaff(staffId)


  return <div className='adminNav_container'>
      <div className="nv_top">
          <h1>The Cincinnati Times</h1>
          <button className='user_btn'> <FontAwesomeIcon icon={faUser} /> {staff?.fname}</button>
      </div>

      <div className="nv_links">
          <Link href={'/admin/home'} className='admNav_link'>Dashboard</Link>
          <Link href={'/admin/addpost'} className='admNav_link'>Add Post</Link>
          <Link href={'allposts'} className='admNav_link'>View All Post</Link>
          <Link href={'#'} className='admNav_link'>Pending Posts</Link>
          <Link href={'/admin/edit'} className='admNav_link'>Edit Post</Link>
          <Link href={'/admin/newscategories'} className='admNav_link'>News Categories</Link>
          <Link href={'/admin/adduser'} className='admNav_link'>Add User</Link>
      </div>
  </div>;
};

export default AdminNav;
