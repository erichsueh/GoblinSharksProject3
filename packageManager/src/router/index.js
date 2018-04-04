import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestingMain from '@/components/testing/test'
import LoggingMain from '@/components/logging/log'
import UtilMain from '@/components/utilities/util'
import MockingMain from '@/components/mocking/mock'
import CryptMain from '@/components/cryptography/crypt'
import JsonMain from '@/components/json/json'
import DbMain from '@/components/databases/db'
import SecurityMain from '@/components/security/sec'
import OrmMain from '@/components/obj-rel-mapping/orm'
import XmlMain from '@/components/xml/xml'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingMain
    },
    {
      path: '/logging',
      name: 'logging',
      component: LoggingMain
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: UtilMain
    },
    {
      path: '/mocking',
      name: 'mocking',
      component: MockingMain
    },
    {
      path: '/cryptography',
      name: 'cryptography',
      component: CryptMain
    },
    {
      path: '/json',
      name: 'json',
      component: JsonMain
    },
    {
      path: '/databases',
      name: 'databases',
      component: DbMain
    },
    {
      path: '/security',
      name: 'security',
      component: SecurityMain
    },
    {
      path: '/object-relational-mapping',
      name: 'object-relational-mapping',
      component: OrmMain
    },
    {
      path: '/xml',
      name: 'xml',
      component: XmlMain
    }
  ]
})
