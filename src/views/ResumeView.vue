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
          Designed and maintained a mission-critical Loyalty system using microservices and
          event-driven design, supporting 20k–200k events daily.
        </li>
        <li>
          Led development of the Invest product, designed for integration with multiple Fund Houses.
        </li>
        <li>
          Used Golang, MySQL RDS, Redis, AWS SQS/Kafka, REST/protobuf APIs, and Kubernetes with
          Terraform deployment.
        </li>
        <li>Collaborated cross-functionally with teams from Cards, Deposits, and Payments.</li>
      </ul>

      <p>
        <strong>Garena</strong> – Full Stack Software Engineer<br />
        <em>Jul 2022 – Sep 2022</em>
      </p>
      <ul>
        <li>Built REST APIs and backend logic in Golang.</li>
        <li>
          Debugged live game events and used Redis for state management and Kafka/MySQL for
          analytics.
        </li>
      </ul>

      <p>
        <strong>Barghest Building Performance</strong> – Software Engineer Intern<br />
        <em>Jan 2021 – Jul 2021</em>
      </p>
      <ul>
        <li>Developed frontend features using ReactJS.</li>
        <li>Built Python automation scripts improving data monitoring by 20%.</li>
        <li>Used Tableau for data visualization in the web app.</li>
      </ul>
    </section>

    <section>
      <h2>PROJECTS</h2>
      <p>
        <strong>Stats Bot (Full Stack Project)</strong><br />
        <em>Jan 2022 – Dec 2022</em>
      </p>
      <ul>
        <li>Built a stat-recording bot using Flask, MongoDB (v1) and Golang, Redis, Vue (v2).</li>
        <li>Handled user inputs via Telegram APIs and bot integrations.</li>
      </ul>
    </section>

    <section>
      <h2>AWARDS</h2>
      <p>
        <strong>GXS Bank Tomorrowthon – Champion</strong><br />
        <em>Mar 2024</em>
      </p>
      <ul>
        <li>Ideated and built a GenAI feature for the GXS app's Savings Pockets.</li>
        <li>Built the backend API service to retrieve and format AI-generated savings goals.</li>
      </ul>
    </section>

    <section>
      <h2>SKILLS</h2>
      <p>
        <strong>Languages:</strong> Python, Golang<br />
        <strong>Human Languages:</strong> English, Chinese
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
