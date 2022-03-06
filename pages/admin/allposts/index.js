import React, { useEffect } from "react";
import Link from "next/dist/client/link";
import AdminNav from "../../../Components/AdminNav/AdminNav";
import { GetAdminEditPosts } from "../../../lib/swr-hooks";
const AllPost = () => {
  const { adminPosts, isLoad } = GetAdminEditPosts();
  let allposts = [];
  useEffect(() => {
    allposts = adminPosts;
  }, [isLoad]);

  return (
    <>
      <AdminNav />
      <div className="allpost_container">
        <div className="allpost_wrapper">
          <div className="allpost_search">
            <h1>All Posts</h1>

            <input type="text" placeholder="Search..." />
          </div>

          <div className="allPosts">
            {adminPosts?.map((post) => (
              <div key={post?.post_id} className="post">
                <Link href={"#"}>
                  <div className="media">
                    </div>
                </Link>
                <Link href={"#"} className="router_link">
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    dolore velit iste?
                  </div>
                </Link>
                <div className="ft">
                  <p>22-01-2022 - 12:00pm</p> <p>Levi Okoye</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
