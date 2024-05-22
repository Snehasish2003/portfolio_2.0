import React from 'react'
import "./Projects.css"
import project1 from "../../Assets/project1.png"
import project2 from "../../Assets/project2.png"
import project3 from "../../Assets/project3.png"
import project4 from "../../Assets/project4.png"

const Projects = () => {
    const projects = [{
        "name": "Ecommerce Website Design",
        "description": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sed numquam mollitia tenetur quidem placeat dignissimos aperiam labore aut culpa ipsam magni accusantium voluptate cum ipsum obcaecati quo necessitatibus excepturi.",
        "image": project1,
    },
    {
        "name": "LMS Website Design",
        "description": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sed numquam mollitia tenetur quidem placeat dignissimos aperiam labore aut culpa ipsam magni accusantium voluptate cum ipsum obcaecati quo necessitatibus excepturi.",
        "image": project2,
    },
    {
        "name": "Rymo Ecommerce Design",
        "description": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sed numquam mollitia tenetur quidem placeat dignissimos aperiam labore aut culpa ipsam magni accusantium voluptate cum ipsum obcaecati quo necessitatibus excepturi.",
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
