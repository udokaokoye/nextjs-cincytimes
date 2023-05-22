import React, {useEffect} from "react";
import LineBreaker from "../Line Breaker/LineBreaker";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
const TopStories = ({ posts, recentTrend }) => {
  const retCatg = (catg = []) => {
    if (catg.split(",")) {
      return catg.split(",")[0];
    } else {
      return 0;
    }
  };
  const post2 = recentTrend;
  const getDate = (date) => {
    const is24Hours = moment().diff(moment(date), 'hours') >= 24;
    if (is24Hours) {
      return moment(date).format("Do. MMM, YYYY")
    } else {
      return moment(date).fromNow()
    }
    }
  
  return (
    <div className="topstories_container">
      <div className="topstor_bar">
        <h3 onClick={() => console.log(posts)}>Top Stories.</h3>
      </div>
      <LineBreaker />

      <div className="topstor_content_wrapper">
        <div className="topstor_side_content">
          <div className="side_content_w_related">
            <Link
              href={`/${retCatg(posts[3].category)}/story/${posts[3].post_id}`}
              passHref
            >
              <a>
                <h1>{posts[3].title}</h1>
              </a>
            </Link>

            <div className="side_content_related">
              <p>Related</p>
              <p>
                L.A. County sees delays in ambulance response to 911 calls as
                COVID-19 taxes hospitals
              </p>
            </div>
          </div>
          <LineBreaker />
          <div className="side_content_w_img">
            <Link
              href={`/${retCatg(posts[2].category)}/story/${posts[2].post_id}`}
              passHref
            >
              <a>
                <div className="side_content_media">
                  {/* <img
                src={require("../../Assets/Demo/Henry-Cuellar-Kamala-Harris.jpg").default.src}
                alt=""
              /> */}
                  <Image
                    src={`https://api.thecincinnatitimes.com/${posts[2].show_img}`}
                    alt=""
                    class="img"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="../../Assets/Logos/small logo.png"
                  />
                </div>
                <h3>{posts[2].title}</h3>
              </a>
            </Link>
          </div>
          <LineBreaker />
          <div className="side_content_w_related">
            <Link
              href={`/${retCatg(posts[4].category)}/story/${posts[4].post_id}`}
              passHref
            >
              <a>
                <h1>{posts[4].title}</h1>
              </a>
            </Link>

            <div className="side_content_related">
              <p>Related</p>
              <p>
                L.A. County sees delays in ambulance response to 911 calls as
                COVID-19 taxes hospitals
              </p>
            </div>
          </div>

          <div className="ads_left">
            <div className="ads_sign"></div>
          </div>
        </div>
        <div className="topstor_main_content">
          <div className="topstor_section_1">
            <div className="side_left">
              <div className="side_left_media">
                {/* <img
                  src={require("../../Assets/Demo/7fee440bf94f8b7b28950425ea11e562.jpg").default.src}
                  alt="asf"
                /> */}

                <Link
                  href={`/${retCatg(posts[0].category)}/story/${
                    posts[0].post_id
                  }`}
                  passHref
                >
                  <a>
                    <Image
                      src={`https://api.thecincinnatitimes.com/${posts[0].show_img}`}
                      alt=""
                      class="img"
                      layout="fill"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL="../../Assets/Logos/small logo.png"
                    />
                  </a>
                </Link>
              </div>

              <Link
                href={`/${retCatg(posts[0].category)}/story/${
                  posts[0].post_id
                }`}
                passHref
              >
                <a>
                  <h2 className="side_left_content_title">{posts[0].title}</h2>

                  <p className="side_left_content_description">{posts[0].summary}</p>
                </a>
              </Link>
              <span className="date_category"> <span className="news_date">- {getDate(posts[0].date_created)}</span> <span className="news_category">{retCatg(posts[0].category)}</span></span>

              <div className="side_left_content">
                <div className="side_left_catgr_1">
                  <p className="catgr_title">Opinion</p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                </div>
                <div className="side_left_catgr_2">
                  <p className="catgr_title">Politics</p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                </div>
              </div>
            </div>

            <div className="side_right">
              <div className="side_right_content">
                <h1>
                  {posts[5].title}
                </h1>
                <p>
                  {posts[5].summary}
                </p>
                <span className="date_category"> <span className="news_date">{getDate(posts[5].date_created)}</span> <span className="news_category">{retCatg(posts[5].category)}</span></span>
              </div>
              <LineBreaker mode={"thin"} />
              <div className="side_right_content">
              <h1>
                  {posts[6].title}
                </h1>
                <p>
                  {posts[6].summary}
                </p>
                <span className="date_category"> <span className="news_date">{getDate(posts[6].date_created)}</span> <span className="news_category">{retCatg(posts[6].category)}</span></span>
              </div>
              <LineBreaker mode={"thin"} />

              <div className="side_right_content">
              <h1>
                  {posts[7].title}
                </h1>
                <p>
                  {posts[7].summary}
                </p>
                <span className="date_category"> <span className="news_date">{getDate(posts[7].date_created)}</span> <span className="news_category">{retCatg(posts[7].category)}</span></span>
              </div>
            </div>



            <div className="side_right_mobile">
              <div className="side_right_content">
              <Link
              href={`/${retCatg(posts[3].category)}/story/${posts[3].post_id}`}
              passHref
            >
              <a>
                <h1>{posts[3].title}</h1>
              </a>
            </Link>
            <Link
              href={`/${retCatg(posts[3].category)}/story/${posts[3].post_id}`}
              passHref
            >
              <a>
                <p>{posts[3].summary}</p>
              </a>
            </Link>
            <span className="date_category"> <span className="news_date">{getDate(posts[3].date_created)}</span> <span className="news_category">{retCatg(posts[3].category)}</span></span>
              </div>
              <LineBreaker mode={"thin"} />
              <div className="side_right_content">
              <Link
              href={`/${retCatg(posts[2].category)}/story/${posts[2].post_id}`}
              passHref
            >
              <a>
                <h1>{posts[2].title}</h1>
              </a>
            </Link>
            <Link
              href={`/${retCatg(posts[2].category)}/story/${posts[2].post_id}`}
              passHref
            >
              <a>
                <p>{posts[2].summary}</p>
              </a>
            </Link>
            <span className="date_category"> <span className="news_date">{getDate(posts[2].date_created)}</span> <span className="news_category">{retCatg(posts[2].category)}</span></span>
              </div>
              <LineBreaker mode={"thin"} />

              <div className="side_right_content">
              <Link
              href={`/${retCatg(posts[4].category)}/story/${posts[4].post_id}`}
              passHref
            >
              <a>
                <h1>{posts[4].title}</h1>
              </a>
            </Link>
            <Link
              href={`/${retCatg(posts[4].category)}/story/${posts[4].post_id}`}
              passHref
            >
              <a>
                <p>{posts[4].summary}</p>
              </a>
            </Link>
            <span className="date_category"> <span className="news_date">{getDate(posts[4].date_created)}</span> <span className="news_category">{retCatg(posts[4].category)}</span></span>
              </div>
            </div>
          </div>
          <LineBreaker width="97" />
          <div className="topstor_section_2">
            <div className="side_left">
              <div className="side_left_content">
                <div className="side_left_content_media">
                  {/* <img
                    src={require("../../Assets/Demo/download (1).png").default.src}
                    alt=""
                  /> */}

                  <Link
                    href={`/${retCatg(posts[1].category)}/story/${
                      posts[1].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <Image
                        src={`https://api.thecincinnatitimes.com/${posts[1].show_img}`}
                        alt=""
                        class="img"
                        layout="fill"
                        objectFit="contain"
                        placeholder="blur"
                        blurDataURL="../../Assets/Logos/small logo.png"
                      />
                    </a>
                  </Link>
                </div>

                <Link
                  href={`/${retCatg(posts[1].category)}/story/${
                    posts[1].post_id
                  }`}
                  passHref
                >
                  <a>
                    <h4 className="side_left_content_title">
                      {posts[1].title}
                    </h4>
                    <p className="side_left_content_description">
                      {posts[1].summary}
                    </p>
                  </a>
                </Link>
                <span className="date_category"> <span className="news_date">{getDate(posts[1].date_created)}</span> <span className="news_category">{retCatg(posts[1].category)}</span></span>
              </div>
              <LineBreaker width="95" />

              <div className="side_left_content">
                <h4 className="side_left_content_title">
                  Larry Elder won’t seek rematch against Gov. Gavin Newsom in
                  2022 race
                </h4>
                <p className="side_left_content_description">
                  The Los Angeles native said that he has instead formed a
                  political action committee to help Republicans running for the
                  Senate and House.
                </p>
              </div>
              <LineBreaker width="95" />

              <div className="side_left_content">
                <h4 className="side_left_content_title">
                  California lawmakers unveil plan to hold gun makers liable for
                  shootings
                </h4>
                <p className="side_left_content_description">
                  Motorists were stranded overnight in freezing temperatures
                  along a 50-mile stretch of Interstate 95 south of Washington,
                  D.C.
                </p>
              </div>

            </div>
            <div className="side_right">
              <div className="side_right_content">
              <Link href={`/${retCatg(recentTrend[0].category)}/story/${recentTrend[0].post_id}`} passHref>
                  <a>
                  <div className="side_right_content_media">
                  <Image
                    src={`https://api.thecincinnatitimes.com/${recentTrend[0].show_img}`}
                    alt=""
                    class="img"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="../../Assets/Logos/small logo.png"
                  />
                </div>
                <h3 className="side_right_content_title">
                  {recentTrend[0].title}
                </h3>
                  </a>
                  </Link>
                  <span className="date_category"> <span className="news_date">{getDate(recentTrend[0].date_created)}</span> <span className="news_category">{retCatg(recentTrend[0].category)}</span></span>
              </div>
              <LineBreaker width="95" margin="20" />

              <div className="side_right_content">
              <Link href={`/${retCatg(recentTrend[1].category)}/story/${recentTrend[1].post_id}`} passHref>
                  <a>
                  <div className="side_right_content_media">
                  <Image
                    src={`https://api.thecincinnatitimes.com/${recentTrend[1].show_img}`}
                    alt=""
                    class="img"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="../../Assets/Logos/small logo.png"
                  />
                </div>
                <h3 className="side_right_content_title">
                  {recentTrend[1].title}
                </h3>
                  </a>
                  </Link>
                  <span className="date_category"> <span className="news_date">{getDate(recentTrend[1].date_created)}</span> <span className="news_category">{retCatg(recentTrend[1].category)}</span></span>
              </div>
              <LineBreaker width="95" margin="20" />

              <div className="side_right_content">
              <Link href={`/${retCatg(recentTrend[2].category)}/story/${recentTrend[2].post_id}`} passHref>
                  <a>
                  <div className="side_right_content_media">
                  <Image
                    src={`https://api.thecincinnatitimes.com/${recentTrend[2].show_img}`}
                    alt=""
                    class="img"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="../../Assets/Logos/small logo.png"
                  />
                </div>
                <h3 className="side_right_content_title">
                  {recentTrend[2].title}
                </h3>
                  </a>
                  </Link>
                  <span className="date_category"> <span className="news_date">{getDate(recentTrend[2].date_created)}</span> <span className="news_category">{retCatg(recentTrend[2].category)}</span></span>
              </div>
              <LineBreaker width="95" margin="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
