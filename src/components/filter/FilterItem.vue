<template>
    <div class="option">
        <input :id="filterOption.id" type="radio" :value="filterOption.value" name="option" @click="unselect">
        <label :for="filterOption.id" class="option__label">
            <img :src="filterOption.src" alt="Иконка фильтра" class="option__img">
            {{ filterOption.name }}
            <span class="option__counter">{{ getTotal }}</span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        filterOption: {
            type: Object,
            required: true
        },
        posts: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
        }
    },
    computed: {
        getTotal() {
            let total = 0;
            for (let post of this.posts) {
                if (post.theme == this.filterOption.name) total += 1;
            }
            return total;
        }
    }
}
</script>

<style lang="scss" scoped>
.option {
    height: 43px;
    min-width: 137px;

    & input {
        cursor: pointer;
        user-select: none;

        &[type=radio] {
            display: none;

            &:checked+.option__label {
                background-color: rgba(210, 120, 255, 0.5);
                border-color: black;
            }
        }
    }

    &__label {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: 2px solid rgba(0, 0, 0, 0.2);
        padding: 6px 15px 9px 15px;
        border-radius: 100px;
        cursor: pointer;

        &:hover {
            border-color: rgba(0, 0, 0, 0.6);
            background-color: rgba(210, 120, 255, 0.1);
        }
    }

    &__img {
        width: 20px;
        height: 20px;
    }

}
</style>
