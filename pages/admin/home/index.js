import {
  faClipboard,
  faEye,
  faForward,
  faHandPaper,
  faPaperclip,
  faPen,
  faPlus,
  faShare,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import AdminNav from "../../../Components/AdminNav/AdminNav";
import {GetStaff, useIsAdminLoggedIn} from '../../../lib/swr-hooks'
import { useRouter } from "next/dist/client/router";
const AdminHome = () => {
  const router  = useRouter()
  const {staffId, staffLoggedIn} = useIsAdminLoggedIn()
  const {staff, isLoad} = GetStaff(staffId)

  useEffect(() => {
    if (!staffLoggedIn) {
      router.push('/admin')
    }
  }, [])
  

  // useEffect(() => {
  //     alert(staff?.fname)
  // }, [isLoad, staffId])

  if (isLoad) {
    return (<h1>Loader</h1>)
  }
  

  return (
    <>
      <AdminNav />
      <div className="admin_container">
        <div className="admin_wrapper">
          <div className="admin_dashboard">
            <div className="profile_img">{staff?.fname[0]}</div>

            <div className="profile_info">{staff?.fname} {staff?.lname} <br /> <button>Logout</button></div>
          </div>

          <div className="quicklinks">
            <h1>Quick Link</h1>

            <div className="sec sec1">
              <h3>Update Live Links In Home Page</h3>
              <input type="checkbox" /> <span>Add 🔴 Live Link</span>
              <br />
              <div className="double_input">
                <input type="text" placeholder="Enter Live Link Title" />
                <input type="text" placeholder="Enter Live Link Post ID" />
              </div>
            </div>

            <div className="sec sec1">
              <h3>Update Hot Topics Bar</h3>
              
              <div className="double_input">
                <input type="text" placeholder="Enter Hot Topic Title" />
                <select>
                  <option value="">Select Topic Category</option>
                  <option value="">Entertainment</option>
                  <option value="">Sport</option>
                  <option value="">Health</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
