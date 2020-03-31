<template>
    <div class="statistics-card">
        <img
            :src="statistic.img"
            alt="statistic image"
        >
        <h3>{{ statistic.title }}</h3>
        <p>{{ statistic.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            statistic: {
                type: Object
            }
        }
    }
</script>
