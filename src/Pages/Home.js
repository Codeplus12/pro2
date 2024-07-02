import React from 'react'

export default function Home() {
  return (
    <>
       {/* home start================================== */}
 <div className="col-md-12 bi" id='Home'>
 <div className="bg">
   <nav className="navbar navbar-expand-sm  navbar-dark">
     <div className="container-fluid px-5">
       <a className="navbar-brand" href="#Home">
         <img
           src="img/logo-01-regular-free-img-150x40.png"
           alt="site logo"
           className="h40a" id='Home'
         />
       </a>
       <button
         className="navbar-toggler bg1 h45a w14a"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapsibleNavbar"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="collapsibleNavbar">
         <ul className="navbar-nav ms-auto">
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Home"
               style={{ color: "white" }}
             >
               HOME
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link  fs ms-4"
               href="#About"
               style={{ color: "white" }}
             >
               ABOUT ME
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Training"
               style={{ color: "white" }}
             >
               TRAINING
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Rates"
               style={{ color: "white" }}
             >
               RATES
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Clients"
               style={{ color: "white" }}
             >
               CLIENTS
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Testimonials"
               style={{ color: "white" }}
             >
               TESTIMONIALS
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Gallery"
               style={{ color: "white" }}
             >
               GALLERY
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link fs ms-4"
               href="#Contact"
               style={{ color: "white" }}
             >
               CONTACT
             </a>
           </li>
         </ul>
       </div>
     </div>
   </nav>
   <div className="h150a w-100"></div>
   <div className="container px-5">
     <div className="row px-3">
       <div className="col-md-12 p-0">
         <div className="row p-0">
           <div className="col-md-1 col-1 p-0">
             <div className="h2 w80 bg1 mt-4 p-0"></div>
           </div>
           <div className="col-md-11 col-11">
             <p className="fs1 fw">
               <span className="text-light">Maverick</span>{" "}
               <span style={{ color: "#73d536" }}>Kaan</span>
             </p>
           </div>
         </div>
       </div>
     </div>
     <div className="row">
       <div className="col-md-12 p-0">
         <p className="fs12a fw4 text-light p-0">Fitness</p>
       </div>
     </div>

     <div className="bi1">
       <p className="fs12a fw1 text-light p-0 m-0">Trainer</p>
     </div>
     <div className="h100a w-100"></div>
     <div className="row p-0">
       <div className="col-md-1 col-1 p-0">
         <div className="h2 w80 bg2 mt-4 p-0"></div>
       </div>
       <div className="col-md-11 col-11 p-0"></div>
     </div>
     <div className="h30 w-100"></div>
     <div className="col-md-12">
       <p className="fs4a fw4 text-light">
         Let's Set & Reach Your Fitness Goals
       </p>
     </div>
     <div className="h40 w-100"></div>
     <button className="bt">
       <p className="fs13 text-light mt-2">CONTACT ME</p>
     </button>
   </div>
   <div className="h180a w100"></div>
 </div>
</div>
{/* Home close================================= */}
    </>
  )
}
