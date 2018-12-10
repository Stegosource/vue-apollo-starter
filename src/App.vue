<template>
  <div id="app">
    <p v-if="isLoading">LOADING.....</p>
    <button
      v-else
      @click="onClick"
    >Click</button>
  </div>
</template>

<script>
import gql from "graphql-tag";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      name
      price
    }
  }
`;

export default {
  name: "app",
  data: () => ({
    isLoading: 0
  }),
  apollo: {
    allProducts: {
      query: ALL_PRODUCTS_QUERY
      // variables: {}
    }
  },
  methods: {
    async onClick() {
      const res = await this.$apollo.query({
        query: ALL_PRODUCTS_QUERY
      });
      console.log(res);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
