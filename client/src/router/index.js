import VueRouter from 'vue-router'
import Vue from 'vue'

import store from '../store/index.js'

import HomePage from '../components/Home/HomePage.vue'
import ContactUs from '../components/Home/ContactUs.vue'
// Auth Employee
import Signin from '../components/Auth/Signin.vue'
import DemandAccount from '../components/Auth/DemandAccount.vue'
import Profile from '../components/Auth/Profile.vue'

//Dashboard 
import SigninAdmin from '../components/Dashboard/Signin'
import Budget from '../components/Dashboard/Budget/Budget'
import CompBudget from '../components/Dashboard/Budget/CompBudget'
import DebBudget from '../components/Dashboard/Budget/DebBudget'
import DonBudget from '../components/Dashboard/Budget/DonBudget'
import OffBudget from '../components/Dashboard/Budget/OffBudget'
//Employees
import Employees from '../components/Dashboard/Employees/Employees'
import AddEmployee from '../components/Dashboard/Employees/AddEmployee'
import UpdateEmployee from '../components/Dashboard/Employees/UpdateEmployee'
import SearchEmployee from '../components/Dashboard/Employees/SearchEmployee'

//Requests
import Requests from '../components/Dashboard/Requests/Requests'
import AccessRequests from '../components/Dashboard/Requests/AccessRequests'
import AcceptedRequests from '../components/Dashboard/Requests/AcceptedRequests'
import RefusedRequests from '../components/Dashboard/Requests/RefusedRequests'
import ConsultRequests from '../components/Dashboard/Requests/ConsultRequests'

//Services
import Services from '../components/Dashboard/Services/Services'
//Compensations
import Compensations from '../components/Dashboard/Services/Compensations/Compensations'
import SearchCompensation from '../components/Dashboard/Services/Compensations/SearchCompensation'
import AddCompensation from '../components/Dashboard/Services/Compensations/AddCompensation'
import UpdateCompensation from '../components/Dashboard/Services/Compensations/UpdateCompensation'
//Donations
import Donations from '../components/Dashboard/Services/Donations/Donations'
import SearchDonation from '../components/Dashboard/Services/Donations/SearchDonation'
import AddDonation from '../components/Dashboard/Services/Donations/AddDonation'
import UpdateDonation from '../components/Dashboard/Services/Donations/UpdateDonation'
//Offers
import Offers from '../components/Dashboard/Services/Offers/Offers'
import SearchOffer from '../components/Dashboard/Services/Offers/SearchOffer'
import AddOffer from '../components/Dashboard/Services/Offers/AddOffer'
import UpdateOffer from '../components/Dashboard/Services/Offers/UpdateOffer'
//Debts
import Debts from '../components/Dashboard/Services/Debts/Debts'
import CurrentDebts from '../components/Dashboard/Services/Debts/CurrentDebts'
import Archive from '../components/Dashboard/Services/Debts/Archive'
import UpdateDebts from '../components/Dashboard/Services/Debts/UpdateDebts'

