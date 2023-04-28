chrome.runtime.sendMessage({ action: "openPopup" });
console.log("Study better")
chrome.runtime.sendMessage({ action: "getTabUrl" }, function(response) {
  var url = response.url;
  console.log("Received tab URL from background script: " + url);
// future scope - extract image urls of the tab
  fetch('http://localhost:9000/extract_images', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        url: url
    }),
    mode: 'cors'
})

  .then(response => response.json())
  .then(data => {
    
    console.log(data.image_urls);
  })
  .catch(error => {
    console.error(error);
  });
});



