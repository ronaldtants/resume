<template>
  <div class="resume-container">
    <h1>TAN TAY SIANG RONALD</h1>
    <p class="contact">
      Mobile: +65 9472 4878 |
      <a href="mailto:ronaldtants@gmail.com">ronaldtants@gmail.com</a> |
      <a href="https://www.linkedin.com/in/ronald-tan-tay-siang/" target="_blank">LinkedIn</a>
    </p>

    <section>
      <h2>EDUCATION</h2>
      <p>
        <strong>Nanyang Technological University, Singapore</strong><br />
        Bachelor of Engineering in Computer Science with Honours (Distinction)<br />
        <em>Specialization: Data Science and Artificial Intelligence</em><br />
        Aug 2018 – Jun 2022
      </p>
    </section>

    <section>
      <h2>WORK EXPERIENCE</h2>

      <p>
        <strong>GXS Bank</strong> – Backend Software Engineer<br />
        <em>Feb 2023 – Current</em>
      </p>
      <ul>
        <li>
          Designed, implemented and maintained a mission-critical Loyalty system built with
          microservice architecture and an event-driven design, leveraging a rule engine service for
          real-time evaluation and scheduled reward crediting. It maintains a 100% uptime while
          receiving 20k-200k events and crediting ~8k rewards daily.
        </li>
        <li>
          Led end-to-end development of the Invest product from concept to production launch.
          Designed microservice architecture with event-driven design order processing and automated
          batch processing for settlement and reconciliation. It is built with scalability and
          extendibility for seamless integration with multiple Fund Houses to offer multiple
          investment products.
        </li>
        <li>
          Engineered high-performance infrastructure using Golang, MySQL RDS and Redis for
          high-performance data processing. Utilized AWS SQS and Kafka for reliable message queuing,
          protobuf and REST APIs for client-server communication. Containerized the entire stack
          with ECR and Kubernetes hosted on AWS while deploying pipelines and infrastructure with
          Terraform.
        </li>
      </ul>

      <p>
        <strong>Garena</strong> – Full Stack Software Engineer<br />
        <em>Jul 2022 – Sep 2022</em>
      </p>
      <ul>
        <li>Designed and implemented RESTful APIs built on HTTP requests in the Backend</li>
        <li>
          Developed and optimized Backend logics using Golang, and deployed to production; debugged
          and troubleshooted live events of games and players’ feedbacks
        </li>
        <li>
          Implemented quick and convenient access of players’ state by utilizing Redis, and
          collaborated with Ops team for performance analysis by implementing statistics collection
          using Kafka and MySQL
        </li>
      </ul>

      <p>
        <strong>Barghest Building Performance</strong> – Software Engineer Intern<br />
        <em>Jan 2021 – Jul 2021</em>
      </p>
      <ul>
        <li>Implemented Frontend features using ReactJS on the web application</li>
        <li>
          Developed a scalable automation script using multiple APIs in Python, improving efficiency
          of company’s data monitoring tools of up to 20%
        </li>
        <li>
          Plotted and maintained graphs using Tableau for visualization and analysis of data to be
          displayed on the web application
        </li>
      </ul>
    </section>

    <section>
      <h2>PROJECTS</h2>
      <p>
        <strong>Stats Bot (Full Stack Project)</strong><br />
        <em>Jan 2022 – Dec 2022</em>
      </p>
      <ul>
        <li>Integrated a full stack project that is used to record stats</li>
        <li>
          1st iteration designed and implemented RESTful APIs in the Backend by integrating Flask
          and MongoDB. Frontend utilizes open-source Telegram APIs and usage of Telegram bot to
          handle inputs from user
        </li>
        <li>
          2nd iteration implemented Backend using Golang, Redis hosted on docker and Frontend using
          Vue
        </li>
      </ul>
    </section>

    <section>
      <h2>AWARDS</h2>
      <p>
        <strong>GXS Bank Tomorrowthon – Champion</strong><br />
        <em>Mar 2024</em>
      </p>
      <ul>
        <li>
          Brainstormed, ideated and implemented a GenAI solution for a feature in the company’s
          product
        </li>
        <li>
          Utilized internally developed AI to automatically produce saving goals for users using the
          Saving Pockets feature in GXS App
        </li>
        <li>
          Developed the Backend service to call the API to the AI service, to retrieve and format
          the information to be displayed on Frontend
        </li>
      </ul>
    </section>

    <section>
      <h2>SKILLS</h2>
      <p>
        <strong>Programming Languages:</strong> Python, Golang<br />
        <strong>Languages:</strong> English, Chinese
      </p>
    </section>
  </div>
  <div class="links">
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
}
</script>

<style scoped>
.resume-container {
  max-width: 800px;
  margin: auto;
  padding: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff;
  color: #333;
  line-height: 1.6;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.contact {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 2rem;
}
h2 {
  border-bottom: 1px solid #ccc;
  margin-top: 2rem;
  padding-bottom: 0.2rem;
  font-size: 1.25rem;
}
ul {
  margin-left: 1rem;
}
a {
  color: #1a73e8;
}
</style>
