let steps = document.querySelector("#steps");
let devSteps = [
  {
    complete: false,
    number: 1,
    title: "Initial Development",
    text: "During the initial development cycle, a minimum viable product will be developed in a closed-source environment. Early feature development will focus on functionality over stability. During this time data models will change dramatically and no production features will be available. ",
  },
  {
    complete: false,
    number: 2,
    title: "Alpha Testing",
    text: "Alpha testing will allow invited individuals to test the platform. Additional focus will be spent on a end-user-facing identity management portal (instead of API-only access). Documentation for interacting with the API will also be written and published.",
  },
  {
    complete: false,
    number: 3,
    title: "Beta Testing",
    text: "Once the management portal is stable, a larger pool of testers will be invited to test the platform for its beta test. In this development phase, a greater focus will be spent on stability, data-security, and readying production infrastructure.",
  },
  {
    complete: false,
    number: 3,
    title: "Limited Rollout - Version 1.0",
    text: "Development will continue as access to the platform rolls out across various regions. Rollout depends on user interest and supported details. All regions will have a localized certified extension for their government issued ID. This will take the longest as a verification of government ID will need to occur before each new user is permitted onto the platform.",
  },
  {
    complete: false,
    number: 4,
    title: "Commercial/Industrial Release",
    text: "New localizations will continue to be added added for end-users and a focus on organizations and membership will be included in the release. Additionally, this will include the first paid tiers. This will enable companies to leverage NosracID as an out-of-the-box IDaaS platform that lets end-users use the same Id across platforms, while still maintaining privacy and complete data controls.",
  },
];

let tickIcon = `<svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />`;

steps.innerHTML = devSteps
  .map(function (devSteps) {
    return (
      `<div class='step'>` +
      `<div class='number ${devSteps.complete && "completed"}'>` +
      (devSteps.complete ? tickIcon : devSteps.number) +
      `</div>` +
      `<div class='info'>` +
      `<p class='title'>${devSteps.title}</p>` +
      `<p class='text'>${devSteps.text}</p>` +
      "</div>" +
      "</div>"
    );
  })
  .join("");
