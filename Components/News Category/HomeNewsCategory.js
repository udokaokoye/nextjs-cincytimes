import React, { useEffect } from "react";
import LineBreaker from "../Line Breaker/LineBreaker";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
const HomeNewsCategory = ({ categoryName, posts }) => {
  const retCatg = (catg = []) => {
    if (catg.split(",")) {
      return catg.split(",")[0];
    } else {
      return 0;
    }
  };
  const getDate = (date) => {
    const is24Hours = moment().diff(moment(date), 'hours') >= 24;
    if (is24Hours) {
      return moment(date).format("Do. MMM, YYYY")
    } else {
      return moment(date).fromNow()
    }
    }
  
  return (
    <div className="newscategory_container">
      <div className="newscatg_bar">
        <h3>{categoryName}.</h3>
      </div>
      <LineBreaker />

      <div className="newscatg_wrapper">
        <div className="main_content">
          <Link
            href={`/${retCatg(posts[0].category)}/story/${posts[0].post_id}`}
            passHref
          >
            <a>
              <div className="media">
                <Image
                  src={`https://api.thecincinnatitimes.com/${posts[0].show_img}`}
                  alt=""
                  class="img"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="../../Assets/Logos/small logo.png"
                />
              </div>
            </a>
          </Link>

          <Link
            href={`/${retCatg(posts[0].category)}/story/${posts[0].post_id}`}
            passHref
          >
            <a>
              <div className="title">
                <h1>{posts[0].title}</h1>
              </div>
            </a>
          </Link>
        </div>
        <div className="side_content">
          <div className="left_cnt">
            <Link
              href={`/${retCatg(posts[1].category)}/story/${posts[1].post_id}`}
              passHref
            >
              <a>
                <div className="left_media">
                  <Image
                    src={`https://api.thecincinnatitimes.com/${posts[1].show_img}`}
                    alt=""
                    class="img"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="../../Assets/Logos/small logo.png"
                  />
                </div>
              </a>
            </Link>

            <Link
              href={`/${retCatg(posts[1].category)}/story/${posts[1].post_id}`}
              passHref
            >
              <a>
                <div className="left_title">
                  <h4>{posts[1].title}</h4>
                </div>
              </a>
            </Link>

            <div className="links_lst">
              <p>- {posts[2].title}</p>
              <LineBreaker />
              <p>- {posts[3].title}</p>
              <LineBreaker />
              <p>- {posts[4].title}</p>
            </div>
          </div>

          <div className="right_cnt">
            <li>More On {categoryName}</li>
            <div className="links_lst">
              <p>
                - John James announces run for Michigan congressional seat{" "}
                <br /> <span>6m ago</span>
              </p>
              <LineBreaker />
              <p>
                - John James announces run for Michigan congressional seat{" "}
                <br /> <span>6m ago</span>
              </p>
              <LineBreaker />
              <p>
                - John James announces run for Michigan congressional seat{" "}
                <br /> <span>6m ago</span>
              </p>
              <LineBreaker />
              <p>
                - John James announces run for Michigan congressional seat{" "}
                <br /> <span>6m ago</span>
              </p>
              <LineBreaker />
              <p>
                - John James announces run for Michigan congressional seat{" "}
                <br /> <span>6m ago</span>
              </p>
              <LineBreaker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCategory;
