<template>
    <label class="switch">
        <input type="checkbox" v-model="isDarkMode" @change="toggleTheme">
        <span class="slider"></span>
    </label>
</template>

<style>
.switch {
    position: relative;
    display: inline-block;
    width: 64px;
    height: 32px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-1);
    border: 1px solid var(--border-1);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 32px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: var(--content-focus);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: var(--background-3);
    border: 1px solid var(--background-3);
}



input:checked+.slider:before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
    background-color: var(--content-3-pair);
}

/* Medium screen (640px - 1024px) */
@media screen and (min-width: 641px) and (max-width: 1024px) {
    input:checked+.slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    }
}

</style>

<script>
export default {
    name: 'SwitchComponent',
    data() {
        return {
            isDarkMode: false
        };
    },
    methods: {
        toggleTheme() {
            if (this.isDarkMode) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        }
    }
};
</script>