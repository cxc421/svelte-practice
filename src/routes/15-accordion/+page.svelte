<script lang="ts">
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  function cubic_out(t: number) {
    const f = t - 1.0;
    return f * f * f + 1.0;
  }

  function customSlide(
    node: Element,
    { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}
  ) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties =
      axis === "y" ? ["top", "bottom"] : ["left", "right"];
    const capitalized_secondary_properties = secondary_properties.map(
      (e) =>
        /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */ (
          `${e[0].toUpperCase()}${e.slice(1)}`
        )
    );

    const padding_start_value = parseFloat(
      // @ts-ignore
      style[`padding${capitalized_secondary_properties[0]}`]
    );
    const padding_end_value = parseFloat(
      // @ts-ignore
      style[`padding${capitalized_secondary_properties[1]}`]
    );
    const margin_start_value = parseFloat(
      // @ts-ignore
      style[`margin${capitalized_secondary_properties[0]}`]
    );
    const margin_end_value = parseFloat(
      // @ts-ignore
      style[`margin${capitalized_secondary_properties[1]}`]
    );
    const border_width_start_value = parseFloat(
      // @ts-ignore
      style[`border${capitalized_secondary_properties[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      // @ts-ignore
      style[`border${capitalized_secondary_properties[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t: number) =>
        "overflow: hidden;" +
        // `opacity: ${Math.min(t * 20, 1) * opacity};` +
        `${primary_property}: ${t * primary_property_value}px;` +
        `padding-${secondary_properties[0]}: ${t * padding_start_value}px;` +
        `padding-${secondary_properties[1]}: ${t * padding_end_value}px;` +
        `margin-${secondary_properties[0]}: ${t * margin_start_value}px;` +
        `margin-${secondary_properties[1]}: ${t * margin_end_value}px;` +
        `border-${secondary_properties[0]}-width: ${
          t * border_width_start_value
        }px;` +
        `border-${secondary_properties[1]}-width: ${
          t * border_width_end_value
        }px;`,
    };
  }

  const data = [
    { id: "acc1", tab: 1 },
    { id: "acc2", tab: 2 },
    { id: "acc3", tab: 3 },
    { id: "acc4", tab: 4 },
  ];
  let selectTab = 1;

  function onClickTab(tab: number) {
    selectTab = tab;
  }
</script>

<div class="container">
  <h1>Accordion</h1>
  <main>
    <dl>
      {#each data as d}
        <dt>
          <a href={`#${d.id}`} on:click|preventDefault={() => onClickTab(d.tab)}
            >{d.tab}</a
          >
        </dt>
        {#if d.tab === selectTab}
          <dd
            id={d.id}
            transition:customSlide={{
              duration: 300,
              axis: "x",
              easing: sineInOut,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </dd>
        {/if}
      {/each}
    </dl>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #ececec;
    color: #515151;

    min-height: 100vh;
    overflow: auto;
  }

  main {
    display: block;
    width: 1000px;
    margin: 0 auto;
    line-height: 2em;
    color: #fff;
  }

  h1 {
    text-align: center;
    font-size: 4.5em;
    font-weight: normal;
    margin: 80px 0;
    color: #47475a;
  }

  dt {
    float: left;
  }

  dd {
    float: left;
    width: 800px;
    height: 350px;
    overflow: hidden;
  }

  dt a {
    text-align: center;
    display: block;
    padding: 20px 0;
    width: 50px;
    height: 310px;
    color: #fff;
    text-decoration: none;
  }

  dt a:hover {
    background: #da7354;
  }

  dd p {
    padding: 20px;
    width: 740px;
  }

  dt:nth-of-type(1),
  dt:nth-of-type(1) + dd {
    background: #47475a;
  }

  dt:nth-of-type(2),
  dt:nth-of-type(2) + dd {
    background: #55556b;
  }

  dt:nth-of-type(3),
  dt:nth-of-type(3) + dd {
    background: #636375;
  }

  dt:nth-of-type(4),
  dt:nth-of-type(4) + dd {
    background: #767686;
  }
</style>
