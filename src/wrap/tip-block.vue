<template>
    <div class="tip-block">
        <div class="tip-block-title">
            <div>Tip</div>
        </div>
        <div class="tip-block-info">
            <slot name="tip"></slot>
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
     .tip-block {
         margin-top: 20px;
         background: #F2FCE5;
         border-left: 5px solid #98C479;
         padding: 5px 10px;
         line-height: 30px;
         &-title {
             font-weight: bold;
         }
     }

</style>