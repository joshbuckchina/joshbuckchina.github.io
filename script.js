// 页脚年份
document.getElementById("year").textContent = new Date().getFullYear();

// 滚动到视口时淡入
(function () {
  var items = document.querySelectorAll(".reveal");

  // 不支持 IntersectionObserver 或用户偏好减少动效时，直接显示
  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach(function (el) {
    io.observe(el);
  });
})();
