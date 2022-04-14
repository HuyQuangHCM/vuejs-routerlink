<template>
    <div class="page-404">
        <div>
            <img src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg" alt="404">
        </div>
        <router-link 
            tag="button"
            to="/"
            type="submit" class="btn btn-primary">Go to HomePage</router-link>
    </div>
</template>

<script>
export default {
    name: 'page-not-found'
}
</script>

<style>
    .page-404 {
        text-align: center;
    }
</style>