<template>
  <div>
    <div class="hero">
      <div class="container d-flex">
        <div>
          <h4 class="">Hi, my name is</h4>
          <h1 class="text fw-heavy">Connor Brodie</h1>
          <h1 class="text fw-heavy" style="margin-bottom: 30px; color: #fd2755">
            I build things that work.
          </h1>
          <h4 class="fw-light">
            I'm a 3rd year computer science student specialising in building
            (and occasionally designing) intuitive digital experiences.
          </h4>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="section-header">
          <h1 class="text-light fw-heavy">Skills</h1>
          <h1 class="text-light fw-light">Core Competencies</h1>
        </div>
        <div class="grid-icons">
          <font-awesome-icon
            v-for="icon in technologies"
            :key="icon"
            class="icon-lg ms-1"
            :icon="[icon.prefix, icon.suffix]"
            :style="{ color: icon.color }"
            v-tippy="{ content: icon.name, animation: 'scale' }"
          />
          <svg
            style="color: #4e2acd"
            class="svg-inline--fa fa-sketch fa-w-16 icon-lg ms-1"
            width="456"
            height="456"
            viewBox="0 0 456 456"
            fill="#646a78"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="456"
              height="456"
              fill="currentcolor"
              v-tippy="{ content: '.Net Core', animation: 'scale' }"
            />
            <path
              d="M81.2738 291.333C78.0496 291.333 75.309 290.259 73.052 288.11C70.795 285.906 69.6665 283.289 69.6665 280.259C69.6665 277.173 70.795 274.529 73.052 272.325C75.309 270.121 78.0496 269.019 81.2738 269.019C84.5518 269.019 87.3193 270.121 89.5763 272.325C91.887 274.529 93.0424 277.173 93.0424 280.259C93.0424 283.289 91.887 285.906 89.5763 288.11C87.3193 290.259 84.5518 291.333 81.2738 291.333Z"
              fill="white"
            />
            <path
              d="M210.167 289.515H189.209L133.994 202.406C132.597 200.202 131.441 197.915 130.528 195.546H130.044C130.474 198.081 130.689 203.508 130.689 211.827V289.515H112.149V171H134.477L187.839 256.043C190.096 259.57 191.547 261.994 192.192 263.316H192.514C191.977 260.176 191.708 254.859 191.708 247.365V171H210.167V289.515Z"
              fill="white"
            />
            <path
              d="M300.449 289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z"
              fill="white"
            />
            <path
              d="M392.667 187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>

    <div ref="work">
      <div class="container">
        <div class="section-header">
          <h1 class="fw-heavy">Work</h1>
          <h1 class="fw-light">Featured Projects</h1>
        </div>

        <div class="grid">
          <project
            class=""
            v-for="project in projects"
            :key="project"
            :img="project.img"
            :imgBackground="project.imgBackgroundColor"
            :type="project.description"
            :title="project.title"
            :technologies="project.technologies"
            :links="project.links"
          />
        </div>
        <!-- <div class="text-center section-footer">
          <a href="#" class="shadow-underline fs-5 fw-light">View More</a>
        </div> -->
      </div>
    </div>

    <div class="bg-in" ref="experience">
      <div class="container">
        <div class="section-header">
          <h1 class="fw-heavy">Experience</h1>
          <h1 class="fw-light">Where I've Worked</h1>
        </div>
        <tabs>
          <tab
            v-for="company in companies"
            :key="company"
            :title="company.name"
          >
            <div class="tab-header">
              <div class="d-flex">
                <h4 class="fw-heavy">
                  <span> {{ company.jobTitle }}</span>
                  <span class="company pass">
                    @
                    <a
                      class="shadow-underline"
                      :href="company.link"
                      target="_blank"
                    >
                      {{ company.name }}
                    </a></span
                  >
                </h4>
              </div>
              <h4 class="fw-light">{{ company.employmentTime }}</h4>
            </div>
            <ul>
              <li v-for="experience in company.experience" :key="experience">
                {{ experience }}
              </li>
            </ul>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import project from "@/components/Project";
import tab from "@/components/Tab";
import tabs from "@/components/Tabs";
import "tippy.js/animations/scale.css";

