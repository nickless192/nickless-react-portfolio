import Header from './components/Header';
import './App.css';
import Project from './components/Project';
import { useState } from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // TO DO: retrieve this info from github and have a separate flag to show/hide from portfolio
  const [projects] = useState([
    {
      name: 'Inner Pattern',
      description: `A MERN stack single-page application where users can track their thoughts and 'moods' through journal entries`,
      screenshotURL: 'inner-pattern',
      githubURL: 'https://github.com/Tyl3r-s/InnerPattern',
      deployedURL: 'http://innerpattern.herokuapp.com/'
    },
    {
      name: 'Run Buddy',
      description: `The Run Buddy website showcases the company's objective, their team of trainers and how they can help you become a better you. The site is also equipped with a form to engage the potential new customers , as well as a Reach Out section so customers can message Run Buddy or find their information.`,
      screenshotURL: 'run-buddy',
      githubURL: 'https://github.com/nickless192/run-buddy',
      deployedURL: 'https://nickless192.github.io/run-buddy'
    },
    {
      name: 'Nickless Weather Radar',
      description: `Our task was to refactor the provided code for the Horiseon landing site to improve its legibility and make it more accesible.`,
      screenshotURL: 'nickless-weather-radar',
      githubURL: 'https://github.com/nickless192/nickless-weather-radar',
      deployedURL: 'https://nickless192.github.io/nickless-weather-radar/'
    },
    {
      name: 'Nickless Quizzer',
      description: `Welcome to the Nickless Quizzer! This assessment tool will present the user with up to 20 multiple choice questions to answer within 75 seconds. For each correct answer, a point is awarded to the user; for each wrong answer, 5 seconds are deducted from the timer. The assessment ends when either all 20 questions have been answered or if the timer runs out.`,
      screenshotURL: 'nickless-quizzer',
      githubURL: 'https://github.com/nickless192/nickless-quizzer',
      deployedURL: 'https://nickless192.github.io/nickless-quizzer/'
    },
    {
      name: 'Movie Search',
      description: `The idea behind the project was to provide a central location where movie/tv show information and availability  could be attained by the user. The site eliminates the need to make extra searches for streaming availability, trailers, movie info, and now playing information for theatres.`,
      screenshotURL: 'movie-search',
      githubURL: 'https://github.com/nickless192/Movie-Search',
      deployedURL: 'https://nickless192.github.io/Movie-Search/'
    },
    {
      name: 'Travel Blog',
      description: 'We are a travel blog company that was created with the avid traveler in mind.  We built this site as a way to allow for the greater community to come together and provide quality feedback on locations around the world.  This is a site that is created for travelers with reviews by travelers.',
      screenshotURL: 'travel-blog',
      githubURL: 'https://github.com/ksknight81/travel-blog',
      deployedURL: 'https://cryptic-fortress-47050.herokuapp.com/home'
    },
    {
      name: 'Nickless Socialize API',
      description: `The Nickless Socialize API was developed to enable its users to manage their social medial platform; our API is able to handle GET, POST, PUT and DELETE requests to retrieve, create, update or delete users, thoughts, reactions and friends (as applicable).`,
      screenshotURL: 'nickless-socialize-api',
      githubURL: 'https://github.com/nickless192/nickless-socialize-api',
      deployedURL: '#'
    }
  ]);
  const [sectionSelected, setSectionSelected] = useState("About Me");

  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div className="m-2 bg-gray-200 shadow border max-w-full h-auto">
      <Header
        projects= {projects}
        currentProject= {currentProject}
        setCurrentProject= {setCurrentProject}
        sectionSelected= {sectionSelected}
        setSectionSelected = {setSectionSelected}

      />
      {sectionSelected === 'About Me' &&
        <About />
      }
      {sectionSelected === 'My Resume' &&
        <Resume />
      }
      {sectionSelected === 'Contact Me' &&
        <Contact />      
      }
      {sectionSelected === 'My Portfolio' && 
        <Project
          currentProject= {currentProject}
        />
      }
      <Footer />
    </div>
  );
}

export default App;
