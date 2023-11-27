<script lang="ts">
  const pages = [
    { url: "/01-toggle-menu", title: "Toggle Menu" },
    { url: "/02-alertbox", title: "Alertbox" },
    { url: "/03-photo-viewer", title: "Photo Viewer" },
    { url: "/04-tab", title: "Tab" },
    { url: "/05-dropdown-menu", title: "Dropdown Menu" },
    { url: "/06-floating-menu", title: "Floating Menu" },
    { url: "/07-lightbox-modal", title: "LoghtBox + Modal" },
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
