function createChatbox(elementId) {
  let element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  let iframe = document.createElement("iframe");

  iframe.src = "https://phukoika.github.io/Chatbox-Helper/";
  iframe.width = "370";
  iframe.height = "500";
  iframe.style.border = "none";
  iframe.style.position = "fixed";
  iframe.style.bottom = "0";
  iframe.style.right = "80px";
  iframe.style.zIndex = "999999999999";

  element.appendChild(iframe);
}

createChatbox("root");