export default {
  name: "Home",
  components: { project, tab, tabs },
  data: function () {
    return {
      projects: [
        {
          img: require("../images/sentiment.png"),
          imgBackgroundColor: "#212129",
          type: "Personal",
          title: "CryptoCrowd",
          technologies: ["Node.js", "Express", "React", "AWS"],
          description:
            "Cryptocurrency sentiment analysis on Twitter posts. This is a Stateless application that uses Elasticache and S3 on AWS and built using React and Node.js.",
          links: [
            {
              icon: "github-square",
              style: "fab",
              link: "https://github.com/conbrodie/crypto-crowd",
            },
            {
              icon: "external-link-square",
              style: "far",
              link: "http://cryptomate-env.eba-ejtudum2.ap-southeast-2.elasticbeanstalk.com/",
            },
          ],
        },
        {
          img: require("../images/api.png"),
          imgBackgroundColor: "#212129",
          type: "Personal",
          title: "Kanban API",
          technologies: ["C#", "Docker", "SQL"],
          description:
            "An API designed to simulate a simple kanban board. Built using .Net core framework and uses swagger for API documentation.",
          links: [
            {
              icon: "github-square",
              style: "fab",
              link: "https://github.com/conbrodie/kanabn-api",
            },
          ],
        },
        {
          img: require("../images/rubiks.png"),
          imgBackgroundColor: "#212129",
          type: "Personal",
          title: "2x2x2 Rubiks Solver",
          technologies: ["Python"],
          description:
            "A program that uses breadth-first search to calculate the shortest path from a scrambled rubiks cube configuation to a solved configuration.",
          links: [
            {
              icon: "github-square",
              style: "fab",
              link: "https://github.com/conbrodie/rubik-solver",
            },
          ],
        },
        {
          img: require("../images/qps-logo.png"),
          imgBackgroundColor: "#212129",
          type: "Personal",
          title: "QPS Application Design",
          technologies: ["Sketch"],
          description:
            "I designed the Queensland Polices new Fraud Detection platform and authored the technical documentation for phase 1 of our university capstone project.",
          links: [
            {
              icon: "external-link-square",
              style: "far",
              link: "https://www.google.com.au",
            },
          ],
        },
        {
          img: require("../images/g.png"),
          imgBackgroundColor: "#212129",
          type: "Client",
          title: "Granger Mechanical Repairs",
          technologies: ["Docker", "Vue", "C#"],
          description:
            "A website to help GMR build on online presence and display their services for customers.",
          links: [
            {
              icon: "github-square",
              style: "fab",
              link: "https://www.google.com.au",
            },
            {
              icon: "external-link-square",
              style: "far",
              link: "https://www.google.com.au",
            },
          ],
        },
        {
          img: require("../images/powertorq.png"),
          imgBackgroundColor: "#212129",
          type: "Personal",
          title: "PowerTorq",
          technologies: ["Vue", "Docker", "C#"],
          description:
            "A website created to improve PowerTorq's reach and sales. Built using Vue and C# and deployed to Digital Ocean.",
          links: [
            {
              icon: "external-link-square",
              style: "far",
              link: "https://www.powertorq.com.au",
            },
          ],
        },
      ],
      technologies: [
        {
          prefix: "fab",
          suffix: "github-square",
          color: "#c3c3c4",
          name: "Github",
        },
        { prefix: "fab", suffix: "vuejs", color: "#08ad7e", name: "Vue.js" },
        { prefix: "fab", suffix: "node", color: "#519842", name: "Node.js" },
        { prefix: "fab", suffix: "css3-alt", color: "#ff5400", name: "CSS" },
        {
          prefix: "fab",
          suffix: "sketch",
          color: "#ffb200",
          name: "Sketch",
        },
      ],
      companies: [
        {
          name: "ITDSolutions",
          jobTitle: "Freelance Software Developer",
          employmentTime: "2019 to Present",
          experience: [
            "Write modern, performant, maintainable code for a diverse array of client projects.",
            "Work with a variety of different languages, platforms and frameworks such as JavaScript, Vue, .Net, Digital Ocean.",
            "Met with clients to discuss project requiremnts.",
          ],
          link: "",
        },
        {
          name: "Wicet",
          jobTitle: "UI Designer",
          employmentTime: "2017 to 2018",
          experience: [
            "Researched and designed multiple user interfaces for critical internal applications.",
            "Communicated with multi-disciplinary teams of engineers, solution architects and project managers on a daily basis.",
            "Branding for public newsletters and internal project proposals.",
          ],
          link: "https://www.wicet.com.au/IRM/content/default.aspx",
        },
      ],
    };
  },
  methods: {
    goTo(ref) {
      var element = this.$refs[ref];
      var topOfElement = element.offsetTop;

      window.scrollTo(0, topOfElement);
    },
  },
  mounted() {
    this.emitter.on("element", (refName) => {
      this.goTo(refName);
    });
  },
};
</script>
