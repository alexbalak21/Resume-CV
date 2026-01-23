document.addEventListener("DOMContentLoaded", () => {
  const iconElements = document.querySelectorAll("i.ico");

  iconElements.forEach(async (el) => {
    const match = el.className.match(/ico-([a-z0-9_-]+)/i);
    if (!match) return;

    const iconName = match[1];
    try {
      const response = await fetch(`/icons/${iconName}.svg`);
      if (!response.ok) throw new Error(`SVG not found: ${iconName}`);
      const svgText = await response.text();

      const parser = new DOMParser();
      const svg = parser.parseFromString(svgText, "image/svg+xml").documentElement;
      svg.classList.add("svg-icon", `svg-${iconName}`);

      el.replaceWith(svg);
    } catch (err) {
      console.error(`Error loading icon "${iconName}":`, err);
    }
  });
});
