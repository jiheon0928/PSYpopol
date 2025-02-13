let lastScrollTop = 0;
const scrollHead = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScrollTop) {
    scrollHead.style.transform = "translateY(-100%)";
  } else {
    scrollHead.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const communityhover = document.querySelector(".community_hidden_button");
const communityHidden = document.querySelector(".community_hidden");
const hoverArrow = document.querySelector(".hoverArrow");

communityhover.addEventListener("mouseover", () => {
  communityHidden.style.display = "flex";
  hoverArrow.style.transform = "rotate(270deg)";
});

communityhover.addEventListener("mouseout", () => {
  communityHidden.style.display = "none";
  hoverArrow.style.transform = "rotate(90deg)";
});
