import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

import {GetCategories} from '../../../lib/swr-hooks'

// import { getCategory } from "../APIs/get_category";
import AdminNav from "../../../Components/AdminNav/AdminNav";
const AdminNewsCategory = () => {
  const [categoryName, setcategoryName] = useState("");
  const [categoryType, setcategoryType] = useState("");
  const { categories } = GetCategories()



  const addCategoryhandler = () => {
    const formData = new FormData();
    formData.append("category_name", categoryName);
    formData.append("category_type", categoryType);

    fetch("https://api.thecincinnatitimes.com/add_category.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  };
  return (
    <>
    <AdminNav />
    <div onClick={() => console.log(categories)} className="Admin_News_Category">
      <div className="admin_news_wrapper">
        <h1>News Categories</h1>

        <div className="allCategories">
          {categories?.length >  0 ? categories.map((catg) => (
                          <div key={catg.category_name} className="category_cont">
                          <p>{catg.category_name}</p> <div className="icns"><FontAwesomeIcon icon={faPen} className='edit_icn' /> <FontAwesomeIcon icon={faTrash} className='del_icn' /></div>
                      </div>
          )) : ("Loading.....")}
        </div>

        <div className="addCategory">
          <h1>Add New Category</h1>

          <input
            onChange={(e) => setcategoryName(e.target.value)}
            type="text"
            placeholder="Enter Catgory Name"
          />
          <select onChange={(e) => setcategoryType(e.target.value)}>
            <option value="default">Default</option>
            <option value="special">Special/Temporary</option>
          </select>

          <button
            onClick={() => addCategoryhandler()}
            style={{
              backgroundColor:
                categoryName == "" || categoryType == "" ? "grey" : "",
            }}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminNewsCategory;
