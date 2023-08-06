<template>
    <div class="subscribes">
        <div class="subscribes__inner">
            <div class="item item_newsletter">
                <h2 class="item__title item__title_big">Подписка на блог</h2>
                <p class="item__text">Дайджесты популярных статей и секретные промокоды для подписчиков</p>
                <div class="item__group">
                    <input type="email" placeholder="Email" class="item__input" v-model="email">
                    <my-button class="item__btn item__btn_black">Подписаться</my-button>
                </div>
                <p class="item__subtext">Подписываясь на рассылку, вы принимаете нашу <a>Политику
                        конфиденциальности</a></p>
            </div>
            <div class="item item_tg">
                <h2 class="item__title">Новости из мира науки и ценные советы о здоровье</h2>
                <p class="item__subtext">5 000+ подписчиков</p>
                <my-button class="item__btn">Подписаться</my-button>
                <img src="@/assets/images/media/tg.png" alt="Телеграм" class="item__img">
            </div>
            <div class="item item_dzen">
                <h2 class="item__title"><span>Атлас в Дзене</span> Самое интересное всегда под рукой</h2>
                <my-button class="item__btn">Подписаться</my-button>
                <img src="@/assets/images/media/dzenBig.svg" alt="Дзен" class="item__img">
            </div>
            <div class="subscribes__contact">
                <span> Есть вопрос к команде или идея для статьи? Пишите на <a href="">blog@atlas.ru</a></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.subscribes {

    &__inner {
        position: relative;
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        align-content: center;
        min-height: 600px;

        &::after {
            position: absolute;
            content: '';
            background: url('@/assets/images/media/creature2.png');
            width: 180px;
            height: 100px;
            bottom: 0%;
            right: 20%;
        }
    }

    &__contact {
        display: flex;
        align-items: center;
        padding: 0 30px;
        border-radius: 20px;
        flex-basis: 100%;
        height: 100px;
        background: rgba(249, 247, 246, 1);
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;

        & a {
            color: #7645EF;
            text-decoration: underline;
        }
    }
}

.item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 30px;
    padding: 30px 30px 20px 30px;
    align-items: center;
    width: 250px;
    height: 360px;
    justify-content: space-between;

    &_newsletter {
        width: 540px;
        background: #C1A9FF url('@/assets/images/media/mail.png') 100% 0% no-repeat;
        align-items: start;
    }

    &_tg {
        background: #1C93F5;
    }

    &_dzen {
        background: #2C2F32;
    }

    &__title {
        font-weight: 500;
        color: #fff;
        font-family: 'DIN Pro';
        font-size: 22px;
        font-weight: 500;
        line-height: 26px;
        text-align: center;

        &_big {
            font-family: 'Druk Wide Cy Web';
            text-align: left;
            width: 50%;
            font-size: 30px;
            letter-spacing: 0.9px;
        }
    }

    &__text {
        margin-bottom: auto;
        font-size: 18px;
        line-height: 24px;
        color: #fff;
        width: 55%;
    }

    &__group {
        display: flex;
        gap: 10px;
    }

    &__input {
        width: 314px;
        height: 50px;
        padding: 11px 25px 14px 25px;
        border-radius: 100px;
        outline: none;
        border: none;

        &::placeholder {
            color: #000;
        }
    }

    &__btn {
        width: 156px;
        background: inherit;
        border: 1px solid rgba(255, 255, 255, 0.30);
        color: #fff;

        &_black {
            color: #fff;
            background: #000;
        }
    }

    &__subtext {
        width: 75%;
        color: rgba(0, 0, 0, 0.30);
        font-size: 14px;
        line-height: 18px;

        & a {
            text-decoration-line: underline;
            cursor: pointer;
        }
    }

    &__img {
        order: -1;
        margin-bottom: auto;
    }
}
</style>
