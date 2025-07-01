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

    document.getElementById('signUpBtn').addEventListener('click',async() => {
     const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!username || !password) {
        return showToast("Please enter both fields", "warning");
      }

      try {
         showloader()
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        
        const data = await res.json();

        if (res.ok) {
          hideloader()
          showToast(data.message, "success");
           alertbox.classList.remove("hidden")
        } else {
          hideloader()
          showToast(data.message, "error");
        }
        
      } catch (error) {
          hideloader()
          console.error(err);
        showToast("Something went wrong!", "error");
      }
    })

    document.getElementById('loginBtn').addEventListener('click', async () => {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!username || !password) {
        return showToast("Please enter both fields", "warning");
      }

      try {
        showloader()
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
          hideloader()
          showToast(data.message, "success");
          alertbox.classList.add("hidden")
          setTimeout(() => window.location.href = "/dashboard", 1500);
        } else {
          hideloader()
          showToast(data.message, "error");
        }
      } catch (err) {
        hideloader()
        console.error(err);
        showToast("Something went wrong", "error");
      }
    });