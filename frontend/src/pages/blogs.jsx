import React from "react";
import Header2 from "../components/aboutpageComponents/header";
import BlogsLayout from "../components/blogsPageComponents/blogsLayout";


export default function BlogsPage() {

    return (
        <>
            <Header2 headingText="Blog" />
            <BlogsLayout />
        </>
    )
}