// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Dark Mode Toggle
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Dynamic Theme Colors
const themeColors = document.querySelectorAll(".theme-color");
themeColors.forEach(color => {
    color.addEventListener("click", () => {
        const primaryColor = color.getAttribute("data-color");
        document.documentElement.style.setProperty("--primary-color", primaryColor);
    });
});

// Resume button functionality
  document.addEventListener("DOMContentLoaded", () => {
    const resumeBtn = document.getElementById("show-resume");

    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        // Open your resume (replace with your actual resume.pdf or Google Drive/LinkedIn link)
        window.open("My Resume.pdf", "_blank");
      });
    }
  });

const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".sidebar nav ul li a");

// Open sidebar on ☰
if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

// Close sidebar on ✖
if (closeBtn && sidebar) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

// Close sidebar when any nav link is clicked (mobile only)
if (navLinks) {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("open");
      }
    });
  });
}




document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const page = this.getAttribute("data-page");

          // Highlight active link
          document.querySelectorAll("nav ul li").forEach((li) =>
            li.classList.remove("active")
          );
          this.parentElement.classList.add("active");

          // Load home content
          if (page === "home") {
            document.getElementById("content").innerHTML = `
              <div class="intro">
                <h2>Hello, my name is <span class="highlight">Shivangi Sinha</span></h2>
                <h1>I'm a <span class="red">CSE Student</span></h1>
                <p>
                  A 3rd year B.TECH Computer Science and Engineering Student with
                  specialization in Artificial Intelligence and Data Science ...
                </p>
              </div>
              <div class="profile-img">
                <img src="images/img.jpg" alt="Web Designer Profile" />
              </div>
            `;
          } else {
            // Load other pages dynamically
            fetch(page)
              .then((res) => res.text())
              .then((data) => {
                document.getElementById("content").innerHTML = data;
              })
              .catch((err) =>
                console.error("Error loading page:", err)
              );
          }
        });
      });