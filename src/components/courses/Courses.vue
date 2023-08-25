<template>
    <div class="courses">
        <div class="courses__inner">
            <header class="courses__header">
                <h2 class="courses__title"><span>Бесплатные</span> курсы</h2>
                <my-button class="courses__btn">Все курсы</my-button>
                <p class="courses__text">
                    Собрали опыт ученых и экспертов Атласа в короткие еmail-уроки. Подписывайтесь
                    и узнавайте, как устроено пищеварение и с чего начать изменения в питании.
                </p>
            </header>
            <div class="courses__list list">
                <div class="list__item">
                    <div class="list__card list__card_body card">
                        <h3 class="card__title">мой счастливый кишечник</h3>
                        <p class="card__info">7 уроков &#xb7 5 писем</p>
                    </div>
                    <p class="card__description">Узнайте, как сделать бактерии вашего кишечника счастливее, и как заботится
                        о микробиоте.</p>
                </div>
                <div class="list__item">
                    <div class="list__card list__card_salad card">
                        <h3 class="card__title">здоровое питание</h3>
                        <p class="card__info">10 уроков &#xb7 10 писем</p>
                    </div>
                    <p class="card__description">Мы — то, что мы едим. Узнайте, как питаться с удовольствием и с пользой для
                        своего здоровья</p>
                </div>
                <div class="list__item">
                    <div class="list__card list__card_book card">
                        <h3 class="card__title">секретная жизнь бактерий</h3>
                        <p class="card__info">Электронная книга</p>
                    </div>
                    <p class="card__description">Узнайте, как сделать кишечные бактерии счастливее и как позаботиться о
                        своей микробиоте.</p>
                </div>
                <div class="list__item">
                    <div class="list__card list__card_pink card card_later">
                        <h3 class="card__title">как устроено пищеварение</h3>
                        <p class="card__info">8 уроков &#xb7 8 писем</p>
                    </div>
                    <p class="card__description">Все о проблемах пищеварения, как их предотвратить и решить</p>
                </div>
                <div class="list__item">
                    <div class="list__card list__card_woman card card_later">
                        <h3 class="card__title">управление стрессом</h3>
                        <p class="card__info">5 уроков &#xb7 5 писем</p>
                    </div>
                    <p class="card__description">Научитесь управлять стрессом даже когда на вас бежит разъяренный слон</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.courses {
    background: rgba(255, 242, 220, 1);

    &__inner {
        min-height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        background: url('@/assets/images/courses/book.png') 80% 10% no-repeat;
        background-size: 300px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
    }

    &__title {
        font-size: 50px;
        line-height: 60px;
        width: 70%;

        & span {
            color: #7645EF;
        }
    }

    &__btn {
        width: 134px;
        background: #000;
        color: #fff;
        margin-left: auto;

        &:hover {
            background: #4d4d4d;
        }
    }

    &__text {
        width: 65%;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
    }
}

.list {
    display: flex;
    gap: 40px;
    justify-content: space-between;

    &__item {
        width: 250px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        @media (max-width: 1500px) {
            &:has(>.list__card_book) {
                display: none;
            }
        }
    }

    &__card {
        width: 100%;
        height: 340px;

        &_body {
            background: url('@/assets/images/courses/bg1.jpg') no-repeat;
        }

        &_salad {
            background: url('@/assets/images/courses/bg2.jpg') 0 110% no-repeat;
        }

        &_book {
            background: url('@/assets/images/courses/bg5.jpg') 0 110% no-repeat;
        }

        &_pink {
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.4962359943977591) 100%), url('@/assets/images/courses/bg3-2.png') 50% 10% no-repeat, url('@/assets/images/courses/bg3-1.jpg') no-repeat;

            & .card__title {
                visibility: hidden;
            }
        }

        &_woman {
            background: url('@/assets/images/courses/bg4.jpg') no-repeat;
            background-size: cover;

            & .card__title {
                color: rgba(99, 107, 99, 1);
            }
        }
    }
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    border: 3px solid #FFF;
    padding: 20px 25px;

    &__title {
        text-align: center;
        color: #FFF;
        font-family: 'Druk Wide Cy Web';
        font-size: 24px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0.24px;
    }

    &__info {
        color: #FFF;
        text-align: center;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
    }

    &__description {
        color: rgba(0, 0, 0, 0.35);
        font-size: 16px;
        line-height: 20px;
    }

    &_later::after {
        content: 'Скоро';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -22px;
        right: 15px;
        width: 69px;
        height: 36px;
        border-radius: 30px;
        background: #E961A0;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px
    }
}
</style>
