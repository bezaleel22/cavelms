<script>
  import { onMount } from "svelte";

  function getNonInheritedStyles(element) {
    const computedStyles = window.getComputedStyle(element);
    const nonInheritedStyles = {};

    for (let property of computedStyles) {
      const computedValue = computedStyles[property];
      const defaultValue = window.getComputedStyle(document.body)[property];
      if (computedValue !== defaultValue) {
        nonInheritedStyles[property] = computedValue;
      }
    }

    return nonInheritedStyles;
  }

  let email;
  onMount(() => {
    const elements = email.querySelectorAll('[class]');

    elements.forEach(element => {
      const styles = getNonInheritedStyles(element);

      // Check if styles is defined and not empty before processing
      if (styles && Object.keys(styles).length > 0) {
        const styleString = Object.entries(styles).map(([prop, value]) => `${prop}:${value}`).join(';');
        element.setAttribute('style', styleString);

        // Remove class names from the element if it has the 'class' attribute
        const classAttribute = element.getAttribute('class');
        if (classAttribute) {
          const classNames = classAttribute.split(' ');
          classNames.forEach(className => {
            element.classList.remove(className);
          });
        }
      }
    });
    console.log(email)
  });
</script>

<div bind:this={email} id="email-container">
  <div class="flex flex-col items-center">
    <h1 class="text-red">Hello, Svelte!</h1>
    <p class="text-red">This is a sample paragraph.</p>
  </div>
</div>

<style>
  /* Your component's scoped styles here */
  .container {
    padding: 16px;
    background-color: #f0f0f0;
  }
  .text-red {
    color: red;
  }
</style>
