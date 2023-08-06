<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button',

}
</script>


<style lang="scss">
.btn {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    cursor: pointer;
}
</style>
