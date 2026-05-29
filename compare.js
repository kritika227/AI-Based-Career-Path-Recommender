const careerData = {
  "Software Engineer": {
    skills: "Programming, Problem Solving, Algorithms",
    salary: "₹6–12 LPA",
    growth: "High",
    difficulty: "Medium"
  },

  "Data Scientist": {
    skills: "Python, Statistics, Machine Learning",
    salary: "₹8–15 LPA",
    growth: "Very High",
    difficulty: "High"
  },

  "Doctor": {
    skills: "Medical Knowledge, Diagnosis, Empathy",
    salary: "₹10–20 LPA",
    growth: "High",
    difficulty: "Very High"
  },

  "Teacher": {
    skills: "Communication, Subject Expertise",
    salary: "₹3–6 LPA",
    growth: "Medium",
    difficulty: "Medium"
  },

  "Civil Engineer": {
    skills: "Construction, Planning, Structural Design",
    salary: "₹4–8 LPA",
    growth: "Medium",
    difficulty: "Medium"
  },

  "Graphic Designer": {
    skills: "Creativity, Photoshop, Visual Design",
    salary: "₹3–7 LPA",
    growth: "Medium",
    difficulty: "Low"
  },

  "Lawyer": {
    skills: "Legal Knowledge, Argument, Research",
    salary: "₹5–10 LPA",
    growth: "High",
    difficulty: "High"
  },

  "Mechanical Engineer": {
    skills: "Mechanical Systems, CAD, Problem Solving",
    salary: "₹4–9 LPA",
    growth: "Medium",
    difficulty: "Medium"
  },

  "Entrepreneur": {
    skills: "Leadership, Business Strategy, Risk Management",
    salary: "Variable (₹5–50+ LPA)",
    growth: "Very High",
    difficulty: "High"
  },

  "Digital Marketer": {
    skills: "SEO, Social Media, Analytics",
    salary: "₹4–8 LPA",
    growth: "High",
    difficulty: "Low"
  }
};

// Populate dropdowns
const c1 = document.getElementById("career1");
const c2 = document.getElementById("career2");

Object.keys(careerData).forEach(career => {
  c1.innerHTML += `<option value="${career}">${career}</option>`;
  c2.innerHTML += `<option value="${career}">${career}</option>`;
});

function compareCareers() {
  const careerA = c1.value;
  const careerB = c2.value;

  if (!careerA || !careerB) {
    alert("Please select both careers");
    return;
  }

  const a = careerData[careerA];
  const b = careerData[careerB];

  document.getElementById("comparisonResult").innerHTML = `
    <table>
      <tr>
        <th>Criteria</th>
        <th>${careerA}</th>
        <th>${careerB}</th>
      </tr>
      <tr>
        <td>Skills Required</td>
        <td>${a.skills}</td>
        <td>${b.skills}</td>
      </tr>
      <tr>
        <td>Average Salary</td>
        <td>${a.salary}</td>
        <td>${b.salary}</td>
      </tr>
      <tr>
        <td>Career Growth</td>
        <td>${a.growth}</td>
        <td>${b.growth}</td>
      </tr>
      <tr>
        <td>Difficulty Level</td>
        <td>${a.difficulty}</td>
        <td>${b.difficulty}</td>
      </tr>
    </table>
  `;
}