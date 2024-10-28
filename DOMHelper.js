export function crearModal() {
    const divModalExt = document.createElement("div");
    divModalExt.className = "modal";
    const divModalInt = document.createElement("div");
    divModalInt.className = "modal-content";
    const pModalX = document.createElement("p");
    pModalX.className = "modal-close";
    pModalX.textContent = "X";
    pModalX.addEventListener("click", () => {
      divModalExt.style.visibility = "hidden";
      divModalExt.style.opacity = 0;
    });
    const pModalText = document.createElement("p");
    pModalText.id = "p_aciertos";
    divModalInt.append(pModalX, pModalText);
    divModalExt.append(divModalInt);
    return divModalExt;
  };