<template>
    <div class="post">
        <div class="post__inner">
            <div class="post__img" :class="{
                'post__inner_video': postInfo.theme === 'Видео'
            }">
                <img :src="postInfo.ImgSrc" alt="Post previev">
                <span class="post__theme">{{ postInfo.theme }}</span>
            </div>
            <h4 class="post__title">{{ postInfo.title }}</h4>
            <div class="post__info">
                {{ postInfo.date }} &#xb7 {{ postInfo.readingTime }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        postInfo: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.post {
    width: 251px;
    min-height: 334px;

    &__inner {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
        border-radius: 30px 30px 0 0;

        &:hover {
            transform: scale(1.05);
            background: rgba(0, 0, 0, 0.1);
        }

        &_video {
            &::after {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                content: '';
                width: 35px;
                height: 35px;
                background: url('@/assets/images/play.svg') no-repeat;

            }

            &::before {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                content: '';
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: rgba(118, 69, 239, 1);
            }
        }
    }

    &__theme {
        position: absolute;
        padding: 8px 12px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.50);
        backdrop-filter: blur(40px);
        color: rgba(255, 255, 255, 0.80);
        left: 3%;
        bottom: 5%;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    &__img {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        overflow: hidden;
    }

    &__title {
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
        padding-left: 5px;
    }

    &__info {
        font-size: 18px;
        line-height: 24px;
        padding-left: 5px;

    }
}
</style>
