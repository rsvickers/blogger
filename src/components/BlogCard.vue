<template>
  <section class="row p-3 card">
    <div class="col-8 d-flex">
      <router-link :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
        <img class="avatarPicture rounded-circle" :src="blog.creator.picture" :alt="blog.creator.name">
        <p>{{ blog.creator.name }}</p>
      </router-link>
    </div>
    <div>
      <h4><b>{{ blog.title }}</b></h4>
      <p>{{ blog.body }}</p>
    </div>
    <div class="col-4">
      <img :src="blog.imgUrl" :alt="blog.title">
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from "../models/Blog";
export default {
  props: {
    blog: { type: Blog, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 35vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.avatarPicture {
  height: 10vh;
  width: 10vw;
  object-fit: cover;
  object-position: center;
}
</style>