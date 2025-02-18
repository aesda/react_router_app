import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter,Routes, Route } from "react-router";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'; 
import Login from './pages/login.jsx';
import Register from './pages/Register.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import ProjectHome from './pages/ProjectHome.jsx';
import Project from './pages/Project.jsx';
import EditProject from './pages/EditProject.jsx';
import ProjectLayout from './layouts/ProjectLayout.jsx';
import Contact from './pages/Contact.jsx';
import ProjectContact from './pages/ProjectContact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
      
        <Route element={<AuthLayout />}>
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
        </Route>


          <Route path="project">
              <Route index element={<ProjectHome />} />
              <Route element={<ProjectLayout />}>
                  <Route path=":id" element={<Project />} />
                  <Route path=":id/edit" element={<EditProject />} />
              </Route>
           </Route>
           <Route path="contact" element={<Contact />} />
           <Route path="projectContact" element={<ProjectContact />} />
           
           
        </Routes>
        
      </BrowserRouter>
    </StrictMode>
)
