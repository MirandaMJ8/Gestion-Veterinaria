
const btnNuevo = document.getElementById("btnNuevo");
const formContainer = document.getElementById("formContainer");

// mostrar/ocultar formulario
btnNuevo.addEventListener("click", () => {
    formContainer.classList.toggle("hidden");
});