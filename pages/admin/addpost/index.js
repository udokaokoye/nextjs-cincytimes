import React, { useEffect, useState, useRef } from "react";
import AdminNav from "../../../Components/AdminNav/AdminNav";
import Editor from "../../../Components/Editor";
import {GetCategories} from '../../../lib/swr-hooks'
const AddPost = () => {
  const alertBox = useRef(null)
  const [post_title, setpost_title] = useState("");
  const [post_category, setpost_category] = useState("");
  const [postCategories, setpostCategories] = useState([]);
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
  const [messageAlert, setmessageAlert] = useState('')
  const { categories } = GetCategories()

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const editorConfiguration = {
    toolbar: {
      shouldNotGroupWhenFull: true,
    },
    mediaEmbed: {
      previewsInData: true
  }
  };

  useEffect(() => {}, []);

  const verfiyPublishFields = () => {
    if (
      post_title == "" ||
      postCategories.length <=0 ||
      post_summary == "" ||
      maincontent == ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const publishPostHandler = (publishStatus) => {
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
      formData.append("media_1", media_1[0]);
    } else {
      alert(
        "At Least 2 Images must be added including cover image - (note they must be in order of file inputs)"
      );
      return;
    }

    if (media_2[0] != null) {
      if (caption_media_2 == "") {
        alert("Enter Caption For Media 2");
        return;
      }
      formData.append("media_2", media_2[0]);
    } else {
      alert(
        "At Least 2 Images must be added including cover image - (note they must be in order of file inputs)"
      );
      return;
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

    if (addVideo && videos[0] != null) {
      formData.append("videos", videos[0]);
    } else if (addVideo) {
      alert("Please Select Video File");
      return;
    }

    // !SET TO ACTUAL EDITOR ID
    formData.append("editor_id", "demo");
    formData.append("category", postCategories);
    formData.append("title", post_title);
    formData.append("summary", post_summary);
    formData.append("slug", Math.random());
    formData.append("content", maincontent);
    formData.append("video", addVideo);
    formData.append("allow_comments", !disable_comments);
    formData.append("restrict_comments", restrict_comments);
    formData.append("allow_votes", allow_votes);
    formData.append("trending", trending);
    formData.append("top_story", top_story);
    formData.append("published", publishStatus);
    if (caption_media_1.includes(',') || caption_media_2.includes(',') || caption_media_3.includes(',') || caption_media_4.includes(',') || caption_media_5.includes(',')) {
      alert("Please make sure all caption DOES NOT include a ',' | replace commas with '-'")
      return;
    }
    formData.append("captions", [caption_media_1, caption_media_2, caption_media_3, caption_media_4, caption_media_5] )
    // formData.append("caption_1", caption_media_1);
    // formData.append("caption_2", caption_media_2);
    // formData.append("caption_3", caption_media_3);
    // formData.append("caption_4", caption_media_4);
    // formData.append("caption_5", caption_media_5);

    fetch("https://api.thecincinnatitimes.com/add_post.php", {
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
    <div  className="add_post_container">
      <div className="add_post_wrapper">
        <h1 onClick={() => console.log(postCategories)} className="add_post_intro">Add New Post</h1>

            <div ref={alertBox} style={{display: messageAlert !== '' ? 'flex' : 'none'}} className="message_alert">
              <p>{messageAlert}</p>
              </div>
        <div className="form">
          <h3>Post Title *</h3>
          <input
            onChange={(e) => setpost_title(e.target.value)}
            type="text"
            placeholder="Enter Post Title"
          />
          <h3>Post Category *</h3>
          <div className="category_checkbox">
            {categories?.map((catg) => (
                <div className="chk_box" key={catg.category_name}>
                <input type="checkbox" checked={postCategories.includes(catg.category_name)} onChange={() => {
                  postCategories.includes(catg.category_name) ? setpostCategories(postCategories.filter(catg_nm => catg_nm !== catg.category_name)) : setpostCategories([...postCategories, catg.category_name])}
                  
                  } />  {catg.category_name}
                </div>
              ))}

<div className="chk_box" key={'article'}>
                <input type="checkbox" checked={postCategories.includes("Article")} onChange={() => {
                  postCategories.includes("Article") ? setpostCategories(postCategories.filter(catg_nm => catg_nm !== "Article")) : setpostCategories([...postCategories, "Article"])}
                  
                  } />  {"Article"}
                </div>
            </div>
          <h3>Post Summary *</h3>
          <textarea
            onChange={(e) => setpost_summary(e.target.value)}
            placeholder="Enter Post Summary"
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
            />
          </div>
          <div className="field_group">
            <div className="file_inpt">
              <input id="media_1" type="file" /> <span>Post Cover Image *</span>
              <input
                type="text"
                onChange={(e) => setcaption_media_1(e.target.value)}
                placeholder="Enter Image Caption"
              />
            </div>
            <div className="file_inpt">
              <input id="media_2" type="file" />
              <span>Media 2 *</span>
              <input
                type="text"
                onChange={(e) => setcaption_media_2(e.target.value)}
                placeholder="Enter Image Caption"
              />
            </div>
            <div className="file_inpt">
              <input id="media_3" type="file" />
              <input
                type="text"
                onChange={(e) => setcaption_media_3(e.target.value)}
                placeholder="Enter Image Caption"
              />
            </div>
            <div className="file_inpt">
              <input id="media_4" type="file" />
              <input
                type="text"
                onChange={(e) => setcaption_media_4(e.target.value)}
                placeholder="Enter Image Caption"
              />
            </div>
            <div className="file_inpt">
              <input id="media_5" type="file" />
              <input
                type="text"
                onChange={(e) => setcaption_media_5(e.target.value)}
                placeholder="Enter Image Caption"
              />
            </div>
          </div>
          <h3>Video Option</h3>
          <input
            checked={addVideo}
            onChange={(e) => setaddVideo(!addVideo)}
            type="checkbox"
            name=""
            id=""
          />{" "}
          <span>Add video to post</span>
          <input
            id="videos"
            type="file"
            style={{ display: addVideo ? "block" : "none" }}
          />
          <br />
          <br />
          <div className="other_option">
            <h3>Other Post Options</h3>
            <input
              type="checkbox"
              checked={disable_comments}
              onChange={(e) => setdisable_comments(!disable_comments)}
            />{" "}
            <span>Disable Comments</span>
            <br />
            <input
              type="checkbox"
              checked={schedule_post}
              onChange={() => setschedule_post(!schedule_post)}
            />{" "}
            <span>Schedule Post</span>
            <br />
            <input
              type="checkbox"
              checked={restrict_comments}
              onChange={(e) => setrestrict_comments(!restrict_comments)}
            />{" "}
            <span>Restrict Comments To Signed In Users</span>
            <br />
            <input
              type="checkbox"
              checked={allow_votes}
              onChange={(e) => setallow_votes(!allow_votes)}
            />{" "}
            <span>Allow Readers Votes</span>
            <br />
            <input
              type="checkbox"
              checked={trending}
              onChange={(e) => settrending(!trending)}
            />{" "}
            <span>
              🔥🔥 <b>Trending</b>
            </span>
            <br />
            <input
              type="checkbox"
              checked={top_story}
              onChange={(e) => settop_story(!top_story)}
            />{" "}
            <span>
              📈 📈 <b>Top Stories</b>
            </span>
          </div>
          <div className="add_posts_btn">
            <button
              onClick={() => publishPostHandler(true)}
              className="publish_btn"
            >
              🚀 Publish
            </button>
            <button
              onClick={() => publishPostHandler(false)}
              className="save_btn"
            >
              💾 Save
            </button>
            <button
              onClick={() => publishPostHandler(false)}
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

export default AddPost;
