<template>
	<button class="wave-btn">
		<span class="wave-btn__text">
			<slot />
		</span>
		<span class="wave-btn__waves"></span>
	</button>
</template>

<script setup>

</script>

<style scoped>
/* Основные стили */
.wave-btn {
	width: 127px;
	height: 36px;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;

	overflow: hidden;

	position: relative;

	transition: all 0.8s ease 0s;
	-webkit-transition: all 0.8s ease 0s;
	-moz-transition: all 0.8s ease 0s;
	-ms-transition: all 0.8s ease 0s;
	-o-transition: all 0.8s ease 0s;

	justify-content: center;
	align-items: center;

	border-radius: 4px;
	text-decoration: none;
}

.wave-btn:hover {
	transition: all 0.8s ease 0.2s;
	-webkit-transition: all 0.8s ease 0.2s;
	-moz-transition: all 0.8s ease 0.2s;
	-ms-transition: all 0.8s ease 0.2s;
	-o-transition: all 0.8s ease 0.2s;

	-webkit-box-shadow: 0 0 40px #347854;
	box-shadow: 0 0 40px #347854;

}

.wave-btn:hover .wave-btn__waves {
	top: -50px;
}

.wave-btn__text {
	font-size: 16px;
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	color: #fff;
	text-transform: lowercase;
	letter-spacing: 1px;
	position: relative;
	z-index: 1;
}

.wave-btn__waves {
	position: absolute;
	width: 127px;
	height: 127px;
	background-color: #347854;
	top: 0;
	left: 0;
	-webkit-box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
	box-shadow: inset 0 0 50px rgba(0, 0, 0, 0);

	transition: all 0.8s ease 0s;
	-webkit-transition: all 0.8s ease 0s;
	-moz-transition: all 0.8s ease 0s;
	-ms-transition: all 0.8s ease 0s;
	-o-transition: all 0.8s ease 0s;
}

.wave-btn__waves:after,
.wave-btn__waves:before {
	content: '';
	position: absolute;
	top: 0;
	left: 50%;
	width: 250%;
	height: 250%;

	transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	-moz-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	-ms-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	-webkit-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	-o-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
}

.wave-btn__waves:before {
	background-color: #00000070;
	border-radius: 48%;

	animation: waves 5s infinite linear;
	-webkit-animation: waves 5s infinite linear;
	-moz-animation: waves 5s infinite linear;
	-o-animation: waves 5s infinite linear;
}

.wave-btn__waves:after {
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 44%;

	animation: waves 10s infinite linear;
	-webkit-animation: waves 10s infinite linear;
	-moz-animation: waves 10s infinite linear;
	-o-animation: waves 10s infinite linear;
}

@keyframes waves {
	0% {
		transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	}

	100% {
		transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
	}
}

@-webkit-keyframes waves {
	0% {
		transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	}

	100% {
		transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
	}
}

@-moz-keyframes waves {
	0% {
		transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	}

	100% {
		transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
	}
}

@-o-keyframes waves {
	0% {
		transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
	}

	100% {
		transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-moz-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-ms-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-webkit-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
		-o-transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
	}
}
</style>