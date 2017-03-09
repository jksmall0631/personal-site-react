import React from 'react';

const Project = ({image, title, description, remove}) => {
  return(
    <section className='project'>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={require('../images/' + image)} alt="{alt}" />
      <button className='escape' onClick={() => remove()}>ⓧ</button>
    </section>
  )
}

export default Project;
