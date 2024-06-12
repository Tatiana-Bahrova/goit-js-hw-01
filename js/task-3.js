function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingtWidth = Number.parseFloat(padding);
    const bordertWidth = Number.parseFloat(border);
    return totalWidth = contentWidth + paddingtWidth * 2 + bordertWidth * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));