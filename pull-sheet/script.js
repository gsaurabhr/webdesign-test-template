// script.js

const memberGrid = document.getElementById('member-grid');

function displayMembers(members) {
  memberGrid.innerHTML = "";

  if (members.length === 0) {
    memberGrid.innerHTML = "<p>No members found for selected filter.</p>";
    return;
  }

  for (const member of members) {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');
    memberCard.innerHTML = `<h3>${member.name}</h3><p>Position: ${member.position}</p>`;
    memberGrid.appendChild(memberCard);
  }
}

function filterMembers() {
  const selectedPosition = document.getElementById('position-filter').value;
  fetch('/members')
    .then(response => response.json())
    .then(data => {
      const filteredMembers = selectedPosition === 'all'
        ? data
        : data.filter(member => member.position === selectedPosition);
      displayMembers(filteredMembers);
    })
    .catch(err => console.error(err));
}

document.getElementById('position-filter').addEventListener('change', filterMembers);

filterMembers(); // Call initially to display all members
