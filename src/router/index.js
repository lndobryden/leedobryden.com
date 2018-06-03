import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import PhotographyHome from '@/components/photography/PhotographyHome'
import Projects from '@/components/Projects'
import ProjectArticle from '@/components/ProjectArticle'
import Running from '@/components/Running'
import Gallery from '@/components/photography/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/photography',
      name: 'PhotographyHome',
      component: PhotographyHome
    },
    {
      path: '/gallery/:id',
      name: 'Gallery',
      component: Gallery,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    { path: '/article/:id',
      name: ProjectArticle,
      component: ProjectArticle,
      props: true
    },
    {
      path: '/running',
      name: 'Running',
      component: Running
    }
  ]
})
