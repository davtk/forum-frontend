<template>
  <header>
    <h1>
      <router-link :to="paths.HOME">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"
          ></path>
          <path d="M10 9l-2 2l2 2"></path>
          <path d="M14 9l2 2l-2 2"></path>
        </svg>

        Example forum app
      </router-link>
    </h1>
  </header>
  <nav></nav>
  <router-view />
</template>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

:root {
  --base-margin: 25px;
  --color-accent: #f59f00;
  --color-accent-rgb: 245, 159, 0;
  --color-accent-hover: #ffa700;
  --color-muted: #aaa;
  --base-transition: 250ms;
}

::selection {
  background: var(--color-accent);
  color: white;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Nunito, sans-serif;
  font-size: 16px;

  width: 100%;
  max-width: 1250px;
  min-width: 320px;

  margin: 0 auto 100px auto;
}

/* General styles */
h1 {
  font-size: 2em;
  margin: var(--base-margin) 0;
}

h2 {
  font-size: 1.75em;
  margin: var(--base-margin) 0;
}

h3 {
  font-size: 1.5em;
}

a {
  color: var(--color-accent);
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
}

.undraw {
  text-align: center;
  padding: calc(2 * var(--base-margin)) 0;

  img {
    max-width: 256px;
    width: 100%;
  }

  p {
    margin: var(--base-margin);
  }
}

.muted {
  font-size: 0.8em;
  color: var(--color-muted);
}

/* Forms */
.form {
  > div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    > label {
      flex: 0 0 100%;
      margin-bottom: 5px;

      @media (min-width: 650px) {
        flex: 0 0 150px;
        margin-bottom: 0;
      }
    }

    > div {
      flex: 0 0 100%;

      @media (min-width: 650px) {
        flex: 0 0 500px;
      }
    }
  }
}

input,
textarea {
  width: 100%;
  padding: 5px;

  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  &:focus {
    outline-color: var(--color-accent);
  }

  &::placeholder {
    color: var(--color-muted);
  }
}

textarea {
  height: 10em;
}

.button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(var(--base-margin) / 2) var(--base-margin);

  background: var(--color-accent);
  transition: background-color var(--base-transition);

  border: none;
  border-radius: 4px;
  color: white;
  text-transform: lowercase;
  font-size: 1.5rem;

  &.icon-right {
    > svg {
      margin-left: var(--base-margin);
    }
  }

  &:disabled {
    filter: saturate(0%);
  }

  &:not(:disabled):hover {
    background: var(--color-accent-hover);
    cursor: pointer;
  }
}

// Homepage
header {
  padding: 0 10px;

  h1 > a {
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      background: var(--color-accent);
      color: white;

      width: 2em;
      height: 2em;
      border-radius: 100%;

      padding: 5px;
      margin-right: var(--base-margin);
    }
  }
}
</style>
<script>
import paths from "@/router/paths";

export default {
  components: {},
  setup() {
    return {
      paths,
    };
  },
};
</script>
