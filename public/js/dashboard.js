
console.log("dashboard");

document.addEventListener("DOMContentLoaded", async () => {
const botCountEle = document.querySelector("#bot-count");
const subCountEle = document.querySelector("#sub-count");
const botSelect = document.getElementById("botSelect");
const broadCastel = document.querySelector("#broadcastElCard");
const messageCountEl = document.querySelector("#message-count");
const teamCardEL = document.querySelector("#teamCardEL");



  await populateBotSelect(botSelect);
  await fetchUserBotCount(botCountEle);
  await fetchTotalBotSubscriber(subCountEle)
  await fetchTotalRecentBroadcast(broadCastel)
  await fetchMessageCount(messageCountEl)
  await fetchUserTeamCount(teamCardEL)
  await fetchGrowthRate()
  await fetchRecentBroadcast()
  await fetchChartData()
});

// Fetch Bot Count
const fetchUserBotCount = async (botCountEle) => {
  try {
    const res = await fetch("/api/bot/user-bot");
    const data = await res.json();
    if (res.ok) {
      botCountEle.classList.remove("text-error");
      botCountEle.textContent = `${data.count}`;
    } else {
      botCountEle.classList.add("text-error");
      botCountEle.textContent = "failed to load...";
    }
  } catch (error) {
    console.log(error);
    botCountEle.classList.add("text-error");
    botCountEle.textContent = "failed to load...";
  }
};

// Populate Bot Select
const populateBotSelect = async (botSelect) => {
  if (!botSelect) return;

  try {
    const res = await fetch("/api/user/bots");
    const bots = await res.json();

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


const fetchTotalBotSubscriber = async(subCountEle) => { 
     let botId = localStorage.getItem("selectedBotId");
    try {
        const res = await fetch(`/api/subscriber/sub-count/${botId}`);
        const data = await res.json();
        if(res.ok) {
           subCountEle.classList.remove("text-error");
           subCountEle.textContent = `${data.data}`;
            return  
        }else {
            if(res.status === 404) {
             subCountEle.classList.add("text-info");
           subCountEle.textContent = "select a bot"
            }
              subCountEle.classList.add("text-error");
           subCountEle.textContent = "failed to load.." 
        }
        if(!botId) {
           subCountEle.classList.add("text-warning");
           subCountEle.textContent = "failed to load.."
            return
        }
    } catch (error) {
        console.log(error)
        subCountEle.classList.add("text-error")
        subCountEle.textContent = "failed to load.."
    }
}


const fetchTotalRecentBroadcast = async(broadCastel) => {
     let botId = localStorage.getItem("selectedBotId");
    try {
        const res = await fetch(`/api/broadcast/recents/${botId}`);
        const data = await res.json();
        if(res.ok) {
           broadCastel.textContent =  data.data.length
        }else {
         broadCastel.classList.add("text-error");
        broadCastel.textContent = "failed to load.."
        }
    } catch (error) {
        console.log(error)
        broadCastel.classList.add("text-error");
        broadCastel.textContent = "failed to load.."
    }
}

const fetchMessageCount = async(messageCountEl) => {
     let botId = localStorage.getItem("selectedBotId");
 try {
    const res = await fetch(`/api/broadcast/count-message/${botId}`)
    let data = await res.json();
    if(res.ok) {
     messageCountEl.textContent = `${data.data}`
    }else {
          console.log(error)
    messageCountEl.classList.add("text-error")
    messageCountEl.textContent = "failed to load.."
    }
 } catch (error) {
    console.log(error)
    messageCountEl.classList.add("text-error")
    messageCountEl.textContent = "failed to load.."
 }
}


const fetchUserTeamCount = async(teamCardEL) => {
    try {
        const res = await fetch("/api/user/count-team");
        const data = await res.json()
        if(res.ok) {
       teamCardEL.textContent = data.data
        }else {
        teamCardEL.classList.add("text-error");
        teamCardEL.textContent = "failed to load.."  
        }
    } catch (error) {
        console.log(error)
        teamCardEL.classList.add("text-error");
        teamCardEL.textContent = "failed to load.."
    }
}

const growthRateEle = document.querySelector("#growth-rate-value");
const periodSelect = document.querySelector("#growth-period")
const fetchGrowthRate = async () => {
  const botId = localStorage.getItem("selectedBotId");
  const period = periodSelect.value;

  try {
    const res = await fetch(`/api/subscriber/growth-rate/${botId}?period=${period}`);
    const data = await res.json();

    if (res.ok) {
      growthRateEle.textContent = `${data.growthRate}%`;
      growthRateEle.classList.toggle("text-green-500", data.growthRate >= 0);
      growthRateEle.classList.toggle("text-red-500", data.growthRate < 0);
    } else {
      growthRateEle.textContent = "N/A";
    }
  } catch (err) {
    console.error(err);
    growthRateEle.textContent = "N/A";
  }
};

const listEle = document.getElementById("broadcast-list");
const fetchRecentBroadcast = async() => {
const botId = localStorage.getItem("selectedBotId");
try {
    const res = await fetch(`/api/bot/${botId}/broadcasts`);
    const data = await res.json();
    listEle.innerHTML = ""; 
    if(res.ok) {
      data.data.forEach(broadcast => {
        const successRate = (broadcast.successCount / data.subscriberCount) * 100;
        let colorClass = "border-green-500";
        if (successRate < 40) colorClass = "border-red-500";
        else if (successRate < 70) colorClass = "border-yellow-500";
         const div = document.createElement("div");
        div.className = `flex justify-between items-center border-b pb-2 ${colorClass}`;

        div.innerHTML = `
          <p>${broadcast.message}</p>
          <span class="text-sm text-gray-400">${timeAgo(broadcast.createdAt)} (${successRate.toFixed(1)}%)</span>
        `;
        listEle.appendChild(div);
      })
    }else {
    listEle.innerHTML = `<p class="text-gray-400">No broadcasts found.</p>`;
    }
    
} catch (error) {
      console.error(error);
    listEle.innerHTML = `<p class="text-error">Failed to load broadcasts.</p>`; 
}
}

function timeAgo(dateString) {
  const date = new Date(dateString);
  const diff = Math.floor((new Date() - date) / 1000);
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
}

const fetchChartData = async() => {
const botId = localStorage.getItem("selectedBotId");
try {
    const res = await fetch(`/api/subscriber/chart-growth-rate/${botId}`);
      const response = await res.json();
      const data = response.data;

        const categories = data.map(entry => entry.date);
      const seriesData = data.map(entry => entry.count);

       const options = {
        chart: {
          type: 'area',
          height: 230,
          toolbar: { show: false }
        },
        series: [{
          name: 'Subscribers',
          data: seriesData
        }],
        xaxis: {
          categories: categories,
          labels: { rotate: -45 }
        },
        yaxis: {
          labels: { formatter: val => Math.round(val) }
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        colors: ['#22c55e'], // Tailwind green-500
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100]
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#subscriberChart"), options);
      chart.render();

} catch (error) {
    console.error("Chart load failed:", error);
}
} 