import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layouts from './layouts/Layouts.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import TheTeamPage from './pages/TheTeamPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import EquipmentPage from './pages/EquipmentPage.jsx'
import CommunityBuildingPage from './pages/CommunityBuildingPage.jsx'
import GetInvolvedPage from './pages/GetInvolvedPage.jsx'
import DocumentsPage from './pages/DocumentsPage.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route path={"/about-us"} element={<AboutUsPage />} />
        <Route path={"/projects"} element={<ProjectsPage />} />
        <Route path={"/contact-us"} element={<ContactUsPage />} />
        <Route path={'/meet-the-team'} element={<TheTeamPage />} />
        <Route path={"/equipment"} element={<EquipmentPage />} />
        <Route path={"/community-building"} element={<CommunityBuildingPage />} />
        <Route path={"/get-involved"} element={<GetInvolvedPage />} />
        <Route path={"/documents"} element={<DocumentsPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App