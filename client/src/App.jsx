import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layouts from './layouts/Layouts.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import OtpPage from './pages/OtpPage.jsx'
import VerifyEmailPage from './pages/VerifyEmailPage.jsx'
import ChangePasswordPage from './pages/ChangePasswordPage.jsx'
import TheTeamPage from './pages/TheTeamPage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import EquipmentPage from './pages/EquipmentPage.jsx'
import CommunityBuildingPage from './pages/CommunityBuildingPage.jsx'
import GetInvolvedPage from './pages/GetInvolvedPage.jsx'
import DocumentsPage from './pages/DocumentsPage.jsx'
import EditVisionPages from './pages/EditVisionPages.jsx'
import EditMissionPage from './pages/EditMissionPage.jsx'
import EditAboutUsPage from './pages/EditAboutUsPage.jsx'
import AddValuesPages from './pages/AddValuesPages.jsx'
import EditValuesPages from './pages/EditValuesPages.jsx'
import AddMeetTheTeamPages from './pages/AddMeetTheTeamPages.jsx'
import EditMeetTheTeamPages from './pages/EditMeetTheTeamPages.jsx'
import Protected from './pages/Protected.jsx'

function App() {


  const router = createBrowserRouter(


    createRoutesFromElements(

      <Route path={"/"} element={<Layouts />}>

        <Route index element={<HomePage />} />
        <Route path={"/about-us"} element={< AboutUsPage/>} />
        <Route path={"/projects"} element={<ProjectsPage />} />
        <Route path={"/contact-us"} element={<ContactUsPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/verify-otp"} element={<OtpPage />} />
        <Route path={"/change-password"} element={<ChangePasswordPage />} />
        <Route path={"verify-email"} element={<VerifyEmailPage />} />
        <Route path={'/meet-the-team'} element={<TheTeamPage />} />
        <Route path={"/equipment"} element={<EquipmentPage />} />
        <Route path={"/community-building"} element={<CommunityBuildingPage />} />
        <Route path={"/get-involved"} element={<GetInvolvedPage />} />
        <Route path={"/documents"} element={<DocumentsPage />} />
        <Route path={"/edit-vision/:id"} element={<EditVisionPages />} />
        <Route path={"/edit-mission/:id"} element={<EditMissionPage />} />
        <Route path={"/edit-about/:id"} element={<EditAboutUsPage />} />
        <Route path={"/add-values"} element={<Protected>< AddValuesPages /></Protected>} />
        <Route path={"/edit-values/:id"} element={<EditValuesPages />} />
        <Route path={"/add-team"} element={<Protected><AddMeetTheTeamPages /></Protected> } />
        <Route path={"/edit-team-member/:id"} element={<EditMeetTheTeamPages />} />


      </Route>

    )

  )

  return (

    <RouterProvider router={router} />

  )
}

export default App
