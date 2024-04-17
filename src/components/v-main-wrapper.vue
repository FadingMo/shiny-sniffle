<template>
  <div class="v-main-wrapper"></div>
  <vCatalog />
  <vCart />
</template>

<script>
import vCatalog from "@/components/v-catalog";
import vCart from "@/components/v-cart";

export default {
  name: "v-main-wrapper",
  components: { vCatalog, vCart },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.main-wrapper {
  margin: 0;
}
</style>
