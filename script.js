const jsonInput = document.getElementById('json-input');
const jsonOutput = document.getElementById('json-output');
const formatBtn = document.getElementById('format-btn');
const pasteBtn = document.getElementById('paste-btn');
const copyBtn = document.getElementById('copy-btn');
const themeToggleBtn = document.getElementById('toggle-theme');

function formatJSON() {
  const json = jsonInput.value.trim();
  try {
    const obj = JSON.parse(json);
    const formattedJSON = JSON.stringify(obj, null, 2);
    jsonOutput.textContent = formattedJSON;
  } catch (error) {
    jsonOutput.textContent = error.message;
  }
}

function copyJSON() {
  const tempInput = document.createElement('input');
  tempInput.value = jsonOutput.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

function pasteJSON() {
  navigator.clipboard.readText().then(text => {
    jsonInput.value = text;
  });
}

formatBtn.addEventListener('click', formatJSON);
copyBtn.addEventListener('click', copyJSON);
pasteBtn.addEventListener('click', pasteJSON);

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
