import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import practicalTeamImage from './images/practical-team.jpg';
import neuralNetImage from './images/neural_network.jpeg';
import sweImage from './images/software-engineer.jpg';

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
          link="https://github.com/ADSA-UIUC/BeginnerWorkshopsSP19"
          icon="fa-signal"
          image={practicalTeamImage}
          title="Data Analytics Workshops"
          meetingTime="Workshops TBA on our Facebook"
          body={`Teaching foundational data science topics and Python tools in individualized sessions. These sessions are designed to be accessible to students from any background, hands-on, and independent from each other. Only come to workshops you are interested in!`}
        />
        <Content
          side="right"
          link="https://www.github.com/adsa-uiuc/advanced-workshops"
          icon="fa-cogs"
          image={neuralNetImage}
          title="Artificial Intelligence Workshops"
          meetingTime="Workshops TBA on our Facebook"
          body={`Targeted towards experienced programmers and those seeking to gain insight into the programming of machine learning algorithms. These sessions are designed to challenge you on both the theory and implementation.`}
        />
        <Content
          side="left"
          link="https://www.github.com/adsa-uiuc"
          icon="fa-code"
          image={sweImage}
          title="Supported Team Projects"
          meetingTime="Sunday's 2-3pm Siebel 1109"
          body={`Open-ended, real-world experience for students interested in data science. Past projects have included mental health sentiment analysis, meme and tweet generators, news web scrapers, and much more. Check them out on our GitHub!`}
        />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
