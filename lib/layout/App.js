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
      grabContact: false,
    }
    this.grabProject = this.grabProject.bind(this);
    this.grabContact = this.grabContact.bind(this);
    this.remove = this.remove.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  grabProject(project){
    this.setState({currentProject: project});
  }

  grabContact(){
    this.setState({grabContact: true});
  }

  remove(){
    this.setState({currentProject: ''});
  }

  removeContact(){
    this.setState({grabContact: false});
  }

  renderProject(){
    const project = this.state.currentProject;
    if(this.state.currentProject.title){
      return (
          <Project image={project.image} title={project.title} description={project.description} remove={this.remove}/>
      )
    }
  }

  renderContact(){
    if(this.state.grabContact){
      return (
          <Contact remove={this.removeContact}/>
      )
    }
  }

  render(){
    return(
      <div>
        <Header grabContact={this.grabContact}/>
        <About />
        <div className='divider'>
        </div>
        <Work grabProject={this.grabProject} />
        {this.renderProject()}
        {this.renderContact()}
      </div>
    )
  }
}
