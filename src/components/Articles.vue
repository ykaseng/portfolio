<template>
    <div class="container">
        <Title :title=title />
        <p>A random collection of poorly written, poorly researched articles on technology, philosophy, and more!</p>
        <div class="article-container">
            <ul class="article-list">
                <li class="article-item" v-for="(post, index) in posts" :key="index">
                    <router-link :to="{ path: '/verbose/' + post.slug }">{{ Date.parse(post.created_at)/1000 }} {{ post.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getPosts } from "@/api/posts"
import Title from '@/components/Title'

export default {
    name: 'Articles',
    components: {
        Title
    },
    data() {
        return {
            posts:[],
        }
    },
    methods: {
        async fetchPosts() {
            let o = Object.assign({
                limit: "all",
                include: "tags,authors"
            },
                !this.tags.length ? null : { filter: "tag:"+this.tags }
            )

            const posts = await getPosts(o)
            return posts
        }
    },
    props: {
        title: {
            type: String,
            default: 'Articles'
        },
        tags: {
            type: Array,
            default: () => []
        }
    },
    async created() {
        this.posts = await this.fetchPosts()
        console.log(this.posts)
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

li.article-item a {
    text-decoration: none;
}

</style>