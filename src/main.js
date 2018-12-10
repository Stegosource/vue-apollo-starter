import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueApollo);

const httpLink = new HttpLink({
  uri: "https://fakerql.com/graphql"
});
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "isLoading"
  }
});

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount("#app");
