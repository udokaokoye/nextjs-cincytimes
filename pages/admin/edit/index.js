import React from "react";
import AdminNav from "../../../Components/AdminNav/AdminNav";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faCopy, faPaste, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { GetAdminEditPosts } from "../../../lib/swr-hooks";
const EditNews = () => {
    const { adminPosts, isLoad } = GetAdminEditPosts();

    const DeletePostHandeler = (pid) => {
        const formData = new FormData
        if (confirm("Are you sure you want to delete this post, this action cannot be undone")) {
            formData.append('post_id', pid)

            fetch('http://192.168.1.158/cincinnatitimes/remove_post.php', {
                method: 'post',
                body: formData
            }).then((res) => res.json()).then((data) => {
                alert(data)
            })
        } else {
            return;
        }
      }
  return (
    <>
      <AdminNav />
      <div className="allpost_container">
        <div className="allpost_wrapper">
          <div className="allpost_search">
            <h1>Edit Posts</h1>

            <input type="text" placeholder="Search..." />
          </div>

          <div className="allPosts">
            {!isLoad ? adminPosts?.map((post) => (
                <div key={post?.post_id} className="post">
                <Link href={"#"}>
                  <div className="media">
                  <img src={`http://192.168.1.158/cincinnatitimes/${post.show_img}`} alt="asdasd" />
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
        </div>
      </div>
    </>
  );
};

export default EditNews;
