console.log("bot");
 const toast = document.getElementById('toast');
 const loader = document.getElementById('loader');
  const modal = document.getElementById('createBotModal');


document.addEventListener("DOMContentLoaded",async() => {
const botSelect = document.getElementById("botSelect");
const botGrid = document.getElementById("botGrid");
  
 const openModalBtn = document.getElementById('openModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const teamSelect = document.getElementById('teamSelect');



  // Show Modal
  openModalBtn.addEventListener('click',() => {
    modal.classList.remove('my_hidden');
  });

  // Hide Modal
  cancelModalBtn.addEventListener('click', () => {
    modal.classList.add('my_hidden');
  });

  
    await populateTeamSelect(teamSelect);
     await populateBotSelect(botSelect);
     await populateBotGrid(botGrid);
})


// Populate Bot Select

const populateBotSelect = async (botSelect) => {
  if (!botSelect) return;

  try {
    const res = await fetch("/api/user/bots");
    const bots = await res.json();
    // console.log(bots)

    bots.userBot.forEach((bot) => {
      const option = document.createElement("option");
      option.value = bot.id;
      option.textContent = `${bot.name} ${bot.teamId ? "(Team)" : "(Personal)"}`;
      botSelect.appendChild(option);
    });

    const storedBotId = localStorage.getItem("selectedBotId");
    if (storedBotId) {
      botSelect.value = storedBotId;
    }

    botSelect.addEventListener("change", () => {
      const selectedId = botSelect.value;
      localStorage.setItem("selectedBotId", selectedId);
      location.reload();
    });
  } catch (error) {
    console.error("Failed to fetch bots:", error);
  }
};

const populateBotGrid = async (botGrid) => {    
  try {
    const res = await fetch("/api/user/bots"); 
    const data = await res.json();

    if (data.userBot && data.userBot.length > 0) {
      data.userBot.forEach(bot => {
        const type = bot.teamId ? 'Team' : 'Personal';

        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-md border";

        card.innerHTML = `
          <div class="card-body">
            <div class="flex justify-between items-center">
              <h3 class="card-title">${bot.name}</h3>
              <span class="badge badge-outline text-xs">${type}</span>
            </div>
            <p class="text-sm text-gray-400">@${bot.username}</p>

            <div class="flex gap-2 mt-4">
              <button title="View" class="btn btn-sm btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>

              <button title="Edit" class="btn btn-sm btn-outline btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>

              <button title="Delete" class="btn btn-sm btn-outline btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z" />
                </svg>
              </button>
            </div>
          </div>
        `;

        botGrid.appendChild(card);
      });
    } else {
      botGrid.innerHTML = `<p class="text-gray-400">No bots found. Create one to get started.</p>`;
    }

  } catch (err) {
    console.error("Error loading bots:", err);
    botGrid.innerHTML = `<p class="text-red-500">Failed to load bots.</p>`;
  }
}

const populateTeamSelect = async (teamSelect) => {
  if (!teamSelect) return;

  try {
    const res = await fetch("/api/teams/user/teams");
    const { ownedTeams, memberTeams } = await res.json();
    const personalOption = document.createElement("option");
    personalOption.innerHTML =``;

    const allTeams = [...ownedTeams, ...memberTeams];

    // --- Add "Personal Bot" as first option
    personalOption.style.backgroundColor = "black"; 
    personalOption.style.color = "white";
    personalOption.value = ""; // Empty value indicates personal
    personalOption.textContent = "Personal Bot (No Team)";
    teamSelect.appendChild(personalOption);

  
    allTeams.forEach((team) => {
      const option = document.createElement("option");
      option.value = team.id;
      option.textContent = team.name;
      teamSelect.appendChild(option);
    });

    // --- Auto-select first owned team if available
    if (ownedTeams.length > 0) {
      teamSelect.value = ownedTeams[0].id;
    } else {
      teamSelect.value = ""; 
    }
  } catch (error) {
    teamSelect.innerHTML = `<option value="">Failed to load teams</option>`;
    console.error("Failed to fetch teams:", error);
  }
};

    function showToast(message, type = "info") {
      toast.innerHTML = `<div class="alert alert-${type} bg-${type}">${message}</div>`;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 3000);
    }

    function showloader() {
      loader.classList.remove('hidden')
    }
    function hideloader() {
      loader.classList.add('hidden');
    }

const createBotForm = document.getElementById('createBotForm');

createBotForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const botToken = document.getElementById('botToken').value.trim();
  const teamId = document.getElementById('teamSelect').value;
  
  if (!botToken) {
    return showToast("Please enter a bot token", "warning");
  }

    modal.classList.add('my_hidden');


  showloader();

  // try {
  //   showloader();
  //   const res = await fetch('/api/bot/create', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ botToken, teamId })
  //   });

  //   const data = await res.json();

  //   if (res.ok) {
  //     hideloader();
  //     showToast(data.message, "success");
  //     modal.classList.add('my_hidden');
  //     location.reload();
  //   } else {
  //     hideloader();
  //     showToast(data.message, "error");
  //   }
  // } catch (error) {
  //   hideloader();
  //   console.error(error);
  //   showToast("Something went wrong!", "error");
  // }
}); 