import React from 'react'

export default function About() {
  return (
    <>
      {/* About start==================================== */}
      <div className="bg3" id='About'>
        <div className="container px-md-0 px-4">
          <div className="h100a w-100"></div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/about-01-free-img.jpg"
                alt="systumm"
                className="h650a w90a"
              />
            </div>
            <div className="col-md-6">
              <div className="h30 w-100"></div>
              <p className="fs fw4 text-light">.01</p>
              <div className="bi2">
                <p className="fs4 fw4 text-light">About Me</p>
              </div>
              <div className="row p-0">
                <div className="col-md-1 col-1 p-0">
                  <div className="h1 w80 bg2 mt-4 ms-2"></div>
                </div>
                <div className="col-md-11 col-11 p-0"></div>
              </div>
              <div className="col-md-12">
                <p className="fs8a fw text-light">
                  Lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                  sagittis.
                </p>
                <p className="fs13a text-light">
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                </p>
                <p className="fs13a text-light">
                  Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                  odio tincidunt auctor.
                </p>
                <p className="fs13a text-light">
                  Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. Morbi accumsan.
                </p>
              </div>
            </div>
          </div>
          <div className="h100a w-100"></div>
        </div>
      </div>

      {/* about close================================ */}
    </>
  )
}
