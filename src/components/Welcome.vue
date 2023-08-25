<template>
    <div class="welcome">
        <div class="container welcome__inner">
            <h1 class="welcome__title title">Больше <mark class="welcome__title_pink">ответов</mark> на ваши <mark
                    class="welcome__title_yellow">вопросы</mark> в
                блоге Атласа</h1>
            <p class="welcome__text">Делимся знаниями о том, как гены, кишечные бактерии и образ жизни влияют на ваше
                здоровье</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.welcome {
    background: rgba(118, 69, 239, 1) url('../assets/images/creature.png') 80% 150% no-repeat;
    background-size: 15vw 15vw;

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        color: #fff;
        min-height: 350px;
        width: 60%;
    }

    &__title {
        font-size: 65px;
        line-height: 107%;

        &_pink {
            background: #F5BDE2;
            border-radius: 18px 18px 18px 0;
        }

        &_yellow {
            background: #FFFDBB;
            border-radius: 18px 18px 0 18px;
        }
    }

    &__text {
        width: 50%;
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
    }

    @media (max-width: 1500px) {
        background-position: 80% 140%;
        background-size: 20vw 20vw;


        &__title {
            font-size: 54px;
        }

        &__text {
            font-size: 18px;
        }
    }

    @media (max-width: 1250px) {

        &__title {
            font-size: 48px;
        }

        &__text {
            font-size: 16px;
        }
    }
}

mark {
    color: #000;
    display: inline-block;
    text-align: center;
    padding: 0 10px 15px 10px;
    margin-bottom: 5px;
}
</style>
