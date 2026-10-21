(function () {
  "use strict";

  var THEME_KEY = "qu-yaolin-theme";
  var root = document.documentElement;

  function readTheme() {
    try {
      return window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    } catch (error) {
      return "light";
    }
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      var isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
      toggle.textContent = isDark ? "Light mode" : "Dark mode";
    }

    if (persist) {
      try {
        window.localStorage.setItem(THEME_KEY, theme);
      } catch (error) {
        /* The selected theme still applies for this visit. */
      }
    }
  }

  /* Apply the saved theme before the page is painted. */
  applyTheme(readTheme(), false);

  function initThemeToggle() {
    var toggle = document.getElementById("theme-toggle");

    if (!toggle) {
      return;
    }

    applyTheme(
      root.getAttribute("data-theme") === "dark" ? "dark" : "light",
      false
    );

    toggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    });
  }

  function initActiveSection() {
    var header = document.querySelector(".site-header");
    var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav__link"));
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));

    if (!links.length || !sections.length) {
      return;
    }

    var updateQueued = false;

    function updateActiveSection() {
      updateQueued = false;

      var headerHeight = header ? header.getBoundingClientRect().height : 0;
      var marker = window.scrollY + headerHeight + 24;
      var activeId = sections[0].id;

      sections.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= marker) {
          activeId = section.id;
        }
      });

      var pageIsScrollable =
        document.documentElement.scrollHeight > window.innerHeight + 2;

      if (
        pageIsScrollable &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      ) {
        activeId = sections[sections.length - 1].id;
      }

      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + activeId) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    function queueUpdate() {
      if (updateQueued) {
        return;
      }

      updateQueued = true;
      window.requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    window.addEventListener("hashchange", queueUpdate);
    window.addEventListener("load", queueUpdate);
    updateActiveSection();
  }

  function init() {
    initThemeToggle();
    initActiveSection();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
