import { createRouter, createWebHistory } from 'vue-router'
import { IconCalendarEvent, IconClipboardText, IconListDetails, IconFireExtinguisher, IconUsers } from '@tabler/icons-vue'
import HomeView from '@/views/HomeView.vue'

export const routes = [
  {
    path: '/styleguide',
    name: 'styleguide',
    component: () => import('@/views/StyleguideView.vue'),
    meta: { 
      showInNav: false 
    }
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('@/views/ComponentView.vue'),
    meta: { 
      showInNav: false 
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
      showInNav: true,
      navName: 'Kalender',
      title: 'Kalender',
      icon: IconCalendarEvent
    }
  },
  {
    path: '/egenkontrol',
    name: 'egenkontrol',
    component: () => import('@/views/EgenkontrolView.vue'),
    meta: { 
      showInNav: true,
      navName: 'Egenkontrol',
      title: 'Egenkontroller',
      icon: IconClipboardText,
    }
  },
  {
    path: '/egenkontrol/opret',
    name: 'opret-egenkontrol',
    component: () => import('@/views/OpretEgenkontrolView.vue'),
    meta: { 
      showInNav: false,
      title: 'Opret Egenkontrol'
    }
  },
  {
    path: '/tjeklister',
    name: 'tjeklister',
    component: () => import('@/views/TjeklisterView.vue'),
    meta: { 
      showInNav: true,
      navName: 'Tjeklister',
      title: 'Tjeklister',
      icon: IconListDetails,
    }
  },
  {
    path: '/tjeklister/opret',
    name: 'opret-tjekliste',
    component: () => import('@/views/OpretTjeklisteView.vue'),
    meta: { 
      showInNav: false,
      title: 'Opret Tjekliste'
    }
  },
  {
    path: '/enheder',
    name: 'enheder',
    component: () => import('@/views/EnhederView.vue'),
    meta: { 
      showInNav: true,
      navName: 'Enheder',
      title: 'Enheder',
      icon: IconFireExtinguisher,
    }
  },
  {
    path: '/enheder/opret',
    name: 'opret-enhed',
    component: () => import('@/views/OpretEnhedView.vue'),
    meta: { 
      showInNav: false,
      title: 'Opret Enhed'
    }
  },
  {
    path: '/brugere',
    name: 'brugere',
    component: () => import('@/views/BrugereView.vue'),
    meta: { 
      showInNav: true,
      navName: 'Brugere',
      title: 'Brugere',
      icon: IconUsers,
    }
  },
  {
    path: '/brugere/opret',
    name: 'opret-bruger',
    component: () => import('@/views/OpretBrugerView.vue'),
    meta: {
      title: 'Opret Bruger'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
