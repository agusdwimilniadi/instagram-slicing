import React from "react";
import photoProfile from "./profile.jpeg";

const Landing = () => {
  return (
    <>
      <section id="story">
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3 ">
              <div className="row bg-white">
                <div
                  className="col-md-12 mt-3 rounded border-story"
                  style={{ overflow: "scroll", width: "100vh" }}
                >
                  <div>
                    <span>
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile m-3"
                      />
                    </span>
                    <span>
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile m-3"
                      />
                    </span>
                    <span>
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile m-3"
                      />
                    </span>
                    <span>
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile m-3"
                      />
                    </span>
                    <span>
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile m-3"
                      />
                    </span>
                    <span>
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile m-3"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="row bg-white my-3 ">
                <div className="col-md-12 border-story rounded">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex align-items-center">
                        <div className="col-1">
                          <img
                            src={photoProfile}
                            alt="image"
                            className="img-fluid rounded-circle image-feed my-3"
                          />
                        </div>
                        <div className="col-9">
                          <p className="fw-bold">agusdwimilniadi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
