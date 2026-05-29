const careerRoadmap = {
  "Software Engineer": [
    "Learn programming fundamentals (Python, Java, or C++)",
    "Build small projects to gain practical experience",
    "Earn a Bachelor’s degree in Computer Science or IT",
    "Apply for internships to gain real-world exposure",
    "Junior Developer → Senior Developer → Tech Lead → Architect"
  ],
  "Mechanical Engineer": [
    "Learn core mechanical engineering concepts",
    "Gain hands-on experience with CAD tools",
    "Earn a Bachelor’s degree in Mechanical Engineering",
    "Intern or work in manufacturing/automotive/aerospace",
    "Junior Engineer → Senior Engineer → Project Manager"
  ],
  "Civil Engineer": [
    "Study construction, materials, and structural design",
    "Earn a Bachelor’s degree in Civil Engineering",
    "Participate in site projects or internships",
    "Develop project management and planning skills",
    "Site Engineer → Senior Engineer → Construction Manager"
  ],
  "Digital Marketer": [
    "Learn SEO, SEM, content creation, and social media marketing",
    "Gain certifications in digital marketing",
    "Apply knowledge in real-world campaigns",
    "Develop analytical and communication skills",
    "Executive → Manager → Digital Marketing Head"
  ],
  "Entrepreneur": [
    "Learn business fundamentals and market research",
    "Identify problems and innovative solutions",
    "Start a small project or business",
    "Develop leadership, financial, and management skills",
    "Startup Founder → Business Owner → Industry Leader"
  ],
  "Teacher": [
    "Earn a Bachelor’s degree in the relevant subject",
    "Complete B.Ed. or NET/PhD",
    "Start teaching professionally",
    "Improve teaching skills",
    "Assistant Teacher → Senior Teacher → Principal"
  ],
  "Doctor": [
    "Complete MBBS + internship",
    "Specialize with MD/MS",
    "Gain clinical experience",
    "Continuous medical learning",
    "Junior Doctor → Specialist → Hospital Admin"
  ],
  "Lawyer": [
    "Earn LLB degree",
    "Pass Bar Council exam",
    "Court or corporate practice",
    "Develop advocacy skills",
    "Junior Advocate → Judge"
  ],
  "Graphic Designer": [
    "Learn design tools",
    "Build design portfolio",
    "Optional design degree",
    "Agency/Freelance work",
    "Junior Designer → Creative Head"
  ],
  "Data Scientist": [
    "Learn Python, SQL, statistics",
    "Work on AI/ML projects",
    "Earn CS/IT degree",
    "Industry internship",
    "Junior → Senior → CDO"
  ]
};

// ================= ICON MAP =================
const stepIcons = {
  "Learn": "icons/learn.png",
  "Build": "icons/build.png",
  "Earn": "icons/degree.png",
  "Apply": "icons/internship.png",
  "Junior": "icons/junior.png",
  "Work": "icons/work.png",
  "Study": "icons/learn.png",
  "Start": "icons/work.png",
  "Develop": "icons/develop.png",
  "Gain": "icons/work.png",
  "Complete": "icons/degree.png"
};

const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");

const content = document.getElementById("roadmapContent");
const dropdown = document.getElementById("dropdownContainer");
const select = document.getElementById("careerSelect");

// ================= SHOW ROADMAP FUNCTION =================
function showRoadmap(career) {
  const steps = careerRoadmap[career];
  if (!steps) return;

  let html = `
    <div class="career-card">
      <h2 style="text-align:center;">${career}</h2>
      <ol>
  `;

  steps.forEach(step => {
    let icon = "";
    for (let key in stepIcons) {
      if (step.includes(key)) {
        icon = stepIcons[key];
        break;
      }
    }

    html += `
      <li>
        ${icon ? `<img src="${icon}" class="step-icon">` : ""}
        ${step}
      </li>
    `;
  });

  html += "</ol></div>";
  content.innerHTML += html;
}

// ================= MODE HANDLING =================
if (mode === "top3") {
  dropdown.style.display = "none";
  const careers = params.getAll("career");
  careers.forEach(c => showRoadmap(c));
}

if (mode === "all") {
  dropdown.style.display = "block";
}

// ================= DROPDOWN CHANGE =================
select.addEventListener("change", () => {
  content.innerHTML = "";
  if (select.value) {
    showRoadmap(select.value);
  }
});