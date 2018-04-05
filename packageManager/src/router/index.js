import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// For Testing
import TestingMain from '@/components/testing/test'
import TestHome from '@/components/testing/testhome'
import TestPop from '@/components/testing/test-pop'
import TestIssue from '@/components/testing/test-issue'
import TestDiff from '@/components/testing/test-diff'
import TestStack from '@/components/testing/test-stack'
import TestDate from '@/components/testing/test-date'

// For Logging
import LoggingMain from '@/components/logging/log'
import LogHome from '@/components/logging/loghome'
import LogPop from '@/components/logging/log-pop'
import LogIssue from '@/components/logging/log-issue'
import LogDiff from '@/components/logging/log-diff'
import LogStack from '@/components/logging/log-stack'
import LogDate from '@/components/logging/log-date'

// For Utilities
import UtilMain from '@/components/utilities/util'
import UtilHome from '@/components/utilities/utilhome'
import UtilPop from '@/components/utilities/util-pop'
import UtilIssue from '@/components/utilities/util-issue'
import UtilDiff from '@/components/utilities/util-diff'
import UtilStack from '@/components/utilities/util-stack'
import UtilDate from '@/components/utilities/util-date'

// For Mocking
import MockingMain from '@/components/mocking/mock'
import MockHome from '@/components/mocking/mockhome'
import MockPop from '@/components/mocking/mock-pop'
import MockIssue from '@/components/mocking/mock-issue'
import MockDiff from '@/components/mocking/mock-diff'
import MockStack from '@/components/mocking/mock-stack'
import MockDate from '@/components/mocking/mock-date'

// For Cryptography
import CryptMain from '@/components/cryptography/crypt'
import CryptHome from '@/components/cryptography/crypthome'
import CryptPop from '@/components/cryptography/crypt-pop'
import CryptIssue from '@/components/cryptography/crypt-issue'
import CryptDiff from '@/components/cryptography/crypt-diff'
import CryptStack from '@/components/cryptography/crypt-stack'
import CryptDate from '@/components/cryptography/crypt-date'

// For Json
import JsonMain from '@/components/json/json'
import JsonHome from '@/components/json/jsonhome'
import JsonPop from '@/components/json/json-pop'
import JsonIssue from '@/components/json/json-issue'
import JsonDiff from '@/components/json/json-diff'
import JsonStack from '@/components/json/json-stack'
import JsonDate from '@/components/json/json-date'

// For Databases
import DbMain from '@/components/databases/db'
import DbHome from '@/components/databases/dbhome'
import DbPop from '@/components/databases/db-pop'
import DbIssue from '@/components/databases/db-issue'
import DbDiff from '@/components/databases/db-diff'
import DbStack from '@/components/databases/db-stack'
import DbDate from '@/components/databases/db-date'

// For Security
import SecurityMain from '@/components/security/sec'
import SecHome from '@/components/security/sechome'
import SecPop from '@/components/security/sec-pop'
import SecIssue from '@/components/security/sec-issue'
import SecDiff from '@/components/security/sec-diff'
import SecStack from '@/components/security/sec-stack'
import SecDate from '@/components/security/sec-date'

// For Obj-Rel-Mapping
import OrmMain from '@/components/obj-rel-mapping/orm'
import OrmHome from '@/components/obj-rel-mapping/ormhome'
import OrmPop from '@/components/obj-rel-mapping/orm-pop'
import OrmIssue from '@/components/obj-rel-mapping/orm-issue'
import OrmDiff from '@/components/obj-rel-mapping/orm-diff'
import OrmStack from '@/components/obj-rel-mapping/orm-stack'
import OrmDate from '@/components/obj-rel-mapping/orm-date'

