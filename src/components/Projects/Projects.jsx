import React from 'react'
import "./Projects.css"
import project1 from "../../Assets/project1.png"
import project2 from "../../Assets/project2.png"
import project3 from "../../Assets/project3.png"
import project4 from "../../Assets/project4.png"

const Projects = () => {
    const projects = [{
        "name": "Ecommerce Website Design",
        "description": "    developed a responsive e-commerce website featuring user-friendly navigation, secure payment integration, and efficient product management. The site includes user accounts, a dynamic shopping cart, and order tracking functionalities. Built with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, this project highlights my full-stack development skills and ability to create seamless online shopping experiences.",
        "image": project1,
    },
    {
        "name": "Gemini Clone",
        "description": "I created a Gemini Clone that replicates the core functionalities of the Gemini cryptocurrency exchange platform. The project includes secure user authentication, real-time trading features, and a comprehensive dashboard for portfolio management. Developed using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, this project showcases my skills in full-stack development and my ability to build complex, secure financial applications.",
        "image": project2,
    },
    {
        "name": "Vertual R",
        "description": "I designed and developed a visually appealing and responsive front-end application that enhances user experience through intuitive navigation and interactive elements. Utilizing HTML, CSS, JavaScript, and React, this project demonstrates my proficiency in modern front-end technologies and my ability to create dynamic and user-centric web interfaces.",
        "image": project3,
    },

    ]
    return (
        <div className='projects'>
            <div className="heading">
                <h2>Projects</h2>
                <hr />
            </div>
            <div className="project-main">
            {
                projects.map((p) => (


                    <div className='project-elements'>
                        <img src={p.image} alt="" />
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <div className='project-btn'>
                            <button>VIEW</button>
                            <button>SOURCE</button>
                        </div>
                    </div>
                ))


            }
            </div>
        </div>
    )
}

export default Projects
