// Entrance — a quiet fade. Nothing loops, nothing follows the cursor.
(function () {
  var targets = document.querySelectorAll(".work, .guide-card, .series-book, .about-flow p");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduce) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px" });

  targets.forEach(function (el) { io.observe(el); });
})();
