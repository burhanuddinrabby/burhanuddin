import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './Portfolio';

const Project = () => {
    const { id } = useParams();
    const project = projects.find(p => parseInt(p._id) === parseInt(id))
    return (
        <div>
            <img src={project.img} alt="" />
        </div>
    );
};

export default Project;