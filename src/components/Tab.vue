<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    title: {
      type: String,
      default: "Tab",
    },
  },
  data: function () {
    return {
      isActive: true,
    };
  },
  created() {
    console.log(this.$parent);
    this.$parent.tabs.push(this);
  },
};
</script>
