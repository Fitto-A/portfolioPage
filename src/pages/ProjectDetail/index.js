import React from 'react';
import './style.scss';
import { useParams } from 'react-router';

const ProjectDetail = () => {

    const { projectId } = useParams();


    return (
        <div className='project-detail'>
            {projectId}
        </div>
    )
}

export default ProjectDetail
