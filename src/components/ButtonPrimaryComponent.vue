<template>
    <button class="button-primary label-xl">Up to level $num</button>
</template>

<style>
.button-primary {
    font-family: var(--font-family);
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-xs);
    background-color: var(--background-3);
    color: var(--content-3-pair);
    border: 0px;
    width: 100%;
    min-width: -webkit-fill-available;
    cursor: pointer;
    border: solid 1px transparent;
}

.button-primary:hover {
    background-color: var(--semantic-hightlight-light);
    color: var(--semantic-hightlight);
    border: solid 1px var(--border-focus);
}

.button-primary-disable {
    font-family: var(--font-family);
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-xs);
    border: 0px;
    min-width: -webkit-fill-available;
    background-color: var(--background-disable);
    color: var(--content-disable);
}
</style>

<script>
export default {
    name: 'ButtonPrimaryComponent'
}
</script>