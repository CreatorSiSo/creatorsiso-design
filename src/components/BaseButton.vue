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
	<button :disabled="disabled" class="button" :class="classes">
		<slot>BaseButton</slot>
	</button>
</template>

<style scoped lang="scss">
@use '@/assets/variables/variables.scss' as cs;
@use 'sass:color';
@use 'sass:map';

@mixin button-states(
	$background-colors: (
		'base': #be3e3e,
		'blend': #ffffff,
	),
	$blend-amounts: (
		'hover': 6%,
		'focus': 12%,
		'active': 18%,
	)
) {
	&:enabled:hover {
		background-color: color.mix(
			map.get($background-colors, 'blend'),
			map.get($background-colors, 'base'),
			map.get($blend-amounts, 'hover')
		);
	}

	&:enabled:focus {
		background-color: color.mix(
			map.get($background-colors, 'blend'),
			map.get($background-colors, 'base'),
			map.get($blend-amounts, 'focus')
		);
	}

	&:enabled:active {
		background-color: color.mix(
			map.get($background-colors, 'blend'),
			map.get($background-colors, 'base'),
			map.get($blend-amounts, 'active')
		);
	}
}

.button {
	padding: 1rem 1.6rem;
	border-radius: 0.6em;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2rem;
	transition: background-color 250ms ease;

	&.button--filled {
		background-color: var(--cs-sys-light-primary);
		color: var(--cs-sys-light-on-primary);

		@include button-states(
			(
				'base': cs.$sys-light-primary,
				'blend': cs.$sys-light-on-primary,
			)
		);

		&:disabled {
			background-color: gray;
		}
	}

	&.button--outlined {
		box-shadow: inset 0 0 0 1px hwb(205 44% 51%);
		color: var(--cs-sys-light-primary);
	}

	&.button--text {
		color: var(--cs-sys-light-primary);
	}

	@media (prefers-color-scheme: dark) {
		&.button--filled {
			background-color: var(--cs-sys-dark-primary);
			color: var(--cs-sys-dark-on-primary);

			@include button-states(
				(
					'base': cs.$sys-dark-primary,
					'blend': cs.$sys-dark-on-primary,
				),
				(
					'hover': 10%,
					'focus': 20%,
					'active': 20%,
				)
			);
		}

		&.button--outlined {
			box-shadow: inset 0 0 0 1px hwb(205 44% 51%);
			color: var(--cs-sys-dark-primary);
		}

		&.button--text {
			color: var(--cs-sys-dark-primary);
		}

		&:disabled {
		}
	}
}
</style>
