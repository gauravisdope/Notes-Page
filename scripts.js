document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
    // JavaScript (scripts.js)
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-mode');
    }

});
