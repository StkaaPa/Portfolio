// Efeito de "escrita" no papel de funções/títulos
const roles = ["ETL Developer", "Oracle SQL", "Bussiness Intelligence"];
const roleEl = document.getElementById("role-line");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
  roleEl.textContent = roles[0];
} else {
  let roleIndex = 0,
    charIndex = 0,
    deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    roleEl.innerHTML =
      current.slice(0, charIndex) + '<span class="cursor">&nbsp;</span>';
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

// Ano no rodapé
document.getElementById("ano").textContent =
  "© " + new Date().getFullYear() + " — Samuel Gonçalves";
