<template>
    <div class="card">
        <div>
            <img src="@/assets/img/card-img-placeholder.webp" class="card-img-placeholder">
        </div>
        <div class="card-container">
            <div class="card-content">
                <div class="card-header-container">
                    <div class="card-level-badge label-m">
                        Level<span class="title-m">1</span>
                    </div>
                    <div class="card-title-subtitle">
                        <div>
                            <h3 class="title-m">Metal Mine</h3>
                        </div>
                        <div>
                            <p class="body-s content-2">Used in the extraction of metal ore, metal mines are of primary
                                importance to all emerging
                                and established empires.</p>
                        </div>
                    </div>
                </div>
                <div class="production-container">
                    <p class="label-m content-1">ACTUAL PRODUCTION AND ENERGY BALANCE</p>
                    <div class="resources-container">
                        <ResourceSpecsComponent />
                        <ResourceSpecsComponent />
                    </div>
                </div>
                <div class="next-level-container">
                    <div class="next-level-specs">
                        <div class="next-production-container">
                            <p class="label-m content-1">NEW LEVEL IMPROVEMENTS</p>
                            <div class="resources-container">
                                <ResourceSpecsComponent />
                                <ResourceSpecsComponent />
                            </div>
                        </div>
                        <hr>
                        <div class="next-production-container">
                            <p class="label-m content-1">REQUIRES</p>
                            <div class="resources-container">
                                <ResourceSpecsComponent />
                                <ResourceSpecsComponent />
                            </div>
                        </div>
                    </div>
                    <div class="next-level-duration">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.19995 1.99995C8.19995 1.55812 8.55812 1.19995 8.99995 1.19995H15C15.4418 1.19995 15.8 1.55812 15.8 1.99995C15.8 2.44178 15.4418 2.79995 15 2.79995H8.99995C8.55812 2.79995 8.19995 2.44178 8.19995 1.99995ZM3.19995 14C3.19995 9.13984 7.13984 5.19995 12 5.19995C16.8601 5.19995 20.7999 9.13984 20.7999 14C20.7999 18.8601 16.8601 22.7999 12 22.7999C7.13984 22.7999 3.19995 18.8601 3.19995 14ZM12 6.79995C8.0235 6.79995 4.79995 10.0235 4.79995 14C4.79995 17.9764 8.0235 21.2 12 21.2C15.9764 21.2 19.2 17.9764 19.2 14C19.2 10.0235 15.9764 6.79995 12 6.79995ZM12 9.19995C12.4418 9.19995 12.8 9.55812 12.8 9.99995V14C12.8 14.4418 12.4418 14.8 12 14.8C11.5581 14.8 11.2 14.4418 11.2 14V9.99995C11.2 9.55812 11.5581 9.19995 12 9.19995Z" />
                        </svg>

                        <p class="label-xl content-1">Construction Time: 54s</p>
                    </div>
                </div>
            </div>
            <ButtonPrimaryComponent />
        </div>
    </div>
</template>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background-color: var(--background-1);
    border: 1px solid var(--border-1);
    border-radius: var(--border-radius-s);
    overflow: hidden;
}

.card-img-placeholder {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
}

.card-container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 16px;
    width: -webkit-fill-available;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.card-header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}

.card-level-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-3);
    color: var(--content-3-pair);
    border-radius: var(--border-radius-xs);
    padding: 8px 12px;
    height: 100%;
    justify-content: center;
}

.card-title-subtitle {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: fit-content;
}

.production-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.resources-container {
    display: flex;
    flex-direction: row;
    gap: 12px;
}

.next-level-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.next-level-specs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: var(--border-radius-xs);
    border: 1px solid var(--border-1);
    background: var(--background-2);
}

.next-production-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
}

.next-level-duration {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    border-radius: var(--border-radius-xs);
    border: 1px solid var(--border-1);
    background: var(--background-2);
    padding: 12px 8px;
}
</style>

<script>

import ButtonPrimaryComponent from '@/components/ButtonPrimaryComponent.vue'
import ResourceSpecsComponent from '@/components/ResourceSpecsComponent.vue'

export default {
    name: 'App',
    components: {
        ButtonPrimaryComponent,
        ResourceSpecsComponent
    }
}
</script>