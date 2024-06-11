function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding * 2) + Number.parseFloat(border * 2);
}

console.log(getElementWidth(200, 0, 0));