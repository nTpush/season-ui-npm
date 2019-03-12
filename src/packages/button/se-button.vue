<template>
    <button
        class="season__button"
        :class="[
            {'is-plain': plain},
            {'is-round': round},
           'season__button-' + size,
           'season__button-' + type
        ]"
        @click="$emit('click')"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>
<!--class="w__button"-->
<script>

export default {
    name: 'SeButton',
    data () {
        return {}
    },
    props: {
        plain: Boolean,
        disabled: Boolean,
        round: Boolean,
        size: {
            type: String,
            default: 'default'
        },
        type: {
            type: String,
            default: 'default'
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

