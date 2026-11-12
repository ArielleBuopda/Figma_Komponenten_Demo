// Kleine, frameworkfreie Komponenten-Demo.
// Komponenten sind Funktionen, die Markup aus Properties erzeugen.
const Button = ({ label, variant = "primary", size = "normal", onClick }) => {
  const button = document.createElement("button");
  button.className = `button button--${variant}${size === "small" ? " button--small" : ""}`;
  button.type = "button";
  button.textContent = label;
  if (onClick) button.addEventListener("click", onClick);
  return button;
};

const $ = (selector) => document.querySelector(selector);
const state = { enrolled: false, favorite: false, seats: 8 };

$("#enroll").addEventListener("click", () => {
  if (state.enrolled) return;
  state.enrolled = true;
  state.seats -= 1;
  $("#seats").textContent = `${state.seats} von 24`;
  $("#course-status").textContent = "Angemeldet";
  $("#course-status").className = "badge badge--green";
  $("#enroll").textContent = "Angemeldet ✓";
  $("#enroll").disabled = true;
  $("#feedback").textContent = "Erfolgreich angemeldet – der Zustand wurde aktualisiert.";
});

$("#favorite").addEventListener("click", (event) => {
  state.favorite = !state.favorite;
  event.currentTarget.textContent = state.favorite ? "♥" : "♡";
  event.currentTarget.setAttribute("aria-pressed", String(state.favorite));
  event.currentTarget.setAttribute("aria-label", state.favorite ? "Kurs nicht mehr merken" : "Kurs merken");
});

function updateVariant() {
  const variant = $("#variant").value;
  const size = $("#size").value;
  const old = $("#variant-preview");
  const fresh = Button({ label: "Beispiel-Button", variant, size });
  fresh.id = "variant-preview";
  old.replaceWith(fresh);
  $("#variant-code").textContent = `Button({ variant: "${variant}", size: "${size}" })`;
}
$("#variant").addEventListener("change", updateVariant);
$("#size").addEventListener("change", updateVariant);

$("#theme-toggle").addEventListener("click", (event) => {
  const enabled = document.body.classList.toggle("dark");
  event.currentTarget.setAttribute("aria-pressed", String(enabled));
  event.currentTarget.textContent = enabled ? "☾ Dunkel" : "☼ Darstellung";
});
