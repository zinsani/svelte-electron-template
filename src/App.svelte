<script>
  import { onMount } from "svelte";
  export let name;

  let config;

  onMount(async () => {
    config = await window.api.getConfig();
    console.log(config);
    await window.api.setConfig({
      debug: false,
    });
    console.log("new config sent to main");
  });
</script>

<main>
  <h1>Hello {name}!!!</h1>
  <section>
    {#if config}
      <span>config.debug: {config.debug}</span>
    {/if}
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
