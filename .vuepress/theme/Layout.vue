<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <div
      class="custom-layout"
      v-if="$page.frontmatter.layout"
    >
      <component :is="$page.frontmatter.layout"/>
    </div>

    <Home v-else-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
    
    <div class="page-footer">
        <div class="container page">
            <div class="item">
                <img style="width:120px" src="/logo.svg" />
                <p>
                    <a target="repo" href="http://www.miitbeian.gov.cn">渝ICP备18011900号-1</a>
                </p>
            </div>
            <div class="item"
                v-for="(item, index) in footbarItems"
                :key="index"
            >
                <p class="label">{{item.label}}</p>
                <p v-for="children in item.children">
                    <a v-if="children.link" :href="children.link">{{children.label}}<OutboundLink v-if="testUri(children.link)" /></a>
                    <template v-else>{{children.label}}</template>
                </p>
            </div>
        </div>
    </div>

    <SWUpdatePopup :updateEvent="swUpdateEvent"/>
  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from './Home.vue'
import Navbar from './Navbar.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
import SWUpdatePopup from './SWUpdatePopup.vue'
import { resolveSidebarItems } from './util'

export default {
  components: { Home, Page, Sidebar, Navbar, SWUpdatePopup },

  data () {
    return {
      isSidebarOpen: false,
      swUpdateEvent: null
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    },

    footbarItems() {
        return this.$site.themeConfig.locales[this.$localePath].footbar
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })

    this.$on('sw-updated', this.onSWUpdated)
  },

  methods: {
    testUri(uri) {
        return /^http/.test(uri)
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },

    onSWUpdated (e) {
      this.swUpdateEvent = e
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
@import './styles/config.styl'
.page-footer
    margin-top 4rem
    padding 1.5rem 0 2rem 0
    height auto
    background-color #0175C2
    color #fff
    .container
        max-width 960px
        margin 0 auto
        &:after
            content ''
            display table
            clear both
        .item
            float left
            width 25%
            p
                a
                    .outbound
                        color #fff
                    color #fff
                margin  0
                &.label
                    margin 10px 0
@media (max-width: $MQMobile)
    .page-footer
        .container
            width auto
            .item
                padding 2rem
                width auto

@media (max-width: $MQMobileNarrow)
    .page-footer
        .container
            width auto
            .item
                padding 2rem
                width auto
</style>

