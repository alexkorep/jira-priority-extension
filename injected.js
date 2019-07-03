const MEDIUM_LINK_URL =
  "https://feelrobotics.atlassian.net/images/icons/priorities/medium.svg";

const replaceImages = () => {
  const images = document.getElementsByTagName("img");
  const newUrl = chrome.runtime.getURL("bluedot.png");
  for (var i = 0; i < images.length; i++) {
    if (images[i].src == MEDIUM_LINK_URL) {
      images[i].src = newUrl;
    }
  }
};

replaceImages();
setInterval(() => replaceImages(), 2000);
