<template>
  <div class="container">
    <div class="section-header">
      <h1 class="fw-heavy">Archives</h1>
      <h1 class="fw-light">All</h1>
    </div>
    <div>
      <table>
        <thead>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project">
            <td v-for="column in columns" :key="column">
              {{ project[column] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      columns: ["Type", "Title", "Description", "Technologies", "Links"],
      projects: [
        {
          Type: "Personal",
          Title: "Ticketing Application",
          Technologies: [
            "Kubernetes",
            "Docker",
            "Node.js",
            "Express",
            "React",
            "Mongo DB",
          ],
          Description:
            "An online microservices ticketing application similar to ticketmaster that enables users to buy, sell and refund event tickets.",
          Links: "",
        },
        {
          Type: "Client",
          Title: "Granger Mechanical Repairs",
          Technologies: ["Docker", "Vue", "C#"],
          Description:
            "A website to help GMR build on online presence and display their services for customers.",
        },
        {
          Type: "Personal",
          Title: "Ideas Board",
          Technologies: [".Net Core", "Docker", "Vue", "SQL"],
          Description:
            "A simple Trello/Jira lookalike. Built using Vue, .Net framework, SignalR and deployed to Digital Ocean.",
        },
        {
          Type: "Client",
          Title: "QPS Application Design",
          Technologies: ["Sketch"],
          Description:
            "As part of a phase 1 of our university capstone project, I designed the Queensland Polices new Fraud Detection platform.",
        },
        {
          Type: "Personal",
          Title: "Twitter Sentiment Analysis",
          Technologies: ["Node.js", "Express", "React", "AWS"],
          Description:
            "Cryptocurrency sentiment analysis on Twitter posts. Stateless application that uses Elasticache and S3 on AWS and built using React and Node.js. ",
        },
        {
          Type: "Client",
          Title: "PowerTorq",
          Technologies: ["Vue", "Docker", "C#"],
          Description:
            "As part of a university capstone project I created designs for the Queensland Polices new Fraud Detection platform.",
        },
      ],
    };
  },
};
</script>
