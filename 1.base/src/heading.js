function create() {
  const element = document.createElement("h2");
  element.textContent = "你好 webpack";
  element.addEventListener("click", () => {
    alert("Hello Webpack");
  });
  return element;
}

module.exports = create;