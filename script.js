const menuLinks = document.querySelectorAll(".menu-link");
const menuUser = document.querySelector(".menu-user-text");
const menuArrows = document.querySelectorAll(".menu-arrow");
const subMenus = document.querySelectorAll(".sub-menu-cnt");
let isActive = false;
let activeMenuLink = null;

function inactivateAllLinks() {
  isActive = false;
  activeMenuLink = null;
  menuLinks.forEach((menuLink, index) => {
    const menuLinkIcons = menuLink.querySelectorAll(".menu-link-icon > path");

    menuLink.classList.add("inactive-menu-link");
    menuLink.classList.remove("active-menu-link");

    menuUser.classList.add("inactive-menu-user");
    menuUser.classList.remove("active-menu-user");

    menuLinkIcons.forEach((path) => path.setAttribute("fill", "#aeb9e1"));

    menuArrows[index].classList.add("inactive-menu-arrow");
    menuArrows[index].classList.remove("active-menu-arrow");

    subMenus[index].style.display = "none";
  });
}

function inactivateLink(menuLink, index) {
  const menuLinkIcons = menuLink.querySelectorAll(".menu-link-icon > path");

  menuLink.classList.add("inactive-menu-link");
  menuLink.classList.remove("active-menu-link");

  menuUser.classList.add("inactive-menu-user");
  menuUser.classList.remove("active-menu-user");

  menuLinkIcons.forEach((path) => path.setAttribute("fill", "#aeb9e1"));

  menuArrows[index].classList.add("inactive-menu-arrow");
  menuArrows[index].classList.remove("active-menu-arrow");

  subMenus[index].style.display = "none";
}

function activateLink(menuLink, index) {
  const menuLinkIcons = menuLink.querySelectorAll(".menu-link-icon > path");
  menuLink.classList.add("active-menu-link");
  menuLink.classList.remove("inactive-menu-link");

  menuUser.classList.add("active-menu-user");
  menuUser.classList.remove("inactive-menu-user");

  menuLinkIcons.forEach((path) => path.setAttribute("fill", "#cb3cff"));

  menuArrows[index].classList.add("active-menu-arrow");
  menuArrows[index].classList.remove("inactive-menu-arrow");

  subMenus[index].style.display = "block";
}

menuLinks.forEach((menuLink, index) => {
  menuLink.addEventListener("click", () => {
    if (menuLink.classList.contains("active-menu-link")) {
      if (activeMenuLink === menuLink) {
        inactivateLink(menuLink, index);
        isActive = false;
        activeMenuLink = null;
      } else inactivateAllLinks();
    } else {
      if (isActive) inactivateAllLinks();
      activateLink(menuLink, index);
      isActive = true;
      activeMenuLink = menuLink;
    }
  });
});

subMenus.forEach((subMenu) => {
  const subMenuLinks = subMenu.querySelectorAll(".sub-menu-link");
  subMenuLinks.forEach((subMenuLink) => {
    subMenuLink.addEventListener("click", () => {
      let activeSubMenuLink = subMenuLink;
      subMenuLinks.forEach((link) => {
        link.classList.remove("active-sub-menu-link");
        link.classList.add("inactive-sub-menu-link");
      });
      activeSubMenuLink.classList.add("active-sub-menu-link");
    });
  });
});

const burgerMenu = document.querySelector(".burger-menu");
const aside = document.querySelector("aside");
const closeMenu = document.querySelector(".close-menu");

burgerMenu.addEventListener("click", () => {
  aside.classList.add("opened-sidebar");
});

closeMenu.addEventListener("click", () => {
  aside.classList.remove("opened-sidebar");
});
