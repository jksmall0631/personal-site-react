import React, {Component} from 'react';
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/About';
import Background from '../components/Background';
import Contact from '../components/Contact';
import Project from '../components/Project';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      currentProject: '',
    }
    this.grabProject = this.grabProject.bind(this);
    this.remove = this.remove.bind(this);
  }

  grabProject(project){
    this.setState({currentProject: project})
  }

  remove(){
    this.setState({currentProject: ''})
  }

  renderProject(){
    const project = this.state.currentProject;
    if(this.state.currentProject.title){
      return (
          <Project image={project.image} title={project.title} description={project.description} remove={this.remove}/>
      )
    }
  }

  render(){
    return(
      <div>
        <Header />
        <About />
        <div className='divider'>
        </div>
        <Work grabProject={this.grabProject} />
        {this.renderProject()}
      </div>
    )
  }
}
