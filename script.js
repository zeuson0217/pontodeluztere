const galeria = document.getElementById("galeria");

const totalFotos = 103;
for (let i = totalFotos; i >= 1; i--) {
  const img = document.createElement("img");
  img.src = `imagens/documento (${i}).jpg`;
  img.alt = `Memória ${i}`;
  galeria.appendChild(img);
}

const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");
const fechar = document.getElementById("fechar");

galeria.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    modal.style.display = "block";
    imagemModal.src = e.target.src;
  }
});

fechar.onclick = () => (modal.style.display = "none");
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
