<template>
    <button class="action-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'mini-button'
}
</script>


<style lang="scss" >
.action-btn {
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: inherit;
}
</style>
