import React from 'react';

const Project = ({image, title, description, remove, link}) => {
  return(
    <section className='project'>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank"><img src={require('../images/' + image)} alt="{alt}" /></a>
      <button className='escape' onClick={() => remove()}>ⓧ</button>
    </section>
  )
}

export default Project;
