import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import practicalTeamImage from './images/practical-team.jpg';
import neuralNetImage from './images/neural_network.jpeg';
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

      <div className="box alt container">
        <Content
          side="left"
          link="https://github.com/AIDA-UIUC/datascience-workshops"
          icon="fa-signal"
          image={practicalTeamImage}
          title="Data Analytics Workshops"
          meetingTime="TBD"
          body={`Teaching foundational data science topics and Python tools in individualized sessions. These sessions are designed to be accessible to students from any background, hands-on, and independent from each other.`}
        />
        <Content
          side="right"
          link="https://drive.google.com/drive/folders/1bLEPZ4z6V1Nl_YR5gWfgbDQCcC4D6hjH?usp=sharing"
          icon="fa-code"
          image={sweImage}
          title="Supported Team Projects"
          meetingTime="TBD"
          body={`Open-ended, real-world experience for students interested in data science. Past projects have included mental health sentiment analysis, meme and tweet generators, and much more. Check them out on our GitHub!`}
        />
        <Content
          side="left"
          link="https://github.com/AIDA-UIUC/ML-Workshops"
          icon="fa-cogs"
          image={neuralNetImage}
          title="Artificial Intelligence Workshops"
          meetingTime="TBD"
          body={`Targeted towards experienced programmers and those seeking to gain insight into the algorithms behind AI/ML. These sessions are designed to challenge you on both the theory and implementation.`}
        />
        <Content
          side="right"
          link=""
          icon="fa-book"
          image={resImage}
          title="AI Research Discussion Group"
          meetingTime="TBD"
          body={`Come together to discuss the latest papers and developments in data science.`}
        />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
