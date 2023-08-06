<template>
    <div class="welcome">
        <div class="container welcome__inner">
            <h1 class="welcome__title title">Больше <mark class="answers">ответов</mark> на ваши <mark
                    class="questions">вопросы</mark> в
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

<style lang="scss" scoped>
.welcome {
    background: rgba(118, 69, 239, 1) url('../assets/images/creature.png') 80% 200% no-repeat;
    background-size: 15vw 15vw;

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        min-height: 350px;
        width: 70%;
    }

    &__title {
        line-height: 107%;
    }

    &__text {
        width: 50%;
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
    }
}

mark {
    color: #000;
    display: inline-block;
    text-align: center;
    padding: 0 10px 15px 10px;
    margin-bottom: 5px;
}

.answers {
    background: #F5BDE2;
    border-radius: 18px 18px 18px 0;
}

.questions {
    background: #FFFDBB;
    border-radius: 18px 18px 0 18px;
}
</style>
