function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingtWidth = Number.parseFloat(padding);
    const bordertWidth = Number.parseFloat(border);
    return totalWidth = contentWidth + paddingtWidth * 2 + bordertWidth * 2;
}

console.log(getElementWidth("100px", "0px", "0px"));