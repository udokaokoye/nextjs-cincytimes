import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineBreaker from "../Components/Line Breaker/LineBreaker";
import TopStories from "../Components/Top Stories/TopStories";
import moment from "moment";
import Image from "next/image";
import Script from "next/script";
import Head from 'next/head'
import {
  faArrowRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Weather from "../Components/Weather/Weather";
import NewsCategory2 from "../Components/News Category 2/NewsCategory2";
import GridCategory from "../Components/Grid Category/GridCategory";
import HorizontalAds from "../Components/Horizontal Ads/HorizontalAds";
import HomeNewsCategory from "../Components/News Category/HomeNewsCategory";
import CovidTracker from "../Components/Covid Tracker/CovidTracker";
import VaccineFinder from "../Components/Vaccine Finder/VaccineFinder";
import SubscribeBox from "../Components/Subscribe Box/SubscribeBox";
import HeaderNav from "../Components/HeaderNav/HeaderNav";
import Footer from "../Components/Footer/Footer";
import sp from "../Assets/Demo/bidenchristmas.jpg";

import { GetAllPosts, GetUser, useIsLoggedIn } from "../lib/swr-hooks";
import Loader from "../Components/Loader/Loader";

const Home = () => {
  const { allpost, isLoad } = GetAllPosts();
  const { loggedin, userId } = useIsLoggedIn();
  if (loggedin) {
    const { users } = GetUser(userId);
  }
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const retCatg = (catg = []) => {
    if (catg.split(",")) {
      return catg.split(",")[0];
    } else {
      return 0;
    }
  };

  let showcasePost = allpost?.filter((ptt) => ptt.trending == "true");
  let politics = allpost?.filter((ptt) => retCatg(ptt.category).includes('Politics'))
  let crime = allpost?.filter((ptt) => retCatg(ptt.category).includes('Crime'))

  const getDate = (date) => {
  const is24Hours = moment().diff(moment(date), 'hours') >= 24;
  if (is24Hours) {
    return moment(date).format("Do. MMM, YYYY")
  } else {
    return moment(date).fromNow()
  }
  }


  if (isLoad) {
    return <Loader />;
  }





  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <title>The Cincinnati Times</title>
      {/* <meta name="keywords" content="titla, meta, nextjs" /> */}
      <meta name="descrition" content="The Cincinnati Times, News At Your Finger Tips" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="The Cincinnati Times" />
      <meta property="og:type" content="article" />
      {/* <meta
        property="og:image"
        content={`https://api.thecincinnatitimes.com/${pictures[0]}`}
      />
      <meta
        property="og:url"
        content={`https://leviokoye.online/category/story/${renderPost?.post_id}`}
      /> */}


      {/* Non-Essential, But Recommended */}
      {/* <meta property="og:description" content={renderPost?.summary} /> */}
      {/* <meta property="og:site_name" content="The Cincinnati Times." /> */}
      {/* <meta property="twitter:title" content={renderPost?.title} /> */}
      {/* <meta property="twitter:description" content={renderPost?.summary} /> */}
      {/* <meta property="twitter:site" content="https://leviokoye.online/" /> */}
      {/* <meta property="twitter:image" content={`https://api.thecincinnatitimes.com/${pictures[0]}`} /> */}
      {/* <meta name="twitter:image:alt" content={renderPost?.title} /> */}
    </Head>
      <HeaderNav />

      <Script
        async
        defer
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      />
      <Script
        sync
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0"
        nonce="cdzOg1Ie"
      />
      <div className="container" id="container">
        <div className="container-wrapper">
          <div className="main_content">
            {/* !!SHOWCASE */}
            <div className="showcase">
              <div className="showcase_top">
                <div className="showcase_left">
                  <Link
                    // className='router_link'
                    href={`/${retCatg(showcasePost[1].category)}/story/${
                      showcasePost[1].post_id
                    }`}
                  >
                    <a>
                      <h1 className="show_contnent_title">
                        {/* Inside Klete Keller’s fall from Olympic gold to the Capitol
                    riot */}
                        {showcasePost[1].title}
                      </h1>
                    </a>
                  </Link>

                  <p className="show_content_description">
                    {/* Keller has pleaded guilty to a felony charge of obstructing
                    an officialproceeding before Congress and agreed to
                    cooperate with the government’s investigation. */}
                    {showcasePost[1].summary}
                  </p>
                  <span className="side_date_category"> <span className="side_date">{getDate(showcasePost[1].date_created)}</span> <span className="side_category">{retCatg(showcasePost[1].category)}</span></span>

                  <div className="showcase_content_child">
                    <p className="content_child_header"> More Coverage</p>
                    <p className="content_child_title">
                      <Link href={"/auth"} passHref className="router_link">
                        <p>
                          California lawmakers on Jan. 6: ‘I really thought that
                          I was going to die that day’
                        </p>
                      </Link>
                    </p>
                  </div>

                  <div className="join_conv">
                    <h3>Join The Conversation For Free!!!</h3>
                    <input type="email" placeholder="Enter Email" />
                    <span>By clickin the button, you accept to recieve email notifications</span>
                    <button>Join Now!</button>
                    </div>
                </div>
                <div className="showcase_main_content">
                  <Link
                    // className='router_link'
                    href={`/${retCatg(showcasePost[0].category)}/story/${
                      showcasePost[0].post_id
                    }`}
                  >
                    <a>
                      <h1>{showcasePost[0].title}</h1>
                    </a>
                  </Link>
                  <p>{showcasePost[0].summary}</p>
                  <span className="btm_news_date_category"> <span className="btm_news_date">- {getDate(showcasePost[0].date_created)}</span> <span className="btm_news_category">{retCatg(showcasePost[0].category)}</span></span>
                </div>
                <div className="showcase_right">
                  <div className="showcase_media_container">
                  <Link
                    // className='router_link'
                    href={`/${retCatg(showcasePost[0].category)}/story/${
                      showcasePost[0].post_id
                    }`}
                  >
                    <a>
                      <Image
                        src={`https://api.thecincinnatitimes.com/${showcasePost[0].show_img}`}
                        alt=""
                        // className="show_main_media"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={'top'}
                        placeholder="blur"
                        blurDataURL="../../Assets/Logos/placeholder.PNG"
                      />
                    </a>
                  </Link>

                  <div className="gradient">
                    <Link
                      // className='router_link'
                      href={`/${retCatg(showcasePost[0].category)}/story/${
                        showcasePost[0].post_id
                      }`}
                    >
                      <a>
                        <h1 className="show_main_title">
                          {showcasePost[0].title}
                        </h1>
                      </a>
                    </Link>
                    {/* <span>{getDate(showcasePost[0].date_created)}</span> */}
                  </div>
                  </div>
                  
                  <div className="showcase_bottom">
                    <li className="trending_now">Trending Now</li>
                <div className="btm_news_1 btm_news">
                  <Link
                    href={`/${retCatg(showcasePost[2].category)}/story/${
                      showcasePost[2].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <h2 className="router_link">{showcasePost[2].title}</h2>
                      <p className="btm_news_editior">By Levi Okoye</p>
                      <li className="btm_news_summary">{showcasePost[2].summary}</li>
                      <span className="btm_news_date_category"> <span className="btm_news_date">- {getDate(showcasePost[2].date_created)}</span> <span className="btm_news_category">{retCatg(showcasePost[2].category)}</span></span>
                    </a>
                  </Link>
                </div>
                <div className="btm_news_2 btm_news">
                  <Link
                    href={`/${retCatg(showcasePost[3].category)}/story/${
                      showcasePost[3].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <h2 className="router_link">{showcasePost[3].title}</h2>
                      <p className="btm_news_editior">By Levi Okoye</p>
                      <span className="btm_news_date_category"> <span className="btm_news_date">- {getDate(showcasePost[3].date_created)}</span> <span className="btm_news_category">{retCatg(showcasePost[3].category)}</span></span>
                    </a>
                  </Link>
                </div>
                <div className="btm_news_3 btm_news">
                  <Link
                    href={`/${retCatg(showcasePost[4].category)}/story/${
                      showcasePost[4].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <h2 className="router_link">{showcasePost[4].title}</h2>
                      <p className="btm_news_editior">By Levi Okoye</p>
                      <span className="btm_news_date_category"> <span className="btm_news_date">- {getDate(showcasePost[4].date_created)}</span> <span className="btm_news_category">{retCatg(showcasePost[4].category)}</span></span>
                    </a>
                  </Link>
                </div>
              </div>
                </div>
              </div>
              
            </div>
            <LineBreaker mode="thick" width="full" />
            {/* !TOP STORIES */}
            <TopStories
              posts={allpost.filter((pt) => pt.top_story == "true")}
              recentTrend={showcasePost.slice(5, showcasePost.length)}
            />
          </div>

          {/* !RIGHT BAR */}
          <div className="right_bar">
            <LineBreaker mode="thick" margin="0" width="98" />
            {/* !RIGHT BAR OPINIONS */}
            <div className="right_bar_opinion">
              <div className="right_opionion_bar">
                <h3>Articles</h3>{" "}
                <FontAwesomeIcon
                  style={{ marginLeft: 7 }}
                  icon={faArrowRight}
                />
              </div>
              <LineBreaker />

              {allpost
                ?.filter((pt) => pt.category.includes("Article"))
                .map((article) => (
                  <React.Fragment key={article.post_id}>
                    <div className="right_bar_opinion_content">
                      <p>{article.title}</p>
                    </div>
                    <LineBreaker />
                  </React.Fragment>
                ))}
            </div>
            <br />
            <LineBreaker mode="thick" width={98} />
            {/* !COVID TRACKER */}
            <CovidTracker />

            <br />
            <LineBreaker mode="thick" width={98} />
            {/* !SUBSCRIBE BOX */}
            <SubscribeBox />

            <br />
            <LineBreaker mode="thick" width={98} />

            {/* !SIDE WEATHER */}
            <div className="right_bar_weather">
              <div className="weather_br_location">
                <h3>Weather {">>"} </h3>

                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Cincinnati
                </span>
              </div>
              <LineBreaker />
              <Weather />
            </div>

            <br />
            <LineBreaker mode="thick" width={98} />

            {/* !VACCIEN FINDER */}

            <VaccineFinder />

            {/* RIGHT BAR ADS */}
            <div className="right_ads_cnt">
              <div className="ads_sign"></div>
            </div>
          </div>
        </div>

        {/* !MOBILE VIEW OF COVID CASES */}

        <div className="mobile_covid_container">
          <div className="mobile_covid_wrapper">
            <CovidTracker mobile="true" />
          </div>
        </div>

        <LineBreaker mode="thick" width="full" />

        {/* CATEGORIES CONTAINER */}
        <div className="categories">
          {/* FIRST NEWS CATEGORY */}
          <HomeNewsCategory posts={politics} categoryName={"Politcs"} />

          {/* !MOBILE VIEW OF WEATHER COMPONENT */}
          <div className="mobile_weather_container">
            {/* <LineBreaker mode='thick' width='full' margin={"25"} /> */}

            <div className="mobile_weather_wrapper">
              <div className="bar_intro">
                <span>
                  Weather In Cincinnati <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <LineBreaker mode={"thin"} />
              </div>
              <Weather />
            </div>
          </div>

          <LineBreaker mode="thick" width="full" margin={"25"} />

          {/* !SECOND NEWS CATEGORY */}
          <NewsCategory2 categoryName={"Sports"} />

          <LineBreaker mode="thick" width="full" margin={"25"} />
          {/* !FIRST GRID CATEGORY */}
          <GridCategory placement="home" categoryName={"Cincy Times Cooking"} />

          <br />
          <LineBreaker mode="thick" width="full" margin={"25"} />

          {/* !THIRD NEWS CATEGORY */}
          <HomeNewsCategory posts={crime} categoryName={"Crime"} />

          {/* ! HORIZONTAL ADS */}
          <HorizontalAds />

          <br />
          <LineBreaker mode="thick" width="full" margin={"25"} />

          {/* FOURTH NEWS CATEGORY */}
          <NewsCategory2 categoryName={"Business"} img={"buss.jpg"} />

          {/* MOBILE VIEWS OF VACCINE FINDER */}
          <div className="mobile_vaccine_container">
            <div className="mobile_vaccine_wrapper">
              <VaccineFinder mobile="true" />
            </div>
          </div>

          <LineBreaker mode="thick" width="full" margin={"25"} />

          {/* !SECOND GRID CATEGORY */}
          <GridCategory categoryName={"Cincy Times Cooking"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
