<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__section section">
                <div class="section__item">
                    <p class="section__text">
                        ООО «Атлас»<br>
                        ООО «Альфа»<br>
                        354340, Краснодарский край, Ф. Т.<br>
                        Сириус, пгт. Сириус, проезд<br>
                        Триумфальный, д. 1, помещ. 2-037<br>
                        8 (495) 150-09-90
                    </p>
                </div>
                <div class="section__item section__item_btns">
                    <mini-button class="section__btn section__btn_tg"></mini-button>
                    <mini-button class="section__btn section__btn_vk"></mini-button>
                    <mini-button class="section__btn section__btn_dzen"></mini-button>
                </div>
                <div class="section__item">
                    <h4 class="section__subtitle">Клиентский сервис</h4>
                    <p class="section__text">
                        бесплатная линия 8 (800) 500-06-48<br>
                        электронный адрес hello@atlas.ru<br>
                        C понедельника по пятницу с 10 до 19<br>
                        Выходные и официальные праздники —<br>
                        нерабочие дни
                    </p>
                </div>
                <div class="section__item">
                    <p class="section__copyright">
                        © 2020-2023 Атлас Блог.<br>
                        Правообладатель - Общество с ограниченной<br>
                        ответственностью «Атлас»,<br>
                        ОГРН 5137746188817.
                    </p>
                </div>
            </div>
            <div class="footer__section section">
                <nav class="section__item">
                    <ul class="section__menu">
                        <li><a>О компании</a></li>
                        <li><a>Контакты</a></li>
                        <li><a>Вопросы и ответы</a></li>
                        <li><a>Партнерам</a></li>
                        <li><a>Клиника Атлас</a></li>
                        <li><a>Интерпретация данных</a></li>
                        <li><a>Политика конфиденциальности</a></li>
                        <li><a>Публичная оферта и правила оказания услуг</a></li>
                        <li><a>Онкодиагностика</a></li>
                        <li><a>Knomx Contract Research</a></li>
                        <li><a>Курс о правильном питании</a></li>
                    </ul>
                </nav>
                <div class="section__item">
                    <p class="section__copyright">
                        Все права защищены: любоеиспользование материалов данного Интернет-сайта, включая копирование и
                        распространение, допустимо исключительно с предварительного письменного согласия ООО «Атлас».
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.footer {

    &__inner {
        min-height: 800px;
        height: 1px;
        display: flex;
        column-gap: 40px;
    }

    &__section {
        border-top: 2px solid rgba(0, 0, 0, 0.2);
        width: 48%;
    }
}

.section {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 60%;
    gap: 40px 15px;
    padding-top: 40px;

    &:last-child {
        align-content: normal;
        justify-content: space-between;
    }

    &__item {
        flex: 1 1 60%;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;

        &:has(>.section__copyright) {
            margin-top: auto;
        }

        &_btns {
            flex-basis: 38%;
            display: flex;
            gap: 15px;
            justify-content: flex-end;
        }
    }

    &__text {
        color: #000;
    }


    &__btn {
        background-color: #000;
        width: 50px;
        height: 50px;

        &:hover {
            background-color: #727272;
        }

        &_tg {
            background-image: url('@/assets/images/social/tg.svg');
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }


        &_vk {
            background-image: url('@/assets/images/social/vk.svg');
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }


        &_dzen {
            background-image: url('@/assets/images/social/dzen.svg');
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }

    }


    &__subtitle {
        color: rgba(0, 0, 0, 0.2);
    }

    &__menu {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        list-style: none;
        flex-wrap: wrap;
        height: 200px;
        font-size: 18px;
        gap: 10px 40px;

        & a {
            cursor: pointer;

            &:hover {
                color: #4c4c4c;
                text-decoration: underline;
            }
        }
    }

    &__copyright {
        color: rgba(0, 0, 0, 0.3);
    }
}
</style>
