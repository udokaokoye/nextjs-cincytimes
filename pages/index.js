import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineBreaker from "../Components/Line Breaker/LineBreaker";
import TopStories from "../Components/Top Stories/TopStories";
// import './Home.css'
import Script from "next/script";
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

  let showcasePost = allpost?.filter((ptt) => ptt.trending == 'true');

  useEffect(() => {
  }, [isLoad]);

  if (isLoad) {
    return <Loader />;
  }

  const retCatg = (catg = []) => {
    if (catg.split(",")) {
      return catg.split(",")[0];
    } else {
      return 0;
    }
  };

  return (
    <>
      <HeaderNav />

      <Script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      <Script sync defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0" nonce="cdzOg1Ie" />
      <div className="container" id="container">
        <div className="container-wrapper">
          <div className="main_content">
            {/* !!SHOWCASE */}
            <div className="showcase">
              <div className="showcase_top">
                <div className="showcase_content">
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
                </div>
                <div className="showcase_main">
                  <Link
                    // className='router_link'
                    href={`/${retCatg(showcasePost[0].category)}/story/${
                      showcasePost[0].post_id
                    }`}
                  >
                    <a>
                      <img
                        // loader={('default', 500, 75)}
                        className="show_main_media"
                        src={`http://192.168.1.158/cincinnatitimes/${showcasePost[0].show_img}`}
                        alt={showcasePost[0].title}
                        // priority={true}
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
                  </div>
                </div>
              </div>
              <div className="showcase_bottom">
                <div className="btm_news_1">
                  <Link
                    href={`/${retCatg(showcasePost[2].category)}/story/${
                      showcasePost[2].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <p className="router_link">{showcasePost[2].title}</p>
                    </a>
                  </Link>
                </div>
                <div className="btm_news_2">
                  <Link
                    href={`/${retCatg(showcasePost[3].category)}/story/${
                      showcasePost[3].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <p className="router_link">{showcasePost[3].title}</p>
                    </a>
                  </Link>
                </div>
                <div className="btm_news_3">
                  <Link
                    href={`/${retCatg(showcasePost[4].category)}/story/${
                      showcasePost[4].post_id
                    }`}
                    passHref
                  >
                    <a>
                      <p className="router_link">{showcasePost[4].title}</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <LineBreaker mode="thick" width="full" />
            {/* !TOP STORIES */}
            <TopStories posts={allpost.filter((pt) => pt.top_story == 'true')} />
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

              {allpost?.filter((pt) => pt.category.includes("Article")).map((article) => (
                <React.Fragment>
                  <div className="right_bar_opinion_content">
                <p>
                  {article.title}
                </p>
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
          <HomeNewsCategory categoryName={"Politcs"} />

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
          <HomeNewsCategory categoryName={"Entertainment"} />

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