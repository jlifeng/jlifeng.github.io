(function () {
  if (window.__TiengmingModernized) return;
  console.log("TiengmingModern 插件启动中...");

  const themeColors = {
    light: {
      bgGradient: "linear-gradient(135deg, #f4f4f4, #fef2f2, #f4f0ff)",
      cardBg: "rgba(255,255,255,0.25)",
      cardBorder: "1px solid rgba(255,255,255,0.2)",
      title: "#1c1c1e",
      meta: "#888"
    },
    dark: {
      bgGradient: "linear-gradient(135deg, #1a1a2b, #222c3a, #2e3950)",
      cardBg: "rgba(32,32,32,0.3)",
      cardBorder: "1px solid rgba(255,255,255,0.08)",
      title: "#eee",
      meta: "#bbb"
    }
  };

  let bg = null;

  function getEffectiveMode() {
    const raw = document.documentElement.getAttribute("data-color-mode");
    if (raw === "light" || raw === "dark") return raw;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function getTextColor(bg) {
    const rgb = bg.match(/\d+/g);
    if (!rgb) return "#fff";
    const [r, g, b] = rgb.map(Number);
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "#000" : "#fff";
  }

  window.handleTagClick = function(event, tagName) {
    event.preventDefault();
    event.stopPropagation();
    const tagUrl = `tag.html#${encodeURIComponent(tagName)}`;
    window.location.href = tagUrl;
  };

  function initializeBackground() {
    if (!document.body || !document.head) return null;

    const existingBg = document.querySelector(".herobgcolor");
    if (existingBg) existingBg.remove();

    const bgEl = document.createElement("div");
    bgEl.className = "herobgcolor";
    document.body.appendChild(bgEl);

    const existingStyle = document.querySelector("#tiengming-modern-styles");
    if (existingStyle) existingStyle.remove();

    const style = document.createElement("style");
    style.id = "tiengming-modern-styles";
    style.textContent = `
      .herobgcolor {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background-size: 600% 600%;
        animation: hueflow 30s ease infinite;
        transition: background 0.6s ease;
      }
      @keyframes hueflow {
        0% { filter: hue-rotate(0deg); background-position: 0% 50%; }
        50% { filter: hue-rotate(180deg); background-position: 100% 50%; }
        100% { filter: hue-rotate(360deg); background-position: 0% 50%; }
      }
      .post-tag {
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
        padding: 2px 6px;
        margin-right: 4px;
        font-size: 0.8em;
        display: inline-block;
      }
      .post-tag:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        opacity: 0.8;
      }
    `;
    document.head.appendChild(style);

    return bgEl;
  }

  function applyTheme() {
    const mode = getEffectiveMode();
    const theme = themeColors[mode];

    if (bg) bg.style.background = theme.bgGradient;

    document.querySelectorAll(".post-card").forEach(card => {
      card.style.background = theme.cardBg;
      card.style.border = theme.cardBorder;
      card.style.backdropFilter = "blur(16px)";
      card.style.webkitBackdropFilter = "blur(16px)";
      card.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";

      const title = card.querySelector(".post-title");
      const meta = card.querySelector(".post-meta");
      if (title) title.style.color = theme.title;
      if (meta) meta.style.color = theme.meta;
    });

    ["#header", "#footer"].forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.style.color = mode === "dark" ? "#ddd" : "";
    });
  }

  function rebuildCards() {
    const listTitles = document.querySelectorAll(".listTitle");
    let sideNavItems = document.querySelectorAll(".SideNav-item");

    if (sideNavItems.length === 0 && listTitles.length > 0) {
      const parents = Array.from(listTitles).map(title => {
        let current = title.parentElement;
        while (current && !current.getAttribute("href")) {
          current = current.parentElement;
          if (current === document.body) break;
        }
        return current;
      }).filter(Boolean);

      if (parents.length > 0) sideNavItems = parents;
    }

    if (sideNavItems.length === 0) {
      setTimeout(rebuildCards, 1000);
      return;
    }

    sideNavItems.forEach((card, i) => {
      const link = card.getAttribute("href");
      if (!link) return;

      let title = card.querySelector(".listTitle")?.innerText;
      if (!title) {
        const filename = link.split("/").pop()?.replace(".html", "") || "未命名文章";
        title = filename.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      }

      const labels = [...card.querySelectorAll(".Label")];
      const time = labels.find(el => /^\d{4}/.test(el.textContent.trim()))?.textContent.trim() || "";
      const tags = labels
        .filter(el => el.textContent.trim() !== time)
        .map(el => `<span class="post-tag">${el.textContent.trim()}</span>`)
        .join("");

      const newCard = document.createElement("a");
      newCard.href = link;
      newCard.className = "post-card";
      newCard.style.animationDelay = `${i * 60}ms`;
      newCard.innerHTML = `
        <div class="post-meta">${tags}${time}</div>
        <div class="post-title">${title}</div>
      `;

      card.replaceWith(newCard);
    });

    applyTheme();
  }

  function whenReady(callback) {
    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      callback();
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(run, 100);
    } else {
      document.addEventListener("DOMContentLoaded", () => setTimeout(run, 100), { once: true });
      window.addEventListener("load", () => setTimeout(run, 100), { once: true });
    }
  }

  if (document.documentElement.getAttribute("data-color-mode") === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
  }

  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-color-mode"]
  });

  whenReady(() => {
    bg = initializeBackground();
    rebuildCards();
    applyTheme();

    window.__TiengmingModernized = true;
    console.log("TiengmingModern 插件加载完成");
  });

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && window.__TiengmingModernized) {
      const existingCards = document.querySelector(".post-card");
      const existingBg = document.querySelector(".herobgcolor");

      if (existingCards && !existingBg) {
        bg = initializeBackground();
        applyTheme();
      }
    }
  });
})();