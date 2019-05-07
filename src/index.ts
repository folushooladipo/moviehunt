function component() {
    const element = document.createElement("div")
    element.innerHTML = "Hello and welcome to Movie Hunt!"

    return element
}

document.body.appendChild(component())
