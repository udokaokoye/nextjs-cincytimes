import React, { useEffect, useState, useRef } from "react";
import AdminNav from "../../../Components/AdminNav/AdminNav";
import Editor from "../../../Components/Editor";
import { GetCategories, GetAdminEditPosts } from "../../../lib/swr-hooks";

import { useRouter } from "next/router";
const EditPost = () => {
  const alertBox = useRef(null)
  const [post_title, setpost_title] = useState("");
  const [post_category, setpost_category] = useState("");
  const [post_summary, setpost_summary] = useState("");
  const [maincontent, setmaincontent] = useState("");
  const [caption_media_1, setcaption_media_1] = useState("");
  const [caption_media_2, setcaption_media_2] = useState("");
  const [caption_media_3, setcaption_media_3] = useState("");
  const [caption_media_4, setcaption_media_4] = useState("");
  const [caption_media_5, setcaption_media_5] = useState("");
  const [addVideo, setaddVideo] = useState(false);
  const [caption_media_video, setcaption_media_video] = useState("");
  const [disable_comments, setdisable_comments] = useState(false);
  const [schedule_post, setschedule_post] = useState(false);
  const [restrict_comments, setrestrict_comments] = useState(true);
  const [allow_votes, setallow_votes] = useState(true);
  const [trending, settrending] = useState(false);
  const [top_story, settop_story] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [published, setpublished] = useState(false);
  const [editVideo, seteditVideo] = useState(false)
  const { categories } = GetCategories();
  const router = useRouter();
  const { postid } = router.query;
  const { adminPosts, isLoad } = GetAdminEditPosts(postid);
  const allAdminPost = isLoad ? {} : adminPosts[0];
  const pictures = isLoad ? {} : adminPosts[1];
  const [messageAlert, setmessageAlert] = useState('')
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const editorConfiguration = {
    toolbar: {
      // items: ["heading", "italic", "bold", "bulletedList"],
      shouldNotGroupWhenFull: true,
    },
    mediaEmbed: {
      previewsInData: true
  }
  };

  useEffect(() => {
    setpost_title(allAdminPost?.title);
    setpost_category(allAdminPost?.category?.split(","));
    setpost_summary(allAdminPost?.summary);
    setmaincontent(allAdminPost?.content);
    setcaption_media_1(allAdminPost?.media_captions?.split(',')[0]);
    setcaption_media_2(allAdminPost?.media_captions?.split(',')[1]);
    setcaption_media_3(allAdminPost?.media_captions?.split(',')[2]);
    setcaption_media_4(allAdminPost?.media_captions?.split(',')[3]);
    setcaption_media_5(allAdminPost?.media_captions?.split(',')[4]);
    setaddVideo(!isLoad ? allAdminPost?.video === "true" : false);
    setdisable_comments(!isLoad ? !allAdminPost?.comments === "true" : false);
    setschedule_post(!isLoad ? allAdminPost?.comments === "true" : false);
    setrestrict_comments(
      !isLoad ? allAdminPost?.restrict_comments === "true" : false
    );
    setallow_votes(!isLoad ? allAdminPost?.allow_votes === "true" : false);
    settrending(!isLoad ? allAdminPost?.trending === "true" : false);
    settop_story(!isLoad ? allAdminPost?.top_story === "true" : false);
    setpublished(!isLoad ? allAdminPost?.published === "true" : false);
  }, [allAdminPost]);

  useEffect(() => {
    document.getElementById("videos").files = null
  }, [editVideo])
  

  const verfiyPublishFields = () => {
    if (
      post_title == "" ||
      post_category.length <= 0 ||
      post_summary == "" ||
      maincontent == ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const EditPostHandler = (publishStatus) => {
    const formData = new FormData();
    if (!verfiyPublishFields()) {
      alert("Make Sure All Fields With '*' are filled");
      return;
    }
    var media_1 = document.getElementById("media_1").files;
    var media_2 = document.getElementById("media_2").files;
    var media_3 = document.getElementById("media_3").files;
    var media_4 = document.getElementById("media_4").files;
    var media_5 = document.getElementById("media_5").files;
    var videos = document.getElementById("videos").files;

    if (media_1[0] != null) {
      if (caption_media_1 == "") {
        alert("Enter Caption For Media 1");
        return;
      }

      if(media_2[0] == null) {
        alert(
          "At Least 2 Images must be added including cover image - (note they must be in order of file inputs)"
        );
        return;
      }
      formData.append("media_1", media_1[0]);
    }

    if (media_2[0] != null) {
      if (caption_media_2 == "") {
        alert("Enter Caption For Media 2");
        return;
      }
      formData.append("media_2", media_2[0]);

    }


    if (media_3[0] != null) {
      if (caption_media_3 == "") {
        alert("Enter Caption For Media 3");
        return;
      }
      formData.append("media_3", media_3[0]);
    }

    if (media_4[0] != null) {
      if (caption_media_4 == "") {
        alert("Enter Caption For Media 4");
        return;
      }
      formData.append("media_4", media_4[0]);
    }

    if (media_5[0] != null) {
      if (caption_media_5 == "") {
        alert("Enter Caption For Media 5");
        return;
      }
      formData.append("media_5", media_5[0]);
    }

    if (editVideo && videos[0] != null) {
      formData.append("videos", videos[0]);
    } else if (editVideo && allAdminPost?.video_path !== '') {
      formData.append("remove_video", true)
    } else if(editVideo) {
      alert("Please select a video")
      return;
    }


    // !SET TO ACTUAL EDITOR ID
    // formData.append("editor_id", "demo");
    formData.append("category", post_category);
    formData.append("title", post_title);
    formData.append("summary", post_summary);
    // formData.append("slug", Math.random());
    formData.append("content", maincontent);
    formData.append("video", addVideo);
    formData.append("allow_comments", !disable_comments);
    formData.append("restrict_comments", restrict_comments);
    formData.append("allow_votes", allow_votes);
    formData.append("trending", trending);
    formData.append("top_story", top_story);
    formData.append("published", publishStatus);
    formData.append("captions", [caption_media_1, caption_media_2, caption_media_3, caption_media_4, caption_media_5] )
    formData.append("old_pics1", pictures[0])
    formData.append("old_pics2", pictures[1])
    formData.append("old_pics3", pictures[2])
    formData.append("old_pics4", pictures[3])
    formData.append("old_pics5", pictures[4])
    formData.append("id", allAdminPost.post_id)
    formData.append("edit_video", editVideo);
    formData.append("allOldPictures", allAdminPost.pictures)
    formData.append("oldVideo", allAdminPost?.video_path)
    formData.append('show_img', allAdminPost?.show_img)
    // formData.append("caption_1", caption_media_1);
    // formData.append("caption_2", caption_media_2);
    // formData.append("caption_3", caption_media_3);
    // formData.append("caption_4", caption_media_4);
    // formData.append("caption_5", caption_media_5);

    fetch("https://api.thecincinnatitimes.com/EDIT/edit_post.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setmessageAlert(data);
        alertBox.current.scrollIntoView({behavior: 'smooth'})
      });
  };



  return (
    <>
      <AdminNav />
      <div className="add_post_container">
        <div className="add_post_wrapper">
          <h1 className="add_post_intro">Edit Post - {postid}</h1>

          <div ref={alertBox} style={{display: messageAlert !== '' ? 'flex' : 'none'}} className="message_alert">
              <p>{messageAlert}</p>
              </div>

          <div className="form">
            <h3>Post Title *</h3>
            <input
              onChange={(e) => setpost_title(e.target.value)}
              type="text"
              placeholder="Enter Post Title"
              value={post_title}
            />
            <h3>Post Category *</h3>
            <div className="category_checkbox">
              {categories?.map((catg) => (
                <div className="chk_box" key={catg.category_name}>
                  <input
                    type="checkbox"
                    checked={post_category?.includes(catg.category_name)}
                    onChange={() => {
                      post_category?.includes(catg.category_name) ? setpost_category(post_category.filter(catg_nm => catg_nm !== catg.category_name)) : setpost_category([...post_category, catg.category_name])}
                      
                      }
                  />{" "}
                  {catg.category_name}
                </div>
              ))}
            </div>
            <h3>Post Summary *</h3>
            <textarea
              onChange={(e) => setpost_summary(e.target.value)}
              placeholder="Enter Post Summary"
              value={post_summary}
            ></textarea>
            <div className="content_input">
              <h3>Post Content *</h3>
              <Editor
                name={"Add Post"}
                onChange={(data) => {
                  setmaincontent(data);
                }}
                editorLoaded={editorLoaded}
                editorConfiguration={editorConfiguration}
                data={maincontent}
              />
            </div>
            <h3>Post Images</h3>
            <br />
            <div className="preview_images">
              {pictures?.length > 0 ? pictures.map((pic) => (
                <div key={pic} className="img">
                <img src={`https://api.thecincinnatitimes.com/${pic}`} alt="" />
                </div>
              )) : ''}
              </div>

              <h3>Add Images</h3>
              <br />
            <div className="field_group">
              <div className="file_inpt">
                <input id="media_1" type="file" />{" "}
                <span>Post Cover Image *</span>
                <input
                  type="text"
                  onChange={(e) => setcaption_media_1(e.target.value)}
                  placeholder="Enter Image Caption"
                  value={caption_media_1}
                />
              </div>
              <div className="file_inpt">
                <input id="media_2" type="file" />
                <span>Media 2 *</span>
                <input
                  type="text"
                  onChange={(e) => setcaption_media_2(e.target.value)}
                  placeholder="Enter Image Caption"
                  value={caption_media_2}
                />
              </div>
              <div className="file_inpt">
                <input id="media_3" type="file" />
                <input
                  type="text"
                  onChange={(e) => setcaption_media_3(e.target.value)}
                  placeholder="Enter Image Caption"
                  value={caption_media_3}
                />
              </div>
              <div className="file_inpt">
                <input id="media_4" type="file" />
                <input
                  type="text"
                  onChange={(e) => setcaption_media_4(e.target.value)}
                  placeholder="Enter Image Caption"
                  value={caption_media_4}
                />
              </div>
              <div className="file_inpt">
                <input id="media_5" type="file" />
                <input
                  type="text"
                  onChange={(e) => setcaption_media_5(e.target.value)}
                  placeholder="Enter Image Caption"
                  value={caption_media_5}
                />
              </div>
            </div>
            <h3>Video Option</h3>

            <h3>-Current Video</h3>

            {allAdminPost?.video_path !== '' ? (
              <video className="vid" controls src={`http://192.168.1.158/cincinnatitimes${
                allAdminPost?.video_path
              }`} />
            ) : ''} <br />
            <input
              checked={editVideo}
              onChange={(e) => seteditVideo(!editVideo)}
              type="checkbox"

            />{" "}
            <span>Edit Video</span>
            <input
              id="videos"
              type="file"
              style={{ display: editVideo ? "block" : "none" }}
            />
            <br />
            <br />
            <div className="other_option">
              <h3>Other Post Options</h3>
              <input
                type="checkbox"
                checked={disable_comments}
                value={disable_comments}
                onChange={(e) => setdisable_comments(!disable_comments)}
              />{" "}
              <span>Disable Comments</span>
              <br />
              <input
                type="checkbox"
                checked={schedule_post}
                value={schedule_post}
                onChange={() => setschedule_post(!schedule_post)}
              />{" "}
              <span>Schedule Post</span>
              <br />
              <input
                type="checkbox"
                checked={restrict_comments}
                value={restrict_comments}
                onChange={(e) => setrestrict_comments(!restrict_comments)}
              />{" "}
              <span>Restrict Comments To Signed In Users</span>
              <br />
              <input
                type="checkbox"
                checked={allow_votes}
                value={allow_votes}
                onChange={(e) => setallow_votes(!allow_votes)}
              />{" "}
              <span>Allow Readers Votes</span>
              <br />
              <input
                type="checkbox"
                checked={trending}
                value={trending}
                onChange={(e) => settrending(!trending)}
              />{" "}
              <span>
                🔥🔥 <b>Trending</b>
              </span>
              <br />
              <input
                type="checkbox"
                checked={top_story}
                value={top_story}
                onChange={(e) => settop_story(!top_story)}
              />{" "}
              <span>
                📈 📈 <b>Top Stories</b>
              </span>
            </div>
            <div className="add_posts_btn">
              <button
                onClick={() => EditPostHandler(true)}
                className="publish_btn"
              >
                🚀 Edit
              </button>
              <button
                onClick={() => EditPostHandler(false)}
                className="save_btn"
              >
                💾 Save
              </button>
              <button
                onClick={() => EditPostHandler(false)}
                className="preview_btn"
              >
                🔎 Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
