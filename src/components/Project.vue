<template>
  <div class="card-wrapper">
    <div class="image-wrapper" :style="{ 'background-color': imgBackground }">
      <img :src="img" class="image" />
    </div>
    <div class="inner">
      <div class="c-header">
        <p class="fw-bold text-title">
          {{ title }}
        </p>

        <p class="fw-light my-0">{{ type }}</p>
      </div>
      <div class="c-body">
        <div class="content-row">
          <div style="display: flex; flex-flow: wrap">
            <h6
              class="me-3 my-0"
              v-for="technology in technologies"
              :key="technology"
            >
              {{ technology }}
            </h6>
          </div>
          <div class="icon-row">
            <a
              v-for="link in links"
              :key="link.id"
              :href="link.link"
              target="_blank"
            >
              <font-awesome-icon
                class="svg-btn-sm svg-btn-light"
                :icon="[link.style, link.icon]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    img: String,
    imgBackground: String,
    type: String,
    title: String,
    technologies: Array,
    links: Array,
  },
};
</script>
