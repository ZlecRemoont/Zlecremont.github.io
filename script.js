let jobs = [];

function addJob() {
  const title = document.getElementById("title").value;
  const city = document.getElementById("city").value;

  if (!title || !city) {
    alert("Uzupełnij pola!");
    return;
  }

  const job = { title, city };
  jobs.push(job);

  renderJobs();
}

function renderJobs() {
  const list = document.getElementById("jobsList");
  list.innerHTML = "";

  jobs.forEach(j => {
    const div = document.createElement("div");
    div.className = "job";
    div.innerHTML = `<strong>${j.title}</strong><br>${j.city}`;
    list.appendChild(div);
  });
}

function showLogin() {
  alert("Tu będzie logowanie (backend)");
}
