const toast = document.getElementById('toast');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

 function showAlert(message, type = "info") {
    toast.innerHTML = `<div class="alert alert-${type} bg-${type}">${message}</div>`;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 3000);;
    }

document.getElementById("feedbackForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const message = form.message.value.trim();
  const email = form.email.value.trim();
  const name = form.name.value.trim();

  if (!message) {
    return showAlert("Please enter your feed back!","warning");
  }

  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name,email,message}),
    });

    const data = await res.json();

    if (res.ok) {
        showAlert("Thanks for your feedback!", "success");
      form.reset();
    } else {
      showAlert(data.message || "Something went wrong!","error")
    }
  } catch (err) {
    console.error(err);
    showAlert("An error occurred","error")
  }
});