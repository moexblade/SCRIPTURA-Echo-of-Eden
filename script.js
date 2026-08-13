// One generic handler drives every story image/text pair on the
// page, wired up via `data-target` in the HTML instead of a
// separate near-identical function (and inline onclick) per section.

function toggleStory(image, text) {
    text.classList.toggle("active");
    image.classList.toggle("move-down");
    image.classList.remove("clicked");

    // force reflow so the "clicked" animation restarts every time
    void image.offsetWidth;

    image.classList.add("clicked");

    if (text.classList.contains("active")) {
        setTimeout(() => {
            text.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 120);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".story-image[data-target]").forEach((image) => {
        const text = document.getElementById(image.dataset.target);
        if (!text) return;
        image.addEventListener("click", () => toggleStory(image, text));
    });
});
