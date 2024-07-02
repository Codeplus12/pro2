import React from 'react'

export default function Contact() {
  return (
    <>
     {/* contact start=============================== */}
     <div className="bg4" id='Contact'>
        <div className="container px-md-0 px-4">
          <div className="h150a w-100"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="bi5">
                <p className="fs4a fw4 text-light p-0 m-0">Contact Me</p>
                

              </div>
              <div className="row">
                  <div className="col-md-2 col-1">
                    <div className="h1 w80 bg-light mt-4 ms-2"></div>
                  </div>
                  <div className="col-md-10 col-11"></div>
                </div>
              <p className="fs6 text-light">
              Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
sed odio sit amet nibh vulputate cursus.
              </p>
              <div>
              <button style={{background:"none",border:"none",display:"inline"}}><i className="fa fa-phone text-light fs13" aria-hidden="true"></i></button>
              <p style={{display:"inline",color:"white",fontSize:"20px"}}>  929-242-6868</p></div>
              <div>
              <button style={{background:"none",border:"none",display:"inline"}}><i className="fa fa-envelope text-light fs13" aria-hidden="true"></i></button><p style={{display:"inline",color:"white",fontSize:"20px"}}>contact@enroll.com</p>
              </div>
              <div className="h50a w-100"></div>
              <p className="fs4a fw4 text-light p-0 m-0">
               Follow Me
              </p>
              <div className="h20 w-100"></div>
              <div className="row">
                <div className="col-md-6 col-8">
                <div className="row">
                <div className="col-md-3 col-3">
                  <button className="h50 col-md-12 col-12 bn" style={{borderRadius:"10px"}}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  </button>
                  </div>
                  <div className="col-md-3 col-3">
                  <button className="h50 col-md-12 col-12 bn" style={{borderRadius:"10px"}}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  </button>
                  </div>
                  <div className="col-md-3 col-3">
                  <button className="h50 col-md-12 col-12 bn" style={{borderRadius:"10px"}}>
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </button>
                  </div>
                  <div className="col-md-3 col-3">
                  <button className="h50 col-md-12 col-12 bn" style={{borderRadius:"10px"}}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  </button>
                  </div>
                  </div>
                </div>
                <div className="col-md-6 col-4"></div>
              </div>
            </div>
            <div className="col-md-6">
            <p className="fs4a fw4 text-light p-0 m-0">Have Questions?</p>
            <div className="h40 w-100"></div>
            <form action="">
            
                    <input type="text" className="h45 w-100 m-0" placeholder=" Your Name" />
                    <div className="h10 w-100"></div>
                    
                    <input type="email" className="h45 w-100 m-0" placeholder=" Your Email" />
                    <div className="h10 w-100"></div>
                    
                    <textarea name="" id="" className="h120 w-100" placeholder=" Your Message"></textarea>
                    <div className="h10 w-100"></div>
                    <button className="bt"><p className="fs13 mt-2">Send Message</p></button>
            </form>
            </div>
          </div>
          <div className="h150a w-100"></div>
        </div>
      </div>
      <div className="bg3">
        <div className="container px-md-0 px-4">
        <div className="h50a w-100"></div>
        <div className="row">
        <div className="col-md-4 col-12 text-md-start text-center"><p className="fs fw2 text-light m-0 " style={{display:"inline"}}>Copyright &#169; 2024 Fitness Trainer</p></div>
        <div className="col-md-5"></div>
        <div className="col-md-3 col-12 ps-md-5 ps-4 text-md-end text-center"><p className="fs fw2 text-light m-0 " style={{display:"inline"}}>Powered by Fitness Trainer</p></div>
          
          
          </div>
          <div className="h50a w-100"></div>
        </div>
      </div>
      {/* contact close==================================== */} 
    </>
  )
}
