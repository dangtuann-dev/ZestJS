// Highlight code
hljs.initHighlightingOnLoad();
// ZTAB
const pages = new ZTab("#lib-pages", {
  activeClassName: "ztab--active",
  remember: true,
});
// Basic tabs
new ZTab("#fancy-tabs");

// Persist tabs
new ZTab("#persistent-tabs", {
  remember: true,
});

// Sliding tabs
const tabs3 = new ZTab("#sliding-tabs", {
  onChange: updateActiveLine,
});

function updateActiveLine() {
  const activeTab = tabs3.currentTab;
  const tabLi = activeTab.closest("li");
  const activeLine = tabs3.container.nextElementSibling;

  activeLine.style.width = `${tabLi.offsetWidth}px`;
  activeLine.style.transform = `translateX(${tabLi.offsetLeft}px)`;
}
updateActiveLine();
//ZPOP
// Basic Modal
const modal1Btn = document.querySelector(".js-zpop-modal-1");
const modal1 = new ZPop({
  content: `
                    <h1>Basic Modal</h1>
                    <p>This is a simple modal. You can customize its content as per your requirements.</p>
                `,
});
modal1Btn.onclick = () => {
  modal1.open();
};

// Modal with Buttons
const modal2Btn = document.querySelector(".js-zpop-modal-2");
const modal2 = new ZPop({
  content: `
                    <h1>Modal with Buttons</h1>
                    <p>This modal includes functional buttons for actions such as canceling or confirming.</p>
                `,
  footer: true,
});
modal2.addFooterButton("Cancel", "modal-btn", () => {
  modal2.close();
});
modal2.addFooterButton("Confirm", "modal-btn primary", () => {
  console.log("Action confirmed!");
  modal2.close();
});
modal2Btn.onclick = () => {
  modal2.open();
};

// Large Content Modal
const modal3Btn = document.querySelector(".js-zpop-modal-3");
const modal3 = new ZPop({
  content: `
                    <h1>Large Content Modal</h1>
                    <p>This modal contains a large amount of content, suitable for displaying extended text or information.</p>
                    <p>Please scroll down to view the entire content.</p>
                    <p>The content can include multiple paragraphs, images, or other detailed information.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
                `,
});
modal3Btn.onclick = () => {
  modal3.open();
};

// Footer-Only Close Modal
const modal4Btn = document.querySelector(".js-zpop-modal-4");
const modal4 = new ZPop({
  content: `
                    <h1>Footer-Only Close Modal</h1>
                    <p>This modal can only be closed via the button in the footer for a controlled experience.</p>
                `,
  footer: true,
  closeMethods: [],
});
modal4.addFooterButton("Close", "modal-btn", () => {
  modal4.close();
});
modal4Btn.onclick = () => {
  modal4.open();
};

// Persistent Modal
const modal5Btn = document.querySelector(".js-zpop-modal-5");
const modal5 = new ZPop({
  content: `
                    <h1>Persistent Modal</h1>
                    <p>This modal stays in the DOM even after being closed, allowing you to reopen it without losing any changes.</p>
                    <p>You can write something in the input below, close the modal, and reopen it to see the content still intact.</p>
                    <input type="text" placeholder="Type something here..." class="modal-input" style="width: 100%; padding: 10px; margin-top: 10px;" />
                `,
  destroyOnClose: false,
});
modal5Btn.onclick = () => {
  modal5.open();
};

// Multiple Modals
const modal6Btn = document.querySelector(".js-zpop-modal-6");
const modal6 = new ZPop({
  content: `
                    <h1>Multiple Modals</h1>
                    <p>This modal demonstrates interaction between multiple modals. You can open another modal from here.</p>
                    <button class="btn" onclick="modal1.open();">Open Basic Modal</button>
                `,
});
modal6Btn.onclick = () => {
  modal6.open();
};

// Youtube Embed Modal
const modal7Btn = document.querySelector(".js-zpop-modal-7");
const modal7 = new ZPop({
  content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/btdICS6cN0A?si=cStnnBEnrceBGz9m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
});
modal7Btn.onclick = () => {
  modal7.open();
};
//ZSLIDE
// ZSLIDE DEMO 1
new ZSlide("#slider-demo-1", {
  loop: true,
  speed: 500,
});

// ZSLIDE DEMO 2
new ZSlide("#slider-demo-2", {
  items: 3,
  autoplay: true,
  loop: true,
  autoplayTimeout: 2000,
});
const toggleBtn = document.querySelector("#Nav_Toggle");
const navigation = document.querySelector(".navigation");
const navOverlay = document.querySelector("#nav-overlay");
const navClose = document.querySelector("#nav-close");
toggleBtn.onclick = () => {
  navigation.classList.add("show");
};
navOverlay.onclick = () => {
  closeNav();
};
navClose.onclick = () => {
  closeNav();
};
function closeNav() {
  navigation.classList.remove("show");
}
function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    //KHởi tạo đối tượng XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //Cấu hình yêu cầu: phương thức GET, URL của tệp HTML, bất đồng bộ
    xhr.open(method, url, true);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        const contentType = xhr.getResponseHeader("content-type");
        const isJson = contentType && contentType.includes("application/json");
        if (isJson) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (error) {
            reject("Invalid JSON format");
          }
        } else {
          resolve(xhr.responseText);
        }
      } else {
        reject(`HTTP code: ${xhr.status}`);
      }
    };
    xhr.onerror = () => {
      reject("Network error.");
    };
  });
}
const pagess = document.querySelectorAll(".pages > div");

sendRequest("GET", "./assets/partials/footer.html").then((responseText) => {
  pagess.forEach((page) => {
    // Tạo một element bọc footer để append
    const footerWrapper = document.createElement("div");
    footerWrapper.innerHTML = responseText;
    page.appendChild(footerWrapper);
  });
});
