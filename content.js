// remove "AI overview" top bar
const h1 = Array.from(document.querySelectorAll("h1")).find(e => e.textContent.trim() === "AI overview");
if (h1) {
    const h1ParentDiv = h1.closest("div");
    if (h1ParentDiv) {
        h1ParentDiv.remove();
        console.log('Removed "AI overview"');
    }
} else {
    console.log('<h1> with text "AI overview" not found.');
}

// remove "Sponsored" top bar
const span = Array.from(document.querySelectorAll("span")).find(e => e.textContent.trim() === "Sponsored");
if (span) {
    const spanParentDiv = span.closest("div")?.parentElement?.parentElement?.parentElement;
    if (spanParentDiv) {
        spanParentDiv.remove();
        console.log('Removed "Sponsored"');
    }
} else {
    console.log('<span> with text "Sponsored" not found.');
}
