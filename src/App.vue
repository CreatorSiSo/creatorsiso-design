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
				<BaseButton variant="filled">Button/Filled</BaseButton>
				<BaseButton variant="filled">Button</BaseButton>
				<BaseButton variant="outlined">Button/Outlined</BaseButton>
				<BaseButton variant="outlined">Button</BaseButton>
				<BaseButton variant="text">Button/Text</BaseButton>
				<BaseButton variant="text">Button</BaseButton>
			</div>
		</section>
	</main>
</template>

<style>
@import url(@/assets/variables/variables.css);

*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	height: 100%;
	font-size: 62.5%;
}

body {
	height: 100%;
	margin: 0;
	font-size: 1.6rem;
}

:where(h1, h2, h3, h4, h5, h6) {
	font-size: unset;
	font-weight: unset;
	margin: 0;
}

:where(button) {
	border-width: 0;
	border-style: solid;
	background-color: transparent;
	font-size: unset;
	padding: 0;
	cursor: pointer;
}

:where(a) {
	text-decoration: none;
	color: inherit;
}
</style>

<style lang="scss">
.private:where(*) {
	user-select: none;
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
