<template>
    <section class="topbar">
        <div class="topbar-resource">
            <img class="img-resource-topbar" src="@/assets/img/metal.png" alt="SimusLogo">
            <div>
                <p class="label-xl content-2">METAL</p>
                <p class="title-s content-1">100 / 1.024</p>
            </div>
        </div>
        <div class="topbar-resource">
            <img class="img-resource-topbar" src="@/assets/img/crystal.png" alt="SimusLogo">
            <div>
                <p class="label-xl content-2">CRYSTAL</p>
                <p class="title-s content-1">100 / 1.024</p>
            </div>
        </div>
        <div class="topbar-resource">
            <img class="img-resource-topbar" src="@/assets/img/deuterium.png" alt="SimusLogo">
            <div>
                <p class="label-xl content-2">DEUTERIUM</p>
                <p class="title-s content-1">100 / 1.024</p>
            </div>
        </div>
        <div class="topbar-resource">
            <img class="img-resource-topbar" src="@/assets/img/energy.png" alt="SimusLogo">
            <div>
                <p class="label-xl content-2">ENERGY</p>
                <p class="title-s content-1">100 / 1.024</p>
            </div>
        </div>
    </section>
</template>

<style>
.topbar {
    display: flex;
    margin: 8px 16px 0px 8px;
    padding: 16px 24px;
    gap: 24px;
    background-color: var(--background-1);
    border: 1px solid var(--border-1);
    border-radius: var(--border-radius-s);
    box-shadow: var(--box-shadow-color) 0px 8px 24px;
}

.topbar-resource {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}

.img-resource-topbar {
    width: 48px;
}

/* Medium screen (640px - 1024px) */
@media screen and (min-width: 641px) and (max-width: 1024px) {
    .topbar {
        padding: 16px;
        gap: auto;
    }

    .topbar-resource {
        gap: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
}

/* Small screen (< 640px) */
@media screen and (max-width: 640px) {
    .topbar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 16px;
    }

    .topbar-resource {
        flex-wrap: wrap;
    }

    .img-resource-topbar {
        width: 48px;
    }
}
</style>

<script>
export default {
    name: 'TopbarComponent'
}
</script>