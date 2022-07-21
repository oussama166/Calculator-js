let buttons = [...document.querySelectorAll(".button")];
let buttonsKey = buttons.map((btn) => btn.dataset.key);
let result = document.querySelector("input");
document.addEventListener("keydown", (e) => {
  const num = e.keyCode.toString();
  calculer(num);
});
document.addEventListener("click", (e) => {
  const key = e.target.dataset.key;
  calculer(key);
});

const calculer = (value) => {
  if (buttonsKey.includes(value)) {
    let count = result.value.length;
    switch (value) {
      case "46":
        result.value = "";
        break;
      case "8":
        result.value = result.value.slice(0, count - 1);
        break;
      case "61":
        const resValue = eval(result.value);
        if (resValue === Infinity) {
          alert("Erreur : division par 0 Impossible");
          result.value = "";
          break;
        } else {
          result.value = resValue;
          break;
        }
      default:
        let getKeyCode = buttonsKey.indexOf(value);
        let btnInfo = buttons[getKeyCode];
        result.value += btnInfo.innerHTML;
        
    }
  }
};
// handle error
window.addEventListener("error", (e) => {
  alert("Erreur : " + e.message);
  result.value = "";
});


let icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  if(icon.dataset.theme == "light"){
    icon.src = "./assets/img/Group.svg";
    icon.dataset.theme = "dark";
    document.documentElement.style.setProperty("--bg-light", "#172e3e");
    document.documentElement.style.setProperty("--bg-light-1", "#1d394d");
    document.querySelector("input").style.color = "white";
  }
  else{
    icon.src = "./assets/img/sun.svg";
    icon.dataset.theme = "light";
    document.documentElement.style.setProperty("--bg-light", "#15b29f");
    document.documentElement.style.setProperty("--bg-light-1", "#a4f3f5");
    document.querySelector("input").style.color = "black";
  }
});


