<template>
    <div class="posts">
        <div class="posts__inner">
            <PostItem v-for="post in getPagePosts" :key="post.id" :postInfo="post" />
            <my-button class="posts__btn" @click="loadMorePosts">Показать ещё</my-button>
            <div class="posts__pages">
                <mini-button class="posts__page" :class="{
                    'posts__page_current': page == this.page
                }" v-for=" page  in  totalPages " :key="page" @click="changePage(page)">
                    {{ page }}
                </mini-button>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from '@/components/posts/PostItem.vue';
export default {
    components: {
        PostItem
    },
    data() {
        return {
            page: 1,
            limit: 16,
            totalPages: 0,
        }
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        getTotalPages() {
            this.totalPages = Math.ceil(this.posts.length / this.limit)
        },
        changePage(pageNumber) {
            this.page = pageNumber;
        },
        loadMorePosts() {
            this.limit += 12
        }
    },
    computed: {
        getPagePosts() {
            return [...this.posts].slice((this.page - 1) * this.limit, this.limit * this.page)
        },
    },
    mounted() {
        this.getTotalPages()
    }
}
</script>

<style lang="scss" scoped>
.posts {
    flex-basis: 80%;

    &__inner {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
    }

    &__btn {
        flex-basis: 100%;
        background: inherit;
        border: 1px solid rgba(0, 0, 0, 0.10);
    }

    &__pages {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }

    &__page {
        width: 40px;
        height: 40px;

        &_current {
            color: #fff;
            background-color: black;
        }
    }

    @media (max-width: 1800px) {
        &__inner {
            gap: 30px;
        }
    }
}
</style>
