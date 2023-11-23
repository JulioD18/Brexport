export default function applyStyle(style: { [x: string]: string }) {
  document.body.className = "";
  document.body.classList.add(style["custom-body"]);
}
