<template>
<div>
    <h3>Edit the User</h3>
    <p>Edit user: {{ $route.params.id }}</p>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
</div>
</template>