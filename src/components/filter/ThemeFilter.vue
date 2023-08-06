<template>
    <div class="filter">
        <div class="filter__inner container">
            <FilterItem v-for="filterOption in filterOptions" :key="filterOption.name" :filterOption="filterOption"
                :value="modelValue" @change="changeFilter" @click="removeFilter" :posts="posts" />

        </div>
    </div>
</template>
<script>
import FilterItem from '@/components/filter/FilterItem.vue';

export default {
    components: {
        FilterItem
    },
    props: {
        modelValue: {
            type: String
        },
        posts: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            filterOptions: [
                {
                    id: 1,
                    name: 'Генетика',
                    src: require('@/assets/images/filter/DNA.png'),
                    value: 'Генетика',
                },
                {
                    id: 2,
                    name: 'Микробиота',
                    src: require('@/assets/images/filter/petri.png'),
                    value: 'Микробиота',
                },
                {
                    id: 3,
                    name: 'Генетические тесты',
                    src: require('@/assets/images/filter/probirka.png'),
                    value: 'Генетические тесты',
                },
                {
                    id: 4,
                    name: 'Гайды',
                    src: require('@/assets/images/filter/book.png'),
                    value: 'Гайды',
                },
                {
                    id: 5,
                    name: 'Здоровье',
                    src: require('@/assets/images/filter/lab.png'),
                    value: 'Здоровье',
                },
                {
                    id: 6,
                    name: 'Образ жизни',
                    src: require('@/assets/images/filter/party.png'),
                    value: 'Образ жизни',
                },
                {
                    id: 7,
                    name: 'Пищеварение',
                    src: require('@/assets/images/filter/toilet.png'),
                    value: 'Пищеварение',
                },
                {
                    id: 8,
                    name: 'Питание',
                    src: require('@/assets/images/filter/avocado.png'),
                    value: 'Питание',
                },
                {
                    id: 9,
                    name: 'Отзывы',
                    src: require('@/assets/images/filter/heart.png'),
                    value: 'Отзывы',
                },
                {
                    id: 10,
                    name: 'Онкология',
                    src: require('@/assets/images/filter/micro.png'),
                    value: 'Онкология',
                },
                {
                    id: 11,
                    name: 'Новости',
                    src: require('@/assets/images/filter/news.png'),
                    value: 'Новости',
                },
                {
                    id: 12,
                    name: 'Рецепты',
                    src: require('@/assets/images/filter/salad.png'),
                    value: 'Рецепты',
                }
            ],
        }
    },
    methods: {
        changeFilter(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        removeFilter(event) {
            if (this.modelValue == event.target.value) {
                event.target.checked = false;
                this.$emit('update:modelValue', '');
            }
        },
    },

}
</script>

<style lang="scss" scoped>
.filter {

    &__inner {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        column-gap: 8px;
        row-gap: 10px;
    }
}
</style>
