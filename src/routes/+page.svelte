<script lang="ts">
  const pages = [
    { url: "/01-toggle-menu", title: "Toggle Menu" },
    { url: "/02-alertbox", title: "Alertbox" },
    { url: "/03-photo-viewer", title: "Photo Viewer" },
    { url: "/04-tab", title: "Tab" },
    { url: "/05-dropdown-menu", title: "Dropdown Menu" },
    { url: "/06-floating-menu", title: "Floating Menu" },
    { url: "/07-lightbox-modal", title: "LoghtBox + Modal" },
    { url: "/08-photo-caption", title: "Photo Caption" },
    { url: "/09-tooltip", title: "Tooltip" },
    { url: "/10-equal-height", title: "Equal Height" },
    { url: "/11-text-resizer", title: "Text Resizer" },
    { url: "/12-parallax", title: "Parallax" },
    { url: "/13-filtering", title: "Filtering" },
    { url: "/14-row-col-highlight", title: "Row and Column Highlighting" },
    { url: "/15-accordion", title: "Accordion" },
    { url: "/16-smooth-scroll", title: "Smooth Scroll" },
    { url: "/17-random-banner", title: "Random Banner" },
    { url: "/18-form-validation", title: "Form Validation" },
    { url: "/19-resize-header", title: "Resize Header" },
    { url: "/20-sticky-header", title: "Sticky Header" },
    { url: "/21-highlight-menu", title: "Highlight Menu" },
    { url: "/22-horizontal-slider", title: "Horizontal Slider" },
    { url: "/23-fade-slider", title: "Fade Slider" },
    { url: "/24-zoom-effect", title: "Zoom Effect" },
    { url: "/25-count-up-game", title: "Count Up Game" },
    { url: "/26-parallax-v2", title: "Parallax V2" },
  ];
</script>

<div class="container">
  <div class="wrapper">
    <h1>Svelte Practice</h1>
    <ul>
      {#each pages as page}
        <li>
          <a href={page.url}>{page.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #0766ad;
    color: white;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
  .wrapper {
    width: 1024px;
    margin: 0 auto;
  }
  h1 {
    position: relative;
    font-size: 30px;
    padding: 20px 0;
    margin-bottom: 4px;
  }

  ul {
    list-style: decimal;
    margin: 0;
    padding: 0 0 0 16px;
  }
  li + li {
    margin-top: 8px;
  }
  a {
    font-size: 20px;
    color: white;
  }
  a:hover {
    text-decoration: none;
  }
</style>
