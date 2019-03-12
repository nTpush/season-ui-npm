<template>
    <div class="warning-block">
        <div class="warning-block-title">
            <div>Warning</div>
        </div>
        <div class="warning-block-info">
            <slot name="warning"></slot>
        </div>
    </div>
</template>
<script type="text/babel">
    export default {
        data() {
            return {
            };
        }
    };
</script>
<style scoped="" lang="scss">
    .warning-block {
        margin-top: 20px;
        background: #FFF5F5;
        border-left: 5px solid #DB555D;
        padding: 5px 10px;
        line-height: 30px;
        &-title {
            font-weight: bold;
        }
    }
</style>