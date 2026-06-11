document.addEventListener("DOMContentLoaded", () => {

    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

  
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggleBtn.textContent = "🌙 Modo Escuro";
    }


    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggleBtn.textContent = "🌙 Modo Escuro";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });


    const form = document.getElementById("contato-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

   
        if (nome === "" || email === "" || mensagem === "") {
            feedback.innerHTML = '<div class="alert alert-danger mt-3">Por favor, preencha todos os campos.</div>';
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            feedback.innerHTML = '<div class="alert alert-danger mt-3">Por favor, insira um e-mail válido.</div>';
            return;
        }

        feedback.innerHTML = '<div class="alert alert-success mt-3">Mensagem enviada com sucesso! Entraremos em contato em breve.</div>';
        form.reset();
    });
});
