import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import activate from '@/components/activate'
import findkey1 from '@/components/findkey1'
import findkey2 from '@/components/findkey2'
import HomePage from '@/components/HomePage'
import CoursePage from '@/components/Courses/CoursePage'
import Seminaring from '@/components/Courses/Seminaring/Seminaring'
import download from '@/components/Courses/Seminaring/download'
import present from '@/components/Courses/Seminaring/present'
import BeforeSeminar from '@/components/Courses/BeforeSeminar/BeforeSeminar'
import signInfo from '@/components/Courses/BeforeSeminar/signInfo'
import AfterSign from '@/components/Courses/BeforeSeminar/AfterSign'
import ChangeSign from '@/components/Courses/BeforeSeminar/ChangeSign'
import ChangeSign2 from '@/components/Courses/BeforeSeminar/ChangeSign2'
import CheckGrade from '@/components/Courses/BeforeSeminar/CheckGrade'
import TotalSeminars from '@/components/Courses/TotalSeminars'
import SeminarInfo from '@/components/Courses/AfterSeminar/SeminarInfo'
import CheckInfo from '@/components/Courses/AfterSeminar/CheckInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activate',
      name: 'activate',
      component: activate
    },
    {
      path: '/findkey1',
      name: 'findkey1',
      component: findkey1
    },
    {
      path: '/findkey2',
      name: 'findkey2',
      component: findkey2
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Courses/CoursePage',
      name: 'CoursePage',
      component: CoursePage
    },
    {
      path: '/Courses/Seminaring/Seminaring',
      name: 'Seminaring',
      component: Seminaring
    },
    {
      path: '/Courses/BeforeSeminar/BeforeSeminar',
      name: 'BeforeSeminar',
      component: BeforeSeminar
    },
    {
      path: '/Courses/Seminaring/download',
      name: 'download',
      component: download
    },
    {
      path: '/Courses/Seminaring/present',
      name: 'present',
      component: present
    },
    {
      path: '/Courses/BeforeSeminar/signInfo',
      name: 'signInfo',
      component: signInfo
    },
    {
      path: '/Courses/BeforeSeminar/AfterSign',
      name: 'AfterSign',
      component: AfterSign
    },
    {
      path: '/Courses/BeforeSeminar/ChangeSign',
      name: 'ChangeSign',
      component: ChangeSign
    },
    {
      path: '/Courses/BeforeSeminar/ChangeSign2',
      name: 'ChangeSign2',
      component: ChangeSign2
    },
    {
      path: '/Courses/BeforeSeminar/CheckGrade',
      name: 'CheckGrade',
      component: CheckGrade
    },
    {
      path: '/Courses/TotalSeminars',
      name: 'TotalSeminars',
      component: TotalSeminars
    },
    {
      path: '/Courses/AfterSeminar/SeminarInfo',
      name: 'SeminarInfo',
      component: SeminarInfo
    },
    {
      path: '/Courses/AfterSeminar/CheckInfo',
      name: 'CheckInfo',
      component: CheckInfo
    }
  ]
})
