import { Outlet } from "react-router"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
export const Layout = () => {
  return (
    <>
      <Header />
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet /> 
      <Footer />
    </>
  )
}