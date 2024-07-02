import React from 'react'

export default function Gallery() {
  return (
    <>
       {/* Gallery start===================================== */}

       <div className="container-fluid   bg3 " id='Gallery'>
          <div className="h150a w-100"></div>
          <div className="row px-5">
            <div className="col-md-12 px-md-5 p-0">
              <p className="fs fw4 text-light">.06</p>
              <div className="bi2b">
                <p className="fs4a fw4 text-light">Photo Gallery</p>
              </div>
            </div>
            
            <div className="col-md-1 col-1 ms-3">
              <div className="h1 w80 bg2 mt-4 ms-4"></div>
            </div>
            <div className="col-md-11 col-11"></div>
          </div>
          <div className="row px-5">
            <div className="col-md-6 col-12 ps-md-5 ps-0">
              <p className="fs6 text-light">
                Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus.
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="h150a w-100"></div>
          <div className="row p-0">
            <div className="col-md-2 p-0">
              <img
                src="img/gallery-02-free-img.jpg"
                alt=""
                className="h400 w-100"
              />
            </div>
            <div className="col-md-2 p-0">
              <img
                src="img/gallery-03-free-img.jpg"
                alt=""
                className="h400 w-100"
              />
            </div>
            <div className="col-md-2 p-0">
              <img
                src="img/gallery-04-free-img.jpg"
                alt=""
                className="h400 w-100"
              />
            </div>
            <div className="col-md-2 p-0">
              <img
                src="img/gallery-05-free-img.jpg"
                alt=""
                className="h400 w-100"
              />
            </div>
            <div className="col-md-2 p-0">
              <img
                src="img/gallery-06-free-img.jpg"
                alt=""
                className="h400 w-100"
              />
            </div>
            <div className="col-md-2 p-0">
              <img
                src="img/gallery-07-free-img.jpg"
                alt=""
                className="h400 w-100"
              />
            </div>
          </div>
          <div className="h150a w-100"></div>
        </div>

      {/* Gallery close============================ */}
    </>
  )
}