//Main
import Regulations from '../components/Main/Regulations'
//Compensations
import CompensationsEmp from '../components/Main/Services/Compensations/Compensations'
import SearchCompensationEmp from '../components/Main/Services/Compensations/SearchCompensation'
import RequestCompensation from '../components/Main/Services/Compensations/RequestCompensation'
//Donations
import DonationsEmp from '../components/Main/Services/Donations/Donations'
import SearchDonationEmp from '../components/Main/Services/Donations/SearchDonation'
import RequestDonation from '../components/Main/Services/Donations/RequestDonation'
//Offers
import OffersEmp from '../components/Main/Services/Offers/Offers'
import SearchOfferEmp from '../components/Main/Services/Offers/SearchOffer'
import OfferDetails from '../components/Main/Services/Offers/OfferDetails'
//Debts
import RequestDebt from '../components/Main/Services/Debts/RequestDebt'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => {
  });
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/dashboard/signin',
    name: 'SigninAdmin',
    component: SigninAdmin
  },
  {
    path: '/dashboard/requests',
    name: 'Requests',
    component: Requests,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/requests/consult',
    name: 'ConsultRequests',
    component: ConsultRequests,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/requests/access',
    name: 'AccessRequests',
    component: AccessRequests,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/requests/accepted',
    name: 'AcceptedRequests',
    component: AcceptedRequests,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/requests/refused',
    name: 'RefusedRequests',
    component: RefusedRequests,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/employees',
    name: 'Employees',
    component: Employees,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/employees/add',
    name: 'AddEmployee',
    component: AddEmployee,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/employees/update',
    name: 'UpdateEmployee',
    component: UpdateEmployee,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/employees/search/:name',
    name: 'SearchEmployee',
    component: SearchEmployee,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/compensations',
    name: 'Compensations',
    component: Compensations,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/compensations/add',
    name: 'AddCompensation',
    component: AddCompensation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/compensations/update',
    name: 'UpdateCompensation',
    component: UpdateCompensation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/compensations/search/:name',
    name: 'SearchCompensation',
    component: SearchCompensation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/donations',
    name: 'Donations',
    component: Donations,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/donations/add',
    name: 'AddDonation',
    component: AddDonation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/donations/update',
    name: 'UpdateDonation',
    component: UpdateDonation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/donations/search/:name',
    name: 'SearchDonation',
    component: SearchDonation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/offers',
    name: 'Offers',
    component: Offers,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/offers/add',
    name: 'AddOffer',
    component: AddOffer,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/offers/update',
    name: 'UpdateOffer',
    component: UpdateOffer,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/services/offers/search/:name',
    name: 'SearchOffer',
    component: SearchOffer,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
          next()
      } else {
          next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/debts',
    name: 'Debts',
    component: Debts,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/debts/current',
    name: 'CurrentDebts',
    component: CurrentDebts,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/debts/archive',
    name: 'Archive',
    component: Archive,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/debts/update',
    name: 'UpdateDebts',
    component: UpdateDebts,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Budget',
    component: Budget,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/budget/compensations',
    name: 'CompBudget',
    component: CompBudget,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/budget/donations',
    name: 'DonBudget',
    component: DonBudget,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/budget/debts',
    name: 'DebBudget',
    component: DebBudget,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/dashboard/budget/offers',
    name: 'OffBudget',
    component: OffBudget,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  {
    path: '/compensations',
    name: 'CompensationsEmp',
    component: CompensationsEmp,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/compensations/request',
    name: 'RequestCompensation',
    component: RequestCompensation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/compensations/search/:name',
    name: 'SearchCompensationEmp',
    component: SearchCompensationEmp,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/donations',
    name: 'DonationsEmp',
    component: DonationsEmp,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/donations/request',
    name: 'RequestDonation',
    component: RequestDonation,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/donations/search/:name',
    name: 'SearchDonationEmp',
    component: SearchDonationEmp,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/offers',
    name: 'OffersEmp',
    component: OffersEmp,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/offers/details',
    name: 'OfferDetails',
    component: OfferDetails,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/offers/search/:name',
    name: 'SearchOfferEmp',
    component: SearchOfferEmp,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/debts/request',
    name: 'RequestDebt',
    component: RequestDebt,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/regulations',
    name: 'Regulations',
    component: Regulations,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/demand_account',
    name: 'DemandAccount',
    component: DemandAccount
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.user) {
          next()
      } else {
          next('/signin')
      }
    }
  },
  {
    path: '/dashboard/services',
    name: 'Services',
    component: Services,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },
  /*{
    path: '/dashboard/services',
    name: 'ServicesNavBar',
    component: ServicesNavBar,
    beforeEnter(to, from, next) {
      if (store.state.token && store.state.admin) {
        next()
      } else if (store.state.token && store.state.user) {
        next()
      } else {
        next('/dashboard/signin')
      }
    }
  },*/
  /*{ path: '*', redirect: { name : 'search'} }*/
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router