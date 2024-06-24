import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Homepage from "../pages/home";
import AboutUs from "../pages/about";
import LoginPage from "../pages/logIn";
import RegisterPage from "../pages/register";
import ContactPage from "../pages/contact";
import BlogsPage from "../pages/blogs";
import UserDashboardLayout from "../layouts/userDashboardLayout";
import ProtectedRoute from "./protectedRoute";
import Form1 from "../pages/userDashboardPages/form1";
import Form2 from "../pages/userDashboardPages/form2";
import Form3 from "../pages/userDashboardPages/form3";
import Form4 from "../pages/userDashboardPages/form4";
import Form5 from "../pages/userDashboardPages/form5";
import Form6 from "../pages/userDashboardPages/form6";
import UserSettings from "../pages/userDashboardPages/settings";
import AdminProtectedRoute from "./adminProtectedRoute";
import AdminPanelLayout from "../layouts/AdminPanelLayout";
import WriteArticle from "../pages/userDashboardPages/writeArticle";
import MyBlogs from "../pages/userDashboardPages/blogs";
import EditBlogPage from "../pages/userDashboardPages/editBlog";
import MyProfile from "../pages/userDashboardPages/profile";
import CategorizedBlogs from "./blogsPageComponents/categorizedBlogs";
import ReadBlog from "../pages/blog";
import Membership from "../pages/membership";
import Users from "../pages/adminPanelPages/users";
import MemberShips from "../pages/adminPanelPages/memberships";
import UserDetails from "../pages/adminPanelPages/user";
import AdminBlogs from "../pages/adminPanelPages/blogs";
import AdminBlog from "../pages/adminPanelPages/blog";


export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="blogs" element={<BlogsPage />} />
                    <Route path="membership" element={<Membership />} />
                    <Route path="blog/:id" element={<ReadBlog />} />
                    <Route path="blogs/:name" element={<CategorizedBlogs />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<RegisterPage />} />
                </Route>
                <Route path="dashboard" element={<ProtectedRoute Component={UserDashboardLayout} />} >
                    <Route path="form1" element={<Form1 />} />
                    <Route path="form2" element={<Form2 />} />
                    <Route path="form3" element={<Form3 />} />
                    <Route path="form4" element={<Form4 />} />
                    <Route path="form5" element={<Form5 />} />
                    <Route path="form6" element={<Form6 />} />
                    <Route path="profile" element={<MyProfile />} />
                    <Route path="settings" element={<UserSettings />} />
                    <Route path="blogs" element={<MyBlogs />} />
                    <Route path="edit-blog/:id" element={<EditBlogPage />} />
                    <Route path="write-blog" element={<WriteArticle />} />
                </Route>
                <Route path="admin" element={<AdminProtectedRoute Component={AdminPanelLayout} />} >
                    <Route path="users" element={<Users />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="memberships" element={<MemberShips />} />
                    <Route path="blogs" element={<AdminBlogs />} />
                    <Route path="blog/:id" element={<AdminBlog />} />
                </Route>
            </Routes>
        </>
    )
}

