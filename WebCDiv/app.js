class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const word = this.getAttribute("word");
    const color = this.getAttribute("color");
    const props = Object.fromEntries([...this.attributes].map((prop) => [
      prop.localName,
      prop.value,
    ]));
    console.log(props);
    this.attachShadow({ mode: "open" });
    this.state = {};
    this.render(color, word);
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", (e) => {
      alert(this.getAttribute("alert"));
    });
  }

  setState(newState) {
    this.state = newState;
    render();
  }

  render(color, word) {
    this.shadowRoot.innerHTML = `
      <style>
        h1 { 
          color: ${color};
        }

        ::slotted(h1) {
          color: pink;
        }
      </style>
      <h1>${word}</h1>
      <slot></slot>
      <button>Hello</button>
    `;
    // afterRender();
  }

}

customElements.define("hello-world", HelloWorld);

document.querySelector("#target").remove();
