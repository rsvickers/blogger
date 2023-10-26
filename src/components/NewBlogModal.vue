<template>
  <div class="modal fade" id="newBlogModal" tabindex="-1" aria-labelledby="newBlogModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="newBlogModalLabel">New Blog</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="">
            <input v-model="form.title" type="text" placeholder="itle" maxlength="100" id="title">
            <input v-model="form.tags" type="text" placeholder="Tags" maxlength="50" id="tags">
            <input v-model="form.imgUrl" type="url" placeholder="Image URL" id="imgUrl">
            <textarea v-model="form.body" placeholder="Write Blog Post..." maxlength="10000" id="body" />
            <button class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
export default {
  setup() {
    const form = ref({})
    return {}
  }
};
</script>


<style lang="scss" scoped></style>