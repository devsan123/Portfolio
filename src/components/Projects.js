import React from 'react';
import amazonCloneImg from '../assets/img/amazon-clone-img.png';
import tempConvrImg from '../assets/img/temp-convr-img.png';
import sciCalcImg from '../assets/img/Sci_Calc.png';

const Projects = () => {
  const projects = [
                        { img: amazonCloneImg, title: 'Amazon Clone', link: 'https://amazon-frontpage-clone.netlify.app' },
                        { img: tempConvrImg, title: 'Temperature Conversion', link: 'https://reactjs-temperature-convertor.netlify.app' },
                        { img: sciCalcImg, title: 'Scientific Calculator', link: 'https://reactjs-scientific-calculator.netlify.app' }
                   ];

  return (
    <section className="container" id="myproject">
      <h1 className="my-3 py-4">My Projects</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <div key={index} className="col">
            <div className="card h-100 border-4">
              <img src={project.img} className="card-img-top h-100" alt={`${project.title}`} />
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='mt-5'/>
    </section>
  );
};

export default Projects;
