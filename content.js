// Task 1: Modify <div> two levels above <h1> with "AI overview"
const h1 = Array.from(document.querySelectorAll("h1")).find(e => e.textContent.trim() === "AI overview");
if (h1) {
    const h1ParentDiv = h1.closest("div");
    if (h1ParentDiv) {
        h1ParentDiv.remove();
        console.log('Removed parent <div> of <h1> "AI overview".');
    } else {
        console.log("Parent <div> of <h1> not found.");
    }
} else {
    console.log('<h1> with text "AI overview" not found.');
}

// Task 2: Remove <div> three levels above <span> with "Sponsored"
const span = Array.from(document.querySelectorAll("span")).find(e => e.textContent.trim() === "Sponsored");
if (span) {
    const spanParentDiv = span.closest("div")?.parentElement?.parentElement?.parentElement;
    if (spanParentDiv) {
        spanParentDiv.remove();
        console.log('Removed third-level parent <div> of <span> "Sponsored".');
    } else {
        console.log("Third-level parent <div> of <span> not found.");
    }
} else {
    console.log('<span> with text "Sponsored" not found.');
}
