<template>
    <div class="item">
        <h2 class="item__title">{{ topPost.title }}</h2>
        <span class="item__theme">{{ topPost.theme }}</span>
    </div>
</template>
<script>
export default {
    props: {
        topPost: {
            type: Object,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
.item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        transform: scale(1.01);
    }

    &__title {
        order: 2;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
    }

    &__theme {
        order: 1;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.3);
    }

}
</style>
