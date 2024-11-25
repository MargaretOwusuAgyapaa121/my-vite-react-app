import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SinglePost from "../components/SinglePost"

export default function Home(){
    return(
        <>
           <Nav/>
           <Header title="Home" SubTitle="this is subtitle" bgImage="home-bg.jpg"/>
           <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="post-preview">
           <SinglePost/>
           </div>
           </div>
           </div>
           <Footer/>

        </>
    )
}