<template>
        <div className="contact">
            <BannerPBC/>
            <ContactForm/>
        </div>
</template>

<script>
import BannerPBC from '../common/banner-pbc.vue'
import ContactForm from '../content-page/contact/contact-form.vue'
export default {
  name: 'Contact',
  components: {
    BannerPBC,
    ContactForm
  }
}
</script>

<style scoped>
</style>
