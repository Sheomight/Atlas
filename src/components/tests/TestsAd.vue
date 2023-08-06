<template>
    <div class="tests">
        <div class="tests__inner">
            <h2 class="tests__title">Управляйте вашим здоровьем <span>с тестами Атлас</span></h2>
            <div class="tests__content">
                <div class="tests__item test test_dna">
                    <h2 class="test__title">Генетический тест</h2>
                    <img class="test__img" src="@/assets/images/tests/anim1.png" alt="">
                    <div class="test__price price">
                        <span class="price__old">16 900 ₽</span>
                        <span class="price__new">10 999 ₽</span>
                    </div>
                    <my-button class="test__btn">Подробнее</my-button>
                </div>
                <div class="tests__item test test_blue">
                    <h2 class="test__title test__title_yellow">Тест Микробиоты</h2>
                    <img class="test__img" src="@/assets/images/tests/anim2-1.png" alt="">
                    <img class="test__img" src="@/assets/images/tests/anim2-2.png" alt="">
                    <img class="test__img" src="@/assets/images/tests/anim2-3.png" alt="">
                    <img class="test__img" src="@/assets/images/tests/anim2-4.png" alt="">
                    <div class="test__price price">
                        <span class="price__old">18 900 ₽</span>
                        <span class="price__new">13 999 ₽</span>
                    </div>
                    <my-button class="test__btn">Подробнее</my-button>
                </div>
                <div class="tests__item test test_full">
                    <h2 class="test__title">Тест Полный геном</h2>
                    <img src="@/assets/images/tests/anim3.png" alt="" class="test__img">
                    <div class="test__price price">
                        <span class="price__old">139 000 ₽</span>
                        <span class="price__new">98 999 ₽</span>
                    </div>
                    <my-button class="test__btn">Подробнее</my-button>
                </div>
                <div class="tests__item test test_purple">
                    <h2 class="test__title">Интерпретируем данные других</h2>
                    <span class="test__subtitle">ДНК <span>тестов</span></span>
                    <img src="@/assets/images/tests/test4.png" alt="" class="test__img">
                    <div class="test__price price">
                        <span>от <span class="price__old">8 900 ₽</span></span>
                        <span class="price__new">5 000 ₽</span>
                    </div>
                    <my-button class="test__btn test__btn_purple">Подробнее</my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.tests {
    width: 100%;
    background: rgba(245, 245, 245, 1);

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 30px;
        min-height: 530px;
        justify-content: center;
    }

    &__title {
        font-size: 35px;
        line-height: 40px;
        margin: 0;

        & span {
            color: #7645EF;
            font-size: 35px;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.test {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 360px;
    width: 258px;
    border-radius: 20px;
    padding: 20px;
    gap: 20px;
    background: #141318;
    background-size: contain;
    color: #FFF;

    &_dna {
        background: #141318 url('@/assets/images/tests/bg1.png') 50% 20% no-repeat;
        background-size: 95%;

        & .test__img {
            top: 15%;
            left: 10%;
        }

        & .price__old::after {
            content: '-35%';
        }

        &:hover .test__img {
            animation: 7s moving infinite;
        }

        @keyframes moving {
            25% {
                top: 5%
            }

            50% {
                top: 15%
            }

            75% {
                top: 5%;
            }

            100% {
                top: 15%;
            }
        }
    }

    &_blue {
        background: #9FB5CE url('@/assets/images/tests/anim2salad.png') 205% 60% no-repeat;
        background-size: 75%;

        & .price__old::after {
            content: '-26%';
        }

        & .test__img {
            position: absolute;

            &:nth-child(2) {
                top: 25%;
                left: 10%;
            }

            &:nth-child(3) {
                top: 23%;
                left: 12%;
            }

            &:nth-child(4) {
                top: 23%;
                left: 12%;
            }

            &:nth-child(5) {
                top: 23%;
                left: 12%;
            }
        }

        &:hover .test__img {
            &:nth-child(3) {
                animation: 4s openbox1;
            }

            &:nth-child(4) {
                animation: 5s openbox2;

            }

            &:nth-child(5) {
                animation: 6s openbox3;
            }
        }

        @keyframes openbox1 {
            50% {
                top: 16%
            }

            100% {
                top: 23%;
            }
        }

        @keyframes openbox2 {
            50% {
                top: 11%
            }

            100% {
                top: 23%;
            }
        }

        @keyframes openbox3 {
            50% {
                top: 7%
            }

            100% {
                top: 23%;
            }
        }
    }

    &_full {
        background: #141318 url('@/assets/images/tests/bg3.png') 50% 20% no-repeat;
        background-size: 95%;

        & .price__old::after {
            content: '-29%';
        }

        & .test__img {
            bottom: 35%;
            right: 5%;
            width: 150px;
        }

        &:hover .test__img {
            animation: 5s res infinite;
        }

        @keyframes res {
            50% {
                transform: scale(1.2);
            }

            100% {
                transform: scale(1);
            }
        }
    }

    &_purple {
        background: radial-gradient(circle, rgba(152, 111, 255, 1) 0%, rgba(0, 0, 0, 1) 65%);

        & .test__price {
            margin-top: 0;
            margin-bottom: auto;
        }

        & .price__old::after {
            content: '-35%';
        }

        & .test__img {
            width: 105px;
            bottom: 10%;
            right: 7%;
            z-index: 1;
        }
    }

    &__title {
        font-family: 'Druk Wide Cy Web';
        font-size: 17px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0.17px;
        text-align: center;

        &_yellow {
            color: rgba(234, 252, 122, 1);
        }
    }

    &__subtitle {
        text-align: center;
        font-family: 'Druk Wide Cy Web';
        font-size: 65px;
        font-weight: 500;
        line-height: 1.8rem;
        letter-spacing: 0.7px;


        & span {
            font-size: 37px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.37px;
        }
    }

    &__price {
        width: 120px;
        height: 50px;
        margin-top: auto;
    }

    &__btn {
        z-index: 2;
        width: 210px;
        background-color: #fff;

        &_purple {
            background: rgba(118, 69, 239, 1);
            color: #fff;
        }
    }

    &__img {
        position: absolute;
    }
}

.price {
    align-self: start;
    display: flex;
    flex-direction: column;

    &__old {
        color: rgba(255, 255, 255, 0.30);
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-decoration: line-through;

        &::after {
            position: absolute;
            content: '';
            width: 40px;
            height: 21px;
            background: rgba(233, 97, 160, 1);
            border-radius: 4px;
            margin-left: 10px;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            letter-spacing: 1px;
        }
    }

    &__new {
        color: #fff;
        font-size: 25px;
        font-weight: 700;
        line-height: 30px;
    }
}
</style>
