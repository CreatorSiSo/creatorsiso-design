<script lang="ts">
import { computed } from 'vue'

export default {
	name: 'BaseButton',
}
</script>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		disabled?: boolean
		variant?: 'filled' | 'outlined' | 'text'
	}>(),
	{
		disabled: false,
		variant: 'filled',
	}
)

const classes = computed(() => {
	return {
		'button--filled': props.variant == 'filled',
		'button--outlined': props.variant == 'outlined',
		'button--text': props.variant == 'text',
	}
})
</script>

<template>
	<button class="button" :class="classes">
		<slot>BaseButton</slot>
	</button>
</template>

<style scoped lang="scss">
.button {
	padding: 1rem 1.6rem;
	border-radius: 0.6em;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2rem;

	&.button--filled {
		background-color: var(--cs-sys-light-color-primary);
		color: var(--cs-sys-light-color-on-primary);
	}

	&.button--outlined {
		box-shadow: inset 0 0 0 1px hwb(205 44% 51%);
		color: var(--cs-sys-light-color-primary);
	}

	&.button--text {
		color: var(--cs-sys-light-color-primary);
	}

	&:disabled {
	}

	@media (prefers-color-scheme: dark) {
		&.button--filled {
			background-color: var(--cs-sys-dark-color-primary);
			color: var(--cs-sys-dark-color-on-primary);
		}

		&.button--outlined {
			box-shadow: inset 0 0 0 1px hwb(205 44% 51%);
			color: var(--cs-sys-dark-color-primary);
		}

		&.button--text {
			color: var(--cs-sys-dark-color-primary);
		}

		&:disabled {
		}
	}
}
</style>
