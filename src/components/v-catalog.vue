<template>
  <div class="v-catalog">
    <h2>Я каталог!</h2>
    <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :productData="product"
      @sendToParent="cartUpdate(true, product)"
      @removeFromCart="cartUpdate(false, product)"
    />
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: { vCatalogItem },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    cartUpdate(isAdd, product) {
      if (isAdd) {
        console.log(`${product.name} added to cart!`);
      } else {
        console.log(`${product.name} removed from cart!`);
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API().then((response) => {
        if (response.data) {
          console.log("Данные о товарах пришли");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.v-catalog {
}
</style>
