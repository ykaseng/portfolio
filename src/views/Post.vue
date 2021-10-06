<template>
  <div class="container">
      <h1>{{ post.title }}</h1>
      <div class="content">
          <div v-html="post.html"></div>
      </div>
  </div>
</template>

<script>
import { getSinglePost } from '@/api/posts'

export default {
    name: 'Post',
    components: {},
    data() {
        return {
            post: {}
        }
    },
    methods: {
        async fetchPost () {
            const post = await getSinglePost(this.$route.params.slug)
            return post
        }
    },
    async created() {
        this.post = await this.fetchPost()
    }
    
}
</script>

<style scoped>

</style>