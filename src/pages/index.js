import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import practicalTeamImage from './images/practical-team.jpg';
// import neuralNetImage from './images/neural_network.jpeg';
import sweImage from './images/software-engineer.jpg';
import resImage from './images/operations-research.jpg';

import Content from '../components/Content';

const IndexPage = () => (
  <Layout>

    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          Inspiring students from any background to reshape their perspective
          with data-driven decision making.
        </h2>
      </header>

      <header className="major container medium">
        <div id="calendar" style={{ margin: "auto" }}>
          <iframe src="https://calendar.google.com/calendar/embed?src=c_o1sp8oj8j92vlmrossjcplrbog%40group.calendar.google.com&ctz=America%2FChicago" style={{ border: "0", margin: "auto", display: "block" }} width="100%" height="400px" frameborder="0" scrolling="no" title="Google Calendar"></iframe>
        </div>
      </header>

      <div className="box alt container">
        <Content
          side="left"
          link="https://github.com/AIDA-UIUC/datascience-workshops"
          icon="fa-signal"
          image={practicalTeamImage}
          title="Workshops"
          meetingTime="Saturday | 1pm - 2pm"
          zoom="https://discord.gg/5WWNygTqKc"
          body={`Teaching foundational data science topics and Python tools in individualized sessions. These sessions are designed to be accessible to students from any background, hands-on, and independent from each other.`}
        />
        <Content
          side="right"
          link=""
          icon="fa-code"
          image={sweImage}
          title="Supported Team Projects"
          meetingTime="TBD- Projects meet on their own"
          zoom="https://discord.gg/8n2WDvzsja"
          body={`Open-ended, real-world experience for students interested in data science. Past projects have included mental health sentiment analysis, meme and tweet generators, and much more. Check them out on our GitHub!`}
        />
        <Content
          side="left"
          link=""
          icon="fa-book"
          image={resImage}
          title="AI Research Discussion Group"
          meetingTime="Sunday | 1pm - 2pm"
          zoom="https://illinois.zoom.us/j/89279043844?pwd=TjlzaWVtR3VQOFk4U1NxRGlzdW04UT09"
          body={`Come together to discuss the latest papers and developments in data science.`}
        />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
