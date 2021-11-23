const createWindow = () => {
  let windowDiv = document.createElement("div");
  windowDiv.className = "window";

  let windowTop = document.createElement("div");
  windowTop.className = "window-top";

  let windowTitle = document.createElement("div");
  windowTitle.className = "window-title";

  let windowButton = document.createElement("div");
  windowButton.className = "window-button";

  windowTop.appendChild(windowTitle);
  windowTop.appendChild(windowButton);
  windowDiv.appendChild(windowTop);

  windowDiv.style.width = Math.random() * 500;
  windowDiv.style.height = Math.random() * 500;

  windowDiv.style.top =
    Math.floor(Math.random() * window.innerHeight - windowDiv.style.height) +
    "px";
  windowDiv.style.left =
    Math.floor(Math.random() * window.innerWidth - windowDiv.style.width) +
    "px";

    return windowDiv;
};

let arr = []

for (let i = 0; i < 10; i++ ){
   
document.body.appendChild(createWindow());
}
