import Editor from "../../../Components/Editor";
import Head from "next/head";
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Script from "next/script";
import {
  faComment,
  faComments,
  faEnvelope,
  faFlag,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import GridCategory from "../../../Components/Grid Category/GridCategory";
import LineBreaker from "../../../Components/Line Breaker/LineBreaker";
import NewsCategorySection from "../../../Components/News Category Section/NewsCategorySection";
import {
  GetPostById,
  GetEditorById,
  useIsLoggedIn,
  GetUser,
  GetComments,
} from "../../../lib/swr-hooks";
import { mutate } from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderNav from "../../../Components/HeaderNav/HeaderNav";
import Image from "next/image";
import Loader from "../../../Components/Loader/Loader";
const NewsPage = ({postsData}) => {
  const router = useRouter();
  const { slug } = router.query;
  const post = postsData;
  const [showComments, setshowComments] = useState(false);
  const [showAddComment, setshowAddComment] = useState(false);
  const [commentContent, setcommentContent] = useState(true);
  const [commentOrder, setcommentOrder] = useState("Newest");
  const { loggedin, userId } = useIsLoggedIn();
  const { editor } = GetEditorById(post[0]?.editor_id);
  const { users } = GetUser(userId);
  let comments = GetComments(post[0]?.post_id, "ASC").comments;
  const history = "";
  // const getCommentUser = (userID) => {
  //   return GetUser(userID).users;
  // };
  const renderPost = post[0];

  const pictures = post[1];
  let newsBody = 'loading';
  const [editorLoaded, setEditorLoaded] = useState(false);

  const editorConfiguration = {
    toolbar: {
      items: ["heading", "italic", "blockquote", "bold", "bulletedList"],
      shouldNotGroupWhenFull: true,
    },
  };

  useEffect(() => {
    setEditorLoaded(true);
    // console.log(postsData)
    document.getElementById('news_text').innerHTML = (renderPost.content + "")
    .replace(
      "@IMG1",
      `<div class='content_media'>
      
      <Image
          src='https://api.thecincinnatitimes.com/${pictures[1]}'
          alt=""
          class="img"
          layout='fill'
          objectFit='contain'
          placeholder="blur"
          blurDataURL="../../../Assets/Logos/small logo.png"
        />
      <small class='media_description'>${
        renderPost?.media_captions?.split(",")[1]
      }</small></div>`
    )
    .replace(
      "@IMG2",
      `<div class='content_media'>
      <Image
          src='https://api.thecincinnatitimes.com/${pictures[2]}'
          alt=""
          class="img"
          layout='fill'
          objectFit='contain'
          placeholder="blur"
          blurDataURL="../../../Assets/Logos/small logo.png"
        />
      <small class='media_description'>${
        renderPost?.media_captions?.split(",")[2]
      }</small></div>`
    )
    .replace(
      "@IMG3",
      `<div class='content_media'>
      
      <Image
          src='https://api.thecincinnatitimes.com/${pictures[3]}'
          alt=""
          class="img"
          layout='fill'
          objectFit='contain'
          placeholder="blur"
          blurDataURL="../../../Assets/Logos/small logo.png"
        />
      
      <small class='media_description'>${
        renderPost?.media_captions?.split(",")[3]
      }</small></div>`
    )
    .replace(
      "@IMG4",
      `<div class='content_media'>
      
      <Image
          src='https://api.thecincinnatitimes.com/${pictures[4]}'
          alt=""
          class="img"
          layout='fill'
          objectFit='contain'
          placeholder="blur"
          blurDataURL="../../../Assets/Logos/small logo.png"
        />
      
      <small class='media_description'>${
        renderPost?.media_captions?.split(",")[4]
      }</small></div>`
    )
    .replace(
      "@VID",
      `<div class='media'>
      <h3>Watch Video Below</h3>
      <video width='100%' controls src='https://api.thecincinnatitimes.com/${
        renderPost?.video_path
      }' /> <small class='media_description'>${
        renderPost?.media_captions?.split(",")[4]
      }</small></div>`
    );
  }, []);

  const getCommentsHandler = () => {
    comments = GetComments(renderPost?.post_id, commentOrder ? "DESC" : "ASC");
  };

  const addComment = () => {
    const formData = new FormData();
    if (commentContent == "") {
      alert("Enter Comment");
      return;
    }

    formData.append("user_id", userId);
    formData.append("post_id", renderPost.post_id);
    formData.append("content", commentContent);

    fetch("https://api.thecincinnatitimes.com/add_comment.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
        setcommentContent("");
        mutate(
          `https://api.thecincinnatitimes.com/get/get_comments.php?post_id=${renderPost?.post_id}`
        );
      });
  };



    const CommentEditor = () => {
      return (
        <Editor
                      name={"Comment"}
                      onChange={(data) => {
                        setcommentContent(data);
                      }}
                      editorLoaded={editorLoaded}
                      editorConfiguration={editorConfiguration}
                    />
      )
    }



  // if (isLoad) {
  //   return <Loader />
  // } 

  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <title>{renderPost?.title}</title>
      {/* <meta name="keywords" content="titla, meta, nextjs" /> */}
      <meta name="descrition" content={renderPost?.summary} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={renderPost?.title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={`https://api.thecincinnatitimes.com/${pictures[0]}`}
      />
      <meta
        property="og:url"
        content={`https://leviokoye.online/category/story/${renderPost?.post_id}`}
      />


      {/* Non-Essential, But Recommended */}
      <meta property="og:description" content={renderPost?.summary} />
      <meta property="og:site_name" content="The Cincinnati Times." />
      <meta property="twitter:title" content={renderPost?.title} />
      <meta property="twitter:description" content={renderPost?.summary} />
      <meta property="twitter:site" content="https://leviokoye.online/" />
      <meta property="twitter:image" content={`https://api.thecincinnatitimes.com/${pictures[0]}`} />
      <meta name="twitter:image:alt" content={renderPost?.title} />
    </Head>
    <Script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
      strategy="beforeInteractive"
    />
    <Script
      sync
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0"
      nonce="cdzOg1Ie"
      strategy="beforeInteractive"
    />
    <HeaderNav />

    <div
      // onClick={() => alert(renderPost?.media_captions?.split(',')[0])}
      className="newsPage_container"
    >
      {/* {isLoad ? <Loader /> : ''} */}
      <div className="newsPage_wrapper">
        <h1 onClick={() => console.log(postsData[0].title)} className="news_title">{renderPost?.title}</h1>
        <p className="news_summary">{renderPost?.summary}</p>
        <LineBreaker />
        <div className="top_socialmedia">
          <div className="icn">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
        <LineBreaker />

        <div onClick={() => console.log(newsBody)} className="img_media media_1">
          <Image
            src={`https://api.thecincinnatitimes.com/${pictures[0]}`}
            alt=""
            className="img"
            layout="fill"
            objectFit="contain"
            // placeholder="blur"
            // blurDataURL="../../../Assets/Logos/small logo.png"
          />
          {/* <img className="img" src={`https://api.thecincinnatitimes.com/${pictures[0]}`} alt="" /> */}
        </div>
        <small className="media_description">
          {renderPost?.media_captions?.split(",")[0]}
        </small>

        <div className="author">
          <div className="auth_img">
            <img
              src={require("../../../Assets/Demo/me.jpg").default.src}
              alt=""
            />
          </div>
          <p className="auth_name">
            By {editor?.fname} {editor?.lname}
          </p>
        </div>
        {/* !MIGHT ADD TIME TO DATE OUTPUT */}
        <div className="date_time">
          {moment(renderPost?.date_created).format("MMM DD. YYYY")}
        </div>


            <p
            // dangerouslySetInnerHTML={{
            //   __html: '<p>HEYY</p>',
            // }}
            className="news_text"
            id='news_text'
          ></p>
          




        {/* <p>{post[0].content}</p> */}

        

        <div className="comments_socials">
          <div className="btn">
            <button
              disabled={renderPost?.restrict_comments == "true" && !loggedin}
              style={{
                background:
                  renderPost?.restrict_comments == "true" && !loggedin
                    ? "grey"
                    : "purple",
              }}
              onClick={() => setshowComments(!showComments)}
            >
              Read {comments?.length} Comments
            </button>
          </div>
          <div className="btm_socialmedia">
            <div className="icn">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faShare} />
            </div>
          </div>
        </div>
        <br />
        <Link passHref href="/auth">
          <span
            style={{
              fontSize: "12px",
              fontStyle: "italic",
              display: loggedin ? "none" : "block",
              color: "purple",
              fontWeight: "bold",
            }}
          >
            Login / Register to view comments
          </span>
        </Link>

        <div
          style={{ display: showComments ? "block" : "none" }}
          className="news_comments"
        >
          <div className="add_comments">
            <p className="comments_intro">Join the conversation</p>

            <div className="comment_form">
              <div className="comment_form_bar">
                <div
                  onClick={() => {
                    renderPost?.comments == "true"
                      ? setshowAddComment(!showAddComment)
                      : alert("Comments Are Not Allowed On This Post");
                  }}
                  className="bar_content"
                >
                  Write A Comment
                </div>
                <div className="white_space"></div>
              </div>

              <div
                style={{ display: showAddComment ? "block" : "none" }}
                className="comment_form_main"
              >
                <div className="comment_textField">
                <Editor
                    name={"Comment"}
                    onChange={(data) => {
                      setcommentContent(data);
                    }}
                    editorLoaded={editorLoaded}
                    editorConfiguration={editorConfiguration}
                  />
                </div>

                <button
                  onClick={() => {
                    loggedin ? addComment() : router.push("/auth");
                  }}
                  className="add_comment_btn"
                >
                  {loggedin
                    ? "Add Comment"
                    : "Sign in and join the conversation"}
                </button>
              </div>
            </div>
          </div>

          <p className="comments_intro">
            Read Comments <span>{comments?.length}</span>
          </p>

          <div className="comment_bar">
            <div className="comment_bar_wrapper">
              <span>All</span>
              <span>Cincy Times Replies</span>
              <span>Readers Picks</span>
            </div>

            <div className="sort_input">
              <span>
                Sort By:{" "}
                <select
                  onChange={(e) => {
                    setcommentOrder(!commentOrder);
                  }}
                >
                  {" "}
                  <option value="Newest"> Newest</option>{" "}
                  <option value="Oldest"> Oldest</option>
                </select>
              </span>
            </div>
          </div>

          <div className="comment_content_wrapper">
            {comments?.map((comment, i) => (
              <React.Fragment key={i}>
                <div key={Math.random()} className="comment_content">
                  <div className="profile_img">{comment.u_fname[0]}</div>
                  <div className="commnent_details">
                    <h3 className="user_name">
                      {comment.u_fname + " " + comment.u_lname}
                    </h3>
                    <div className="location_date">
                      <span>Cincinnati | </span>{" "}
                      <span>
                        {" "}
                        {moment(comment?.date).format("MMM DD. YYYY") +
                          " - " +
                          moment(comment.date).format("h:mm: a")}
                      </span>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: comment.cm_content,
                      }}
                      className="comment_txt"
                    ></div>

                    <div className="comment_footer">
                      <div className="rec_share">
                        {" "}
                        <span>4 Recommended</span> | <span>Share</span>
                      </div>
                      <div className="flag" title="Flag Comment">
                        <span>
                          <FontAwesomeIcon icon={faFlag} />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <LineBreaker />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <GridCategory />
      <br />
      <LineBreaker mode={"thick"} />
      <br />
      <NewsCategorySection />
    </div>
  </>
  );
};

export async function getServerSideProps({params}) {
  const postsData = await fetch(`https://api.thecincinnatitimes.com/GET/get_post.php?post_id=${params.slug}`).then((res) => res.json())
    return {
      props: {
        postsData
      }
    }
}

// export async function getStaticProps() {
//   const postsData = await fetch(`https://api.thecincinnatitimes.com/GET/get_post.php?post_id=622fcfce0e6ef`).then((res) => res.json())
//   return {
//     props: {
//       postsData
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       '/[category]/story/[slug]',
//       // Object variant:
//       // { params: { slug: 'second-post', category: 'test' } },
//     ],
//     fallback: true,
//   }
// }



export default NewsPage;
