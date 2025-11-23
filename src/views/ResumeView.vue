<template>
  <button class="print-button" @click="downloadPDF">Download as PDF</button>
  <div id="resume-content" class="resume-container">
    <!-- Your resume content goes here, e.g.: -->
    <h1>TAN TAY SIANG RONALD</h1>
    <p class="contact">
      Mobile: +65 9472 4878 |
      <a href="mailto:ronaldtants@gmail.com">ronaldtants@gmail.com</a> |
      <a href="https://www.linkedin.com/in/ronald-tan-tay-siang/" target="_blank">LinkedIn</a> |
      <a href="https://ronaldtants.github.io/resume/" target="_blank">Website</a>
    </p>

    <section>
      <h2>EDUCATION</h2>
      <div class="subheading">
        <span>Nanyang Technological University, Singapore</span>
        <span class="date">Aug 2018 – Jun 2022</span>
      </div>
      <p>Bachelor of Engineering in Computer Science with Honours (Distinction)</p>
      <p>Specialization: Data Science and Artificial Intelligence</p>
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
          Designed and launched a mission-based loyalty system from 0 to 1 with extendibility to
          support future campaign types
        </li>
        <li>
          Collaborated with 4 Backend engineers and an external vendor to develop an event-driven
          microservice architecture, enabling real-time eligibility checks and batch cashback
          processing
        </li>
        <li>
          Partnered across all verticals - engineering, product, project management, business, and
          operations - to deliver a loyalty solution targeting customer retention and new user
          acquisition, achieving ~10% completion rates
        </li>
        <li>
          Maintained 99.99% system uptime while processing 20k-200k daily events and crediting ~8k
          cashbacks per day
        </li>
      </ul>

      <p class="sub-para-header">Invest Team</p>
      <ul>
        <li>
          Worked with 2-10 engineers to build a new investment product from 0 to 1 achieving $18m
          AUM in 4 months and projecting $1b by end 2026
        </li>
        <li>
          Led automation efforts that reduced manual reconciliation work by over 70%, streamlining
          operations through >80% process automation
        </li>
        <li>
          Delivered end-to-end settlement functionality by collaborating closely with Operations and
          other stakeholders to implement synchronous batch processing
        </li>
      </ul>

      <p class="sub-para-header">Tech Stack</p>
      <ul>
        <li>
          Engineered high-performance infrastructure using Golang, MySQL RDS and Redis for
          high-performance data processing
        </li>
        <li>
          Integrated AWS SQS and Kafka for reliable message queuing, and RESTful HTTP APIs for
          client-server communication
        </li>
        <li>
          Containerized services with ECR and Kubernetes hosted on AWS while deploying pipelines and
          infrastructure with Terraform
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
          Developed and optimized Backend logic using Golang, and deployed to production; debugged
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
          of company’s data monitoring tools by up to 20%
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
        <span
          ><a href="https://mahjong-stats-tracker-frontend.onrender.com" target="_blank"
            >Mahjong Stats Tracker</a
          ></span
        >
        <span class="date">Oct 2025 – Nov 2025</span>
      </div>
      <ul>
        <li>Integrated a full stack project that is used to record stats for mahjong</li>
        <li>
          Frontend and Backend web services are hosted on Render Cloud with the Backend connecting
          to Supabase online database
        </li>
        <li>
          Backend incorporates best practices for code design to implement a Golang server and
          Frontend utilizes Vue framework, communicating by REST APIs
        </li>
        <li>
          Full stack project is containerized with docker to be deployable on any cloud hosting
        </li>
      </ul>
    </section>

    <section>
      <h2>AWARDS</h2>
      <div class="subheading">
        <span>GXS Bank Hackathon (Tomorrowthon) – Champion</span>
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

<script lang="ts">
import { defineComponent } from 'vue'
import html2pdf from 'html2pdf.js'
import jsPDF from 'jspdf'
export default defineComponent({
  name: 'ResumeView',
  methods: {
    downloadPDF(): void {
      const element = document.getElementById('resume-content')
      if (!element) return

      html2pdf()
        .from(element)
        .set({
          margin: 0.5,
          filename: 'Tan_Tay_Siang_Ronald_Resume.pdf',
          image: { type: 'jpeg', quality: 1 },
          html2canvas: { scale: 5 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        })
        .save()

      /* 
      html2pdf converts the HTML content to an image then adds the image to a PDF. 
      jsPDF converts the HTML content directly to a PDF, so it does not include the hyperlinks attached.
      */

      // const doc = new jsPDF('p', 'pt', 'a4')
      // const resumeElement = document.getElementById('resume-content')
      // if (resumeElement) {
      //   doc.html(resumeElement, {
      //     callback: function (doc) {
      //       doc.save('Tan_Tay_Siang_Ronald_Resume.pdf')
      //     },
      //     x: 10,
      //     y: 10,
      //     html2canvas: {
      //       scale: 0.72, // jsPDF handles layout better here
      //     },
      //   })
      // }
    },
  },
})
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
  border-bottom: 4px solid #444;
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
  border-bottom: 2px solid #aaa;
}
.sub-para-header {
  font-size: 1rem;
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
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
.print-button {
  background-color: #1a73e8;
  color: white;
  padding: 8px 16px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 4px;
}
/* Prevent page breaks in key elements */
@media print {
  .print-button {
    display: none;
  }

  section,
  ul,
  li,
  p,
  h2 {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}
</style>
