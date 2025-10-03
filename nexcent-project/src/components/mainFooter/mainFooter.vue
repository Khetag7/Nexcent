<template>
    <footer>
        <div class="container g-flex">
            <div class="block__logo">
                <router-link to="/">
                    <img src="@/assets/images/FooterLogo.png" alt="FooterLogo">
                </router-link>
                
                <div class="block__logo-texts">
                    <p class="block__logo-texts-title">Copyright © 2020 Nexcent ltd.</p>
                    <p class="block__logo-texts-text">All rights reserved</p>
                </div>
                
                <div class="block__logo-icons">
                    
                    <router-link to="#ins">
                        <img src="@/assets/images/FooterSocial1.png" alt="icons">
                    </router-link>
                    
                    <router-link to="#ball">
                        <img src="@/assets/images/FooterSocial2.png" alt="icons">
                    </router-link>
                    
                    <router-link to="#twit">
                        <img src="@/assets/images/FooterSocial3.png" alt="icons">
                    </router-link>
                    
                    <router-link to="#Yout">
                        <img src="@/assets/images/FooterSocial4.png" alt="icons">
                    </router-link>
                    
                </div>
            </div>
            
            <div class="block__lists">
                
                <div class="block__lists-firtsCol">
                    <h4 class="block__lists-firtsCol-title">
                        Company
                    </h4>
                    
                    <ul class="block__lists-firtsCol-list">
                        <router-link to="#">
                            <li>
                                About us
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Blog
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Contact us
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Pricing
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Testimonials
                            </li>
                        </router-link>
                    </ul>
                </div>
                
                <div class="block__lists-secondCol">
                    <h4 class="block__lists-secondCol-title">
                        Support
                    </h4>
                    
                    <ul class="block__lists-secondCol-list">
                        <router-link to="#">
                            <li>
                                Help center
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Terms of service
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Legal
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Privacy policy
                            </li>
                        </router-link>
                        <router-link to="#">
                            <li>
                                Status
                            </li>
                        </router-link>
                    </ul>
                </div>
                
                <div class="block__lists-lastCol">
                    <h4 class="block__lists-lastCol-title">
                        Stay up to date
                    </h4>

                    <div class="input__block">
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Your email address" 
                            title="Please enter a email address"
                            required 
                        />
                        <img src="@/assets/images/FooterVector.svg" alt="vector">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use '@/components/mainFooter/mainFooter.scss';

</style>