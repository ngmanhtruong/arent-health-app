import React from "react"
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom"
import MainLayout from "../layout/main-layout"
import ColumnPage from "../pages/ColumnPage"
import MyRecordPage from "../pages/MyRecordPage"
import Page404 from "../pages/Page404"
import TopPage from "../pages/TopPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<TopPage />} />
          <Route path="my-record" element={<MyRecordPage />} />
          <Route path="column" element={<ColumnPage />}/>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Wrapper = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default AppRouter