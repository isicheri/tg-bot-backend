console.log("reset password");

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

let token = window.location.href.split("?")[1];

document.getElementById("resetBtn").addEventListener("click",async() => {
    const password = document.getElementById("password").value.trim();
      if (!password) {
        return showToast("Please enter both fields", "warning");
      }
    try {
        showloader()
        const res = await fetch(`/api/user/reset-password?resetToken=${token}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({password: password})
          }
        )
        const data = await res.json();
        if(res.ok) {
          hideloader()
           showToast(data.message, "success");
           alertbox.classList.remove("hidden")
 

          window.location.pathname = "/signin"
        }else {
      hideloader()
          showToast(data.message, "error");
        }
    } catch (error) {
           hideloader()
          console.error(error);
        showToast("Something went wrong!", "error");
    }
})