<template>
<div>
    <h3>Some User Details</h3>
    <p>User ID: {{ $route.params.id }}</p>
    <router-link class="btn btn-primary" tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id }, query: {locale: 'us', q: 100} }">Details</router-link>
</div>
</template>