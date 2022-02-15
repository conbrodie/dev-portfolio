<template>
  <div class="tabs-wrapper">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        @click="selectTab(index)"
        :class="{ tab__selected: index == selectedIndex }"
        :key="tab"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    };
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
  mounted() {
    this.selectTab(0);
  },
};
</script>
