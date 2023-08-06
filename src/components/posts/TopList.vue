<template>
    <aside class="topPost">
        <div class="topPost__inner">
            <h3 class="topPost__title">Топ статьи</h3>
            <template v-for="topPost in posts" :key="topPost.title">
                <TopItem :topPost="topPost" />
                <hr>
            </template>
        </div>
    </aside>
</template>
<script>
import TopItem from '@/components/posts/TopItem.vue';
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        TopItem
    },
    data() {
        return {
        }
    }
}
</script>


<style lang="scss" scoped>
hr {
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    height: 1px;
    margin: 0;
}

.topPost {
    flex-basis: 25%;

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px;
    }

    &__title {
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
    }
}
</style>
