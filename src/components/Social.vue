<template>
    <aside class="media">
        <div class="media__inner">
            <button class="media__btn media__btn_inst"></button>
            <button class="media__btn media__btn_vk"></button>
            <button class="media__btn media__btn_dzen"></button>
            <button class="media__btn media__btn_mail"></button>
        </div>
    </aside>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.media {

    &__inner {
        width: 50px;
        height: 203px;
        border-radius: 10px 0px 0px 10px;
        background-color: #000;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;

    }

    &__btn {
        width: 100%;
        height: 25%;
        background: black;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        &:first-child {
            border-radius: 10px 0px 0px 0px;
        }

        &:last-child {
            border-radius: 0px 0px 0px 10px;
        }

        &_inst {
            background: url('../assets/images/social/inst.svg') 50% 50% no-repeat;
        }

        &_vk {
            background: url('../assets/images/social/vk.svg') 50% 50% no-repeat;
        }

        &_dzen {
            background: url('../assets/images/social/dzen.svg') 50% 50% no-repeat;
        }

        &_mail {
            background: url('../assets/images/social/mail.svg') 50% 50% no-repeat;
        }

        &:hover {
            border: 1px solid white;
        }
    }
}
</style>
