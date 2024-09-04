import React from 'react';
import myImage from '../assets/img/myimg.png';

const Introduction = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row align-items-center g-3 py-4">
        <div className="col-lg-6 text-center text-lg-start">
          <img
            src={myImage}
            alt="MyImage"
            className="img-fluid rounded-circle img-thumbnail"
          />
        </div>
        <div className="col-lg-6">
          <h3>Hello,</h3>
          <h1>I'm <span className="text-primary">Devsan</span></h1>
          <p>
            A Fresher Web Developer. I consider myself a responsible and
            organized person. I'm dedicated to applying my expertise to craft
            innovative solutions and positively impact projects.
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Introduction;
