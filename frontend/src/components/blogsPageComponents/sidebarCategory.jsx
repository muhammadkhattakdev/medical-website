import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";

export default function SidebarCategory(props) {
    const { name } = props 
    const context = useContext(Context);

    const categoryClickHandler = e => {
        localStorage.setItem('currentCategoryName', name);
        context.setCategoryName(categoryName => {
            const newCategoryName = name;
            context.getCategorizedBlogs(newCategoryName);
            return newCategoryName;
        });
    };

  return (
    <>
      <li>
        <Link onClick={categoryClickHandler} to={`/blogs/${name}`}>
          <FontAwesomeIcon icon={faAngleRight} /> {name}
        </Link>
      </li>
    </>
  );
}
