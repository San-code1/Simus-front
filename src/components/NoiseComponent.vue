<template>
    <!--
    <div class="noise">

    </div>-->
    <svg xmlns='http://www.w3.org/2000/svg' class="noise">

        <filter id='noiseFilter'>
            <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
        </filter>

        <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
</template>

<style>
.noise {
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: fixed;
    animation: noise .2s infinite;
    mix-blend-mode: multiply;
    opacity: 0.3;
    filter: contrast(2);
    background-repeat: repeat;
    z-index: 999;
}

@keyframes noise {
    0% {
        transform: translate(0, 0);
    }

    10% {
        transform: translate(-5%, -5%);
    }

    20% {
        transform: translate(10%, -5%);
    }

    30% {
        transform: translate(5%, 10%);
    }

    40% {
        transform: translate(-5%, 15%);
    }

    50% {
        transform: translate(-10%, 5%);
    }

    60% {
        transform: translate(15%, 0);
    }

    70% {
        transform: translate(0%, 15%);
    }

    80% {
        transform: translate(10%, 5%);
    }

    90% {
        transform: translate(5%, 10%);
    }

    100% {
        transform: translate(0, 0);
    }

}
</style>

<script>
export default {
    name: 'NoiseComponent'
}
</script>
