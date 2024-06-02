// src/javascript/script.js
export const handleFirstPageAnimation = () => {
    setTimeout(() => {
        const firstPage = document.getElementById("first-page");
        if (firstPage) {
            firstPage.style.opacity = 1;
            firstPage.style.transform = "translateY(0)";
        }
        const firstPagePart = document.getElementById("first-page-part");
        if (firstPagePart) {
            firstPagePart.style.opacity = 1;
            firstPagePart.style.transform = "translateY(0)";
        }
    }, 0);
};