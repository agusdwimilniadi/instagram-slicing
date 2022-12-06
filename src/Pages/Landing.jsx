import React, { useEffect, useState } from "react";
import photoProfile from "./profile.jpeg";
import CardPost from "../Components/CardPost";
import axios from "axios";

const Landing = () => {
  const [data, setData] = useState({
    comments: "",
  });
  const [dataPostingan, setDataPostingan] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const fetchDataPostingan = async () => {
    const dataApi = await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .catch((err) => {
        console.log(err);
      });
    setDataPostingan(dataApi.data);
    // console.log(dataApi.data);
  };
  useEffect(() => {
    fetchDataPostingan();
  }, []);

  return (
    <>
      <section id="story">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 ">
              <div className="row bg-white">
                <div className="col-md-12 mt-3 rounded border-story">
                  <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                    <div
                      className="text-center"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={photoProfile}
                        alt="profile"
                        className="img-fluid rounded-circle story-profile mx-2 my-1  border-gradient"
                      />
                      <br />
                      <span className="fw-bold limit fs-6">agusdm</span>
                    </div>
                  </div>
                </div>
              </div>
              {dataPostingan.slice(0, 100).map((item) => {
                return (
                  <CardPost
                    image={item.thumbnailUrl}
                    dataProps={data}
                    caption={item.title}
                    handleChangeProps={handleChange}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
