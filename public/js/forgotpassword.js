console.log("forgot password");

 const toast = document.getElementById('toast');
 const loader = document.getElementById('loader');
 const alertbox = document.getElementById('alertbox');


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

document.getElementById("resetBtn").addEventListener("click",async() => {
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!username || !email) {
        return showToast("Please enter both fields", "warning");
      }
      try {
      showloader()
      const res = await fetch("/api/user/forgot-password",{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({username,email})
      })

      const data = await res.json();
        if (res.ok) {
          hideloader()
          document.getElementById("ConBtn").innerHTML += `
           <div class="divider lg:divider-horizontal"></div>
          <button class="btn btn-secondary lg:w-1/2">
          <a class="text-white" href=${data.link}>reset link</a>
          </button>
          `
          showToast(data.message, "success");
           alertbox.classList.remove("hidden")
        } else {
          hideloader()
          showToast(data.message, "error");
        }

      } catch (err) {
        hideloader()
          console.error(err);
        showToast("Something went wrong!", "error");
      }
})