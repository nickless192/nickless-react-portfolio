import Header from './components/Header';
import './App.css';
import Project from './components/Project';
import { useState } from 'react';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [projects] = useState([
    {
      name: 'Run Buddy',
      description: `Run Buddy is the culmination of my first deep-dive into front-end development; using HTML, CSS and JS, I developed a website for Run Buddy that showcases the company's objective, their team of trainers and how they can help you become a better you. The site is also equipped with a form to engage the potential new customers that allows them to get in touch with Run Buddy personel, as well as a Reach Out section so customers can message Run Buddy or find their address, phone number and email address.`,
      screenshotURL: 'run-buddy',
      githubURL: 'https://nickless192.github.io/run-buddy/'
    },
    {
      name: 'Horiseon',
      description: `Our task was to refactor the provided code for the Horiseon landing site to improve its legibility and make it more accesible`,
      screenshotURL: 'horiseon',
      githubURL: 'https://github.com/nickless192/HoriseonLandingPage'
    }
  ]);
  const [sectionSelected, setSectionSelected] = useState("About Me");

  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div>
      <Header
        projects= {projects}
        currentProject= {currentProject}
        setCurrentProject= {setCurrentProject}
        sectionSelected= {sectionSelected}
        setSectionSelected = {setSectionSelected}

      />
      <About />
      <Project
        currentProject= {currentProject}
      />
      <Footer />
    </div>
  );
}

export default App;
