<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
	<header>
		<h1>CreatorSiSo Design Showcase</h1>
	</header>
	<main>
		<section>
			<h2>Reset:</h2>
			<ul>
				<li><h1>h1</h1></li>
				<li><h2>h2</h2></li>
				<li><h3>h3</h3></li>
				<li><h4>h4</h4></li>
				<li><h5>h5</h5></li>
				<li><h6>h6</h6></li>
				<li><button>button</button></li>
				<li><a href="#0">a</a></li>
				<li><span>span</span></li>
			</ul>
		</section>
		<section>
			<h2>Components:</h2>
			<div class="components-list">
				<BaseButton variant="filled">Button</BaseButton>
				<BaseButton variant="filled">Button/Filled/Enabled</BaseButton>
				<BaseButton disabled variant="filled">
					Button/Filled/Disabled
				</BaseButton>
				<BaseButton variant="outlined">Button</BaseButton>
				<BaseButton variant="outlined">Button/Outlined/Enabled</BaseButton>
				<BaseButton disabled variant="outlined">
					Button/Outlined/Disabled
				</BaseButton>
				<BaseButton variant="text">Button</BaseButton>
				<BaseButton variant="text">Button/Text/Enabled</BaseButton>
				<BaseButton disabled variant="text">Button/Text/Disabled</BaseButton>
			</div>
		</section>
	</main>
</template>

<style scoped lang="scss">
.private:where(*) {
	user-select: none;
}

html {
	background-color: var(--cs-sys-light-background);
	color: var(--cs-sys-light-on-background);

	@media (prefers-color-scheme: dark) {
		background-color: var(--cs-sys-dark-background);
		color: var(--cs-sys-dark-on-background);
	}
}

main {
	padding-inline: 4rem;
}

.components-list {
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
}
</style>
