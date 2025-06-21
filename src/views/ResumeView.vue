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
      <div class="subheading">
        <span>Nanyang Technological University, Singapore</span>
        <span class="date">Aug 2018 – Jun 2022</span>
      </div>
      <p><em>Bachelor of Engineering in Computer Science with Honours (Distinction)</em></p>
      <p><em>Specialization: Data Science and Artificial Intelligence</em></p>
    </section>

    <section>
      <h2>WORK EXPERIENCE</h2>

      <div class="subheading">
        <span>GXS Bank</span>
        <span class="date">Feb 2023 – Current</span>
      </div>
      <p><em>Backend Software Engineer</em></p>
      <p class="sub-para-header">Loyalty Team</p>
      <ul>
        <li>
          Designed and implemented a mission-based loyalty system from 0 to 1 with extendibility to
          accommodate all future missions.
        </li>
        <li>
          Collaborated with all verticals (engineers, product managers, project managers, business
          and ops) from the bank to develop the loyalty product targeting customer retention and new
          user acquisition, achieving ~10% completion rates.
        </li>
        <li>
          Maintained the system with a 99.99% uptime while receiving 20k-200k events and crediting
          ~8k cashbacks daily.
        </li>
      </ul>

      <p class="sub-para-header">Invest Team</p>
      <ul>
        <li>
          Collaborated with a team of ~10 engineers to build an investment product from 0 to 1,
          expecting to bring a revenue of $500k in 5 months of launch.
        </li>
        <li>
          Led the end-to-end development with all verticals especially the Ops team to design and
          automate 80% of the reconciliation process and reduce manual effort by at least 70%.
        </li>
      </ul>

      <p class="sub-para-header">Tech Stack</p>
      <ul>
        <li>
          Engineered high-performance infrastructure using Golang, MySQL RDS and Redis for
          high-performance data processing.
        </li>
        <li>
          Utilized AWS SQS and Kafka for reliable message queuing, gRPC for inter-service
          communication, and REST APIs for client-server communication.
        </li>
        <li>
          Containerized the entire stack with ECR and Kubernetes hosted on AWS while deploying
          pipelines and infrastructure with Terraform.
        </li>
      </ul>

      <div class="subheading">
        <span>Garena</span>
        <span class="date">Jul 2022 – Sep 2022</span>
      </div>
      <p><em>Full Stack Software Engineer</em></p>
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

      <div class="subheading">
        <span>Barghest Building Performance</span>
        <span class="date">Jan 2021 – Jul 2021</span>
      </div>
      <p><em>Software Engineer Intern</em></p>
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
      <div class="subheading">
        <span>Stats Bot (Full Stack Project)</span>
        <span class="date">Jan 2022 – Dec 2022</span>
      </div>
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
      <div class="subheading">
        <span>GXS Bank Tomorrowthon – Champion</span>
        <span class="date">Mar 2024</span>
      </div>
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
  font-weight: bold;
}
.contact {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 2rem;
}
h2 {
  border-bottom: 2px solid #444;
  margin-top: 2rem;
  padding-bottom: 0.2rem;
  font-size: 1.25rem;
  font-weight: bold;
}
.subheading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
}
.sub-para-header {
  font-size: 1rem;
  /* border-bottom: 2px solid #aaa; */
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  /* color: #222; */
}
ul {
  margin-left: 1rem;
}
a {
  color: #1a73e8;
}
.date {
  font-weight: normal;
  font-style: italic;
  font-size: 1.05rem;
  color: #666;
}
</style>
