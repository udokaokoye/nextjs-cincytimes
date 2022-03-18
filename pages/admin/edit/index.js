import React, {useState, useEffect} from "react";
import AdminNav from "../../../Components/AdminNav/AdminNav";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faCopy, faPaste, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { GetAdminEditPosts } from "../../../lib/swr-hooks";
const EditNews = () => {
    const { adminPosts, isLoad } = GetAdminEditPosts();
    const [searchbar, setsearchbar] = useState('')
    const [searchResult, setsearchResult] = useState([])
    // let searchResult = [];

    const DeletePostHandeler = (pid) => {
        const formData = new FormData
        if (confirm("Are you sure you want to delete this post, this action cannot be undone")) {
            formData.append('post_id', pid)

            fetch('https://api.thecincinnatitimes.com/remove_post.php', {
                method: 'post',
                body: formData
            }).then((res) => res.json()).then((data) => {
                alert(data)
            })
        } else {
            return;
        }
      }

useEffect(() => {
  setsearchResult(adminPosts?.filter((pt) => pt.title.toLowerCase().includes(searchbar.toLowerCase())))
}, [searchbar, isLoad])

  return (
    <>
      <AdminNav />
      <div className="allpost_container">
        <div className="allpost_wrapper">
          <div className="allpost_search">
            <h1>Edit Posts</h1>

            <input onChange={(e) => setsearchbar(e.target.value)} type="text" placeholder="Search..." />
          </div>

          <div style={{display: searchbar == '' ? 'block' : 'none'}} className="allPosts">
            {!isLoad ? adminPosts?.map((post) => (
                <div key={post?.post_id} className="post">
                <Link href={"#"}>
                  <div className="media">
                  <img src={`https://api.thecincinnatitimes.com/${post.show_img}`} alt="asdasd" />
                  </div>
                </Link>
                <div className="title_summ">
                    <span style={{background: post.published == 'true' ? 'green' : 'orange'}} className="publish_status">{post.published == 'true' ? 'Published' : 'Saved'}</span>
                  <Link href={"#"} className="router_link">
                    <div className="title">
                      {post.title}
                    </div>
                  </Link>
  
                  <div className="summary">
                    {post.summary}
                  </div>
                  <div className="ft">
                    <p>{post.date_created}</p> <p>Levi Okoye</p>
                  </div>
  
                  <div className="edit_btns">
                     <Link href={`/admin/edit/${post.post_id}`}><button className="edit_btn"><FontAwesomeIcon icon={faPen} /> Edit</button></Link>
                      <button className="view_btn"> <FontAwesomeIcon icon={faArrowAltCircleRight} /> View</button>
                      <button onClick={() => DeletePostHandeler(post.post_id)} className="delete_btn"> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                      </div>
                </div>
              </div>
            )) : "Loading"}
          </div>

          <div style={{display: searchbar !== '' ? 'block' : 'none'}} className="allPosts">

            {searchResult?.length > 0 ?  searchResult?.map((post) => (
                <div key={post?.post_id} className="post">
                <Link href={"#"}>
                  <div className="media">
                  <img src={`https://api.thecincinnatitimes.com/${post.show_img}`} alt="asdasd" />
                  </div>
                </Link>
                <div className="title_summ">
                    <span style={{background: post.published == 'true' ? 'green' : 'orange'}} className="publish_status">{post.published == 'true' ? 'Published' : 'Saved'}</span>
                  <Link href={"#"} className="router_link">
                    <div className="title">
                      {post.title}
                    </div>
                  </Link>
  
                  <div className="summary">
                    {post.summary}
                  </div>
                  <div className="ft">
                    <p>{post.date_created}</p> <p>Levi Okoye</p>
                  </div>
  
                  <div className="edit_btns">
                     <Link href={`/admin/edit/${post.post_id}`}><button className="edit_btn"><FontAwesomeIcon icon={faPen} /> Edit</button></Link>
                      <button className="view_btn"> <FontAwesomeIcon icon={faArrowAltCircleRight} /> View</button>
                      <button onClick={() => DeletePostHandeler(post.post_id)} className="delete_btn"> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                      </div>
                </div>
              </div>
            )) : (
              <>
                          <br />
            <br />
            <br />
            <br />
            <p>No Post Found...</p>
              </>
            )}
            </div>
        </div>
      </div>
    </>
  );
};

export default EditNews;
