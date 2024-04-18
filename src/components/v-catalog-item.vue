<template>
  <div class="v-catalog-item">
    <img :src="require('../assets/images/' + productData.image)" alt="" />
    <p class="v-catalog-item__name">{{ productData.name }}</p>
    <p class="v-catalog-item__price">{{ productData.price }}</p>
    <p class="v-catalog-about">{{ productData.about }}</p>
    <button class="v-catalog-item__add_to_cart_btn" @click="sendToParent">
      Add to cart
    </button>
    <button class="v-catalog-item__remove_from_cart_btn" @click="removeFromCart">
      Remove from cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.productData);
  },
  methods: {
    sendToParent() {
      this.$emit("sendToParent", this.productData);
    },
    removeFromCart() {
      this.$emit("removeFromCart", this.productData);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  background-color: aqua;
  padding: 5%;
  max-width: 120px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
