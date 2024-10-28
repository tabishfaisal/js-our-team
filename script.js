const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "../img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainer = document.getElementById("team-container");

teamMembers.forEach(member => {
  const memberHTML = `
      <div class="team-member">
          <img src="${member.image}" alt="${member.name} photo">
          <div class="member-info">
              <h3>${member.name}</h3>
              <p>${member.role}</p>
              <a href="mailto:${member.email}">${member.email}</a>
          </div>
      </div>
  `;

  teamContainer.insertAdjacentHTML('beforeend', memberHTML);
});