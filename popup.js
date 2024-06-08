const applyButton = document.getElementById('apply');

applyButton != null ? applyButton.addEventListener('click', () => {
  const playbackRate = parseFloat(document.getElementById('myRange').value);
  if (!isNaN(playbackRate)) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: applySpeed,
        args: [playbackRate]
      });
    });
  } else {
    console.log("inserire un valore");
  }
}) : console.log("element not found");

function applySpeed(playbackRate) {
  document.querySelector("video").playbackRate = playbackRate;
  console.log("Playback speed set to " + playbackRate);
}