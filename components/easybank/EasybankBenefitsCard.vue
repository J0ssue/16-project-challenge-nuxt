<template>
    <div class="easybank-benefits-card">
        <img
            class="inline-block mx-auto mb-6"
            :src="benefit.img"
            alt="benefit image"
        >
        <h4
            class="mb-6 text-bank-dark-blue text-xl font-thin"
            v-text="benefit.title"
        />
        <main v-text="benefit.description" />
    </div>
</template>

<script>
    export default {
        props: {
            benefit: {
                type: Object
            }
        }
    }
</script>
