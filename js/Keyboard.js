const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capslock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        var containerFiltro = document.querySelector(".container_filtro_keyboard")

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        containerFiltro.appendChild(this.elements.main);


        this.elements.main.addEventListener('click', filtrar)
        // Automatically use keyboard for elements
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("click", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç", "enter",
            "limpar", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyELement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyELement.setAttribute("type", "button");
            keyELement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyELement.classList.add("keyboard__key--wide");
                    keyELement.innerHTML = createIconHTML("backspace");

                    keyELement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyELement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyELement.innerHTML = createIconHTML("keyboard_capslock");

                    keyELement.addEventListener("click", () => {
                        this._toogleCapsLock();
                        keyELement.classList.toggle("keyboard__key--active", this.properties.capslock);
                    });

                    break;

                case "enter":
                    keyELement.classList.add("keyboard__key--wide");
                    keyELement.innerHTML = createIconHTML("keyboard_return");

                    keyELement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");

                        var teclado_virtual = document.querySelector(".keyboard")
                        teclado_virtual.classList.add("keyboard--hidden")

                    });

                    break;

                case "space":
                    keyELement.classList.add("keyboard__key--extra--wide");
                    keyELement.classList.add("keyboard__key--large_with");
                    keyELement.innerHTML = createIconHTML("space_bar");

                    keyELement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "limpar":
                    keyELement.classList.add("keyboard__key--wide");

                    keyELement.innerHTML = "limpar";

                    keyELement.addEventListener("click", () => {
                        this.properties.value = "";
                        this._triggerEvent("oninput");
                    });


                    break;

                default:
                    keyELement.textContent = key.toLowerCase();

                    keyELement.addEventListener("click", () => {
                        this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;

            }

            fragment.appendChild(keyELement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }

        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toogleCapsLock() {
        this.properties.capslock = !this.properties.capslock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();

});