<script script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'BaseButton',
	props: {
		disabled: Boolean,
		variant: [String],
	},
	computed: {
		builtInClasses() {
			return {
				'button--disabled': this.disabled,
			}
		},
	},
})
</script>

<template>
	<button class="btn" :class="builtInClasses">
		<slot></slot>
	</button>
</template>

<style scoped>
.btn {
	padding: 0.5rem 1rem;
}
.btn.primary {
	background: hsl(239, 100%, 27%);
	color: #fff;
}
</style>
