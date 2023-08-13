<template>
    <header class="header">
        <div class="header__inner container">
            <img src="../assets/images/logo.svg" alt="Logo" class="header__logo">
            <template v-if="!isSearching">
                <nav class="header__navigation navigation">
                    <a href="#" class="navigation__link">Генетический тест</a>
                    <a href="#" class="navigation__link">Тест микробиоты</a>
                    <a href="#" class="navigation__link">Полный геном</a>
                    <a href="#" class="navigation__link">Интерпретация данных</a>
                    <a href="#" class="navigation__link">Об Атласе</a>
                </nav>
                <div class="header__action action">
                    <mini-button class="action__btn action__btn_cart"></mini-button>
                    <mini-button class="action__btn action__btn_profile"></mini-button>
                    <mini-button class="action__btn action__btn_search" @click="setSearching"></mini-button>
                </div>
            </template>
            <div v-else class="header__search search">
                <button class="search__btn search__btn_searching" @click="setSearchValue"></button>
                <input type="text" class="search__input" placeholder="Поиск" v-model="searchValue">
                <button class="search__btn search__btn_close" @click="setSearching"></button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isSearching: false,
            searchValue: '',
        }
    },
    methods: {
        setSearching() {
            this.searchValue = '';
            this.isSearching = !this.isSearching;
            this.setSearchValue();
        },
        setSearchValue() {
            this.$emit('update:modelValue', this.searchValue);
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 100px;
    background-color: rgba(118, 69, 239, 1);

    &__inner {
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 40px;
    }

    &__logo {
        cursor: pointer;
    }

    &__navigation {
        flex-basis: 60%;
    }

    &__action {
        margin-left: auto;
        width: 144px;
    }

    &__search {
        flex-basis: 60%;
    }

    @media (max-width: 1400px) {
        &__navigation {
            flex-basis: 70%;
        }
    }
}

.navigation {
    display: flex;
    gap: 40px;

    &__link {
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;

        &:hover {
            transform: scale(1.1);
            font-weight: 600;
        }
    }

    @media (max-width: 1500px) {
        gap: 20px;
    }
}

.action {
    display: flex;
    justify-content: space-between;

    &__btn {
        position: relative;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:hover {
            background-color: #ffffff72;
            border: 1px solid #fff;
        }

        &_cart {
            background: #00BEFF url('../assets/images/cart.svg') 50% 50% no-repeat;
            background-size: 60%;
        }

        &_profile {
            background: url('../assets/images/person.svg') 50% 50% no-repeat;
            background-size: 60%;
        }

        &_search {
            background: url('../assets/images/lupa.svg') 50% 50% no-repeat;
            background-size: 60%;
        }


    }
}

.search {
    position: relative;
    margin-left: auto;

    &__input {
        background-color: inherit;
        padding-left: 30px;
        width: 100%;
        border: none;
        border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        color: #fff;

        &:focus {
            outline: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.6);
        }

        &::placeholder {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            color: #fff;
        }
    }

    &__btn {
        position: absolute;
        height: 18px;
        width: 18px;
        background: inherit;
        border: none;
        cursor: pointer;

        &_searching {
            background: url('../assets/images/lupa.svg') 50% 50% no-repeat;
            background-size: 90%;
            top: 50%;
            left: 5px;
            transform: translate(-10%, -50%);
        }

        &_close {
            background: url('../assets/images/cross.svg') 50% 50% no-repeat;
            background-size: 90%;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
        }
    }
}
</style>
