import React from 'react';
import htmlCssJs from '../assets/img/html-css-js.png';
import bootstrapImg from '../assets/img/bootstrap.png';
import javaImg from '../assets/img/java.jpeg';
import mysqlImg from '../assets/img/mysql.png';
import oracleImg from '../assets/img/oracle.png';
import mongodbImg from '../assets/img/mongodb-img.jpg';
import reactImg from '../assets/img/Reactjs.png';

const Skills = () => {
  const skills = [
                    { img: htmlCssJs, title: 'Front - End' },
                    { img: bootstrapImg, title: 'Bootstrap' },
                    { img: javaImg, title: 'Java' },
                    { img: mysqlImg, title: 'MySQL' },
                    { img: oracleImg, title: 'Oracle' },
                    { img: mongodbImg, title: 'MongoDb' },
                    { img: reactImg, title: 'React JS' }
                ];

  return (
    <section className="container" id="myskill">
      <h1 className=" py-3">My Skills</h1>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
        {skills.map((skill, index) => (
          <div key={index} className="col shadow-lg p-3 mb-1 bg-body-tertiary ">
            <div className="card h-100 border-4">
              <img src={skill.img} className="card-img h-100" alt={`${skill.title}-img`} />
              <div className="card-body text-center p-1">
                <h5 className="card-title fs-4 ">{skill.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Skills;