// For XML
import XmlMain from '@/components/xml/xml'
import XmlHome from '@/components/xml/xmlhome'
import XmlPop from '@/components/xml/xml-pop'
import XmlIssue from '@/components/xml/xml-issue'
import XmlDiff from '@/components/xml/xml-diff'
import XmlStack from '@/components/xml/xml-stack'
import XmlDate from '@/components/xml/xml-date'

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
      component: TestingMain,
      children: [
        {
          path: '',
          component: TestHome
        },
        {
          path: 'popularity',
          component: TestPop
        },
        {
          path: 'issue',
          component: TestIssue
        },
        {
          path: 'differences',
          component: TestDiff
        },
        {
          path: 'stackoverflow',
          component: TestStack
        },
        {
          path: 'date',
          component: TestDate
        }
      ]
    },
    {
      path: '/logging',
      name: 'logging',
      component: LoggingMain,
      children: [
        {
          path: '',
          component: LogHome
        },
        {
          path: 'popularity',
          component: LogPop
        },
        {
          path: 'issue',
          component: LogIssue
        },
        {
          path: 'differences',
          component: LogDiff
        },
        {
          path: 'stackoverflow',
          component: LogStack
        },
        {
          path: 'date',
          component: LogDate
        }
      ]
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: UtilMain,
      children: [
        {
          path: '',
          component: UtilHome
        },
        {
          path: 'popularity',
          component: UtilPop
        },
        {
          path: 'issue',
          component: UtilIssue
        },
        {
          path: 'differences',
          component: UtilDiff
        },
        {
          path: 'stackoverflow',
          component: UtilStack
        },
        {
          path: 'date',
          component: UtilDate
        }
      ]
    },
    {
      path: '/mocking',
      name: 'mocking',
      component: MockingMain,
      children: [
        {
          path: '',
          component: MockHome
        },
        {
          path: 'popularity',
          component: MockPop
        },
        {
          path: 'issue',
          component: MockIssue
        },
        {
          path: 'differences',
          component: MockDiff
        },
        {
          path: 'stackoverflow',
          component: MockStack
        },
        {
          path: 'date',
          component: MockDate
        }
      ]
    },
    {
      path: '/cryptography',
      name: 'cryptography',
      component: CryptMain,
      children: [
        {
          path: '',
          component: CryptHome
        },
        {
          path: 'popularity',
          component: CryptPop
        },
        {
          path: 'issue',
          component: CryptIssue
        },
        {
          path: 'differences',
          component: CryptDiff
        },
        {
          path: 'stackoverflow',
          component: CryptStack
        },
        {
          path: 'date',
          component: CryptDate
        }
      ]
    },
    {
      path: '/json',
      name: 'json',
      component: JsonMain,
      children: [
        {
          path: '',
          component: JsonHome
        },
        {
          path: 'popularity',
          component: JsonPop
        },
        {
          path: 'issue',
          component: JsonIssue
        },
        {
          path: 'differences',
          component: JsonDiff
        },
        {
          path: 'stackoverflow',
          component: JsonStack
        },
        {
          path: 'date',
          component: JsonDate
        }
      ]
    },
    {
      path: '/databases',
      name: 'databases',
      component: DbMain,
      children: [
        {
          path: '',
          component: DbHome
        },
        {
          path: 'popularity',
          component: DbPop
        },
        {
          path: 'issue',
          component: DbIssue
        },
        {
          path: 'differences',
          component: DbDiff
        },
        {
          path: 'stackoverflow',
          component: DbStack
        },
        {
          path: 'date',
          component: DbDate
        }
      ]
    },
    {
      path: '/security',
      name: 'security',
      component: SecurityMain,
      children: [
        {
          path: '',
          component: SecHome
        },
        {
          path: 'popularity',
          component: SecPop
        },
        {
          path: 'issue',
          component: SecIssue
        },
        {
          path: 'differences',
          component: SecDiff
        },
        {
          path: 'stackoverflow',
          component: SecStack
        },
        {
          path: 'date',
          component: SecDate
        }
      ]
    },
    {
      path: '/object-relational-mapping',
      name: 'object-relational-mapping',
      component: OrmMain,
      children: [
        {
          path: '',
          component: OrmHome
        },
        {
          path: 'popularity',
          component: OrmPop
        },
        {
          path: 'issue',
          component: OrmIssue
        },
        {
          path: 'differences',
          component: OrmDiff
        },
        {
          path: 'stackoverflow',
          component: OrmStack
        },
        {
          path: 'date',
          component: OrmDate
        }
      ]
    },
    {
      path: '/xml',
      name: 'xml',
      component: XmlMain,
      children: [
        {
          path: '',
          component: XmlHome
        },
        {
          path: 'popularity',
          component: XmlPop
        },
        {
          path: 'issue',
          component: XmlIssue
        },
        {
          path: 'differences',
          component: XmlDiff
        },
        {
          path: 'stackoverflow',
          component: XmlStack
        },
        {
          path: 'date',
          component: XmlDate
        }
      ]
    }
  ]
})
