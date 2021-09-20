<template>
  <div id="app">
    <!-- Employee Navbar -->
    <div v-if="user">
      <div class="row">
        <nav style="background: #ffffff;" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#sidebar"
                  aria-controls="offcanvasExample"
                >
                  <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                </button>
                <a class="navbar-brand" href="#">
                  <img src="./assets/home/logo long.png" width="120" height="auto">
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#topNavBar"
                  aria-controls="topNavBar"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div style="justify-content: flex-end;" class="collapse navbar-collapse" id="topNavBar">
                  <ul class="navbar-nav">
                    
                    <li class="nav-item" active-class="active">
                      <a style="text-decoration: none; cursor:pointer" class="nav-link">About us</a>
                    </li>
                    <li class="nav-item" active-class="active">
                      <a @click="goToContact" style="text-decoration: none; cursor:pointer" class="nav-link">Contact us</a>
                    </li>
                  </ul>
                  <div class="dropdown ">
                    <button class="btn-prof" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0px;border: 0px;background-color: white;">
                  <a class="navbar-brand " href="#">
                    <img src="./assets/home/user (1).png"  >
                  </a>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                      <a @click="goToProfile" class="dropdown-item">Profile</a>
                      <a @click="logoutEmp" class="dropdown-item" >disconnect</a>
                    </div>
                  </div>
                </div>
              </div>
        </nav>
      </div>
      <div class="row" style="margin-top: 42px;width:100%">
        <div class="col-md-3 m-0 p-0 " style="border: 0px;background: #2e5083 !important">
          <!-- top navigation bar -->
          <!-- offcanvas -->
          <div style="background: #2e5083 !important; padding: 0 !important; margin: 0px;border: 0px; width:25%;margin-left:8px"
          class="offcanvas-body p-0 offcanvas offcanvas-start sidebar-nav position-fixed"  id="sidebar">
            <div id="mySidebar">
              
              <div class="list-group " id="list-tab" role="tablist">
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" exact class="list-group-item list-group-item-action blue active" to="/" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><i class="fas fa-home pl-2 pr-3"></i> Home</span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" exact class="list-group-item list-group-item-action blue" to="/regulations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><i class="fas fa-gavel pl-2 pr-3"></i>Workspace Regulations</a></span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" class="list-group-item list-group-item-action blue" to="/donations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><i class="fas fa-heart pl-2 pr-3"></i>Request a Donation</span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" class="list-group-item list-group-item-action blue" to="/compensations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><i class="fas fa-hand-holding-usd pl-2 pr-3"></i>Request a Compensation</span></router-link>
                <a @click="handleGetTypeDebt" class="list-group-item list-group-item-action blue" id="list-regulation-list" data-toggle="list" style="text-decoration: none; cursor:pointer" role="tab" aria-controls="profile"><i class="far fa-credit-card pl-2 pr-3"></i>Request Debt</a>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" class="list-group-item list-group-item-action blue" to="/offers" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><i class="fas fa-gift pl-2 pr-3"></i>Enroll in an Offer</span></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9  p-0 m-0"  >
          <router-view/>
        </div>
      </div>
    </div>

    <!-- Admin Navbar -->
    <div v-else-if="admin">
      <div class="row" style="margin-top: 0px; height:100vh">
        <div class="col-md-3 m-0 p-0 " style="border: 0px;background: #2e5083 !important">
          <!-- top navigation bar -->
          <!-- offcanvas -->
          <div style="background: #2e5083 !important; padding: 0 !important; margin: 0px;border: 0px; width:25%;margin-left:8px"
          class="offcanvas-body p-0 offcanvas offcanvas-start sidebaradmin-nav position-fixed"  id="sidebaradmin">
            <div id="mySidebarAdmin">
              <div class=" row justify-content-center mb-5 mt-3">
                <img  src="./assets/logo betterwork white.png" style="width: 100px;"/>
              </div>
              <div class="list-group " id="list-tab" role="tablist">
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" exact class="list-group-item list-group-item-action blue" to="/dashboard" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Budget</span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" exact class="list-group-item list-group-item-action  white" to="/dashboard/requests" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Requests</span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" class="list-group-item list-group-item-action white " to="/dashboard/services" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Services</span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" class="list-group-item list-group-item-action white" to="/dashboard/debts" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Debts</span></router-link>
                <router-link data-toggle="list" role="tab" aria-controls="settings" active-class="active" class="list-group-item list-group-item-action white" to="/dashboard/employees" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Employees</span></router-link>
                <a class="list-group-item list-group-item-action blue" id="list-settings-list" data-toggle="list" role="tab" aria-controls="settings">Workspace Regulations</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9 p-0 mr-0">
          <router-view/>
        </div>
        <!-- offcanvas -->
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>
<script>
import {logoutEmp} from './utils/employee/employee'
import {mapGetters} from 'vuex'
 export default {
  name: 'app',
  components: {
  },
  computed: {
    ...mapGetters(['user', 'admin', 'types', 'regulations', 'token'])
  },
  created() {
    this.handleGetTypes()
    this.handleGetRegDocument()
  },
  methods: {
    handleGetTypes() {
      this.$store.dispatch("getTypes", {token: this.token})
    },
    handleGetTypeDebt() {
      this.$store.dispatch("getTypeDebt", {})
      this.$router.push("/debts/request")
    },
    handleGetRegDocument() {
      this.$store.dispatch("getRegDocument", {token: this.token})
    },
    goToProfile() {
      this.$router.push('/profile')
    },
    goToContact() {
      this.$router.push('/contact')
    },
    logoutEmp() {
      logoutEmp(this.token)
    },
    logoutEmp() {
      logoutEmp(this.token)
    }
  }
}
</script>

<style>
.btn-prof{
  outline:none !important
}
           .btn-grad{
            background-image: linear-gradient(to right, #2e5083 0%, #2e5083 30%, #0e1e58   100%)}
             .btn-grad {
                margin: 10px;
                padding: 15px 45px;
                text-align: center;
                text-transform: uppercase;
                transition: 0.5s;
                background-size: 200% auto;
                color: white;
                box-shadow: 0 0 20px #eee;
                border-radius: 4px;
                display: block;
                border: 0px;
              }

              .btn-grad2:hover {
                background-color: black; /* change the direction of the change here */
                color: #fff;
                text-decoration: none;
              }

             .btn-grad2 {
               background-color: grey;
                margin: 10px;
                padding: 15px 45px;
                text-align: center;
                text-transform: uppercase;
                transition: 0.5s;
                background-size: 200% auto;
                color: white;
                box-shadow: 0 0 20px #eee;
                border-radius: 4px;
                display: block;
                border: 0px;
              }

              .btn-grad:hover {
                background-position: right center; /* change the direction of the change here */
                color: #fff;
                text-decoration: none;
              }
              .linka{
                text-decoration: underline;
                color: #2e5083;
              }
              .linka:hover{
                color:#0e1e58;
                text-decoration: underline;

              }
              .search {
        width: 100%;
        margin-bottom: auto;
        margin-top: 20px;
        height: 50px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px
    }

    .search-input {
        color: white;
        border: 0;
        outline: 0;
        background: none;
        width: 0;
        margin-top: 5px;
        caret-color: transparent;
        line-height: 20px;
        transition: width 0.4s linear
    }

    .search .search-input {
        padding: 0 10px;
        width: 100%;
        caret-color: #2e5083;
        font-size: 19px;
        font-weight: 300;
        color: black;
        transition: width 0.4s linear
    }

    .search-icon {
        height: 34px;
        width: 34px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #2e5083;
        font-size: 10px;
        bottom: 30px;
        position: relative;
        border-radius: 5px
    }

    .search-icon:hover {
        color: #fff !important
    }
              textarea:focus,
    input[type="text"]:focus,
    input[type="password"]:focus,
    input[type="datetime"]:focus,
    input[type="datetime-local"]:focus,
    input[type="date"]:focus,
    input[type="month"]:focus,
    input[type="time"]:focus,
    input[type="week"]:focus,
    input[type="number"]:focus,
    input[type="email"]:focus,
    input[type="url"]:focus,
    input[type="search"]:focus,
    input[type="tel"]:focus,
    input[type="color"]:focus,
    .uneditable-input:focus {
      border-color: #0e1e58;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.025) inset, 0 0 10px #0e1e58;
      outline: 0 none;
    }
    .bootstrap-select .bs-ok-default::after {
        width: 0.3em;
        height: 0.6em;
        border-width: 0 0.1em 0.1em 0;
        transform: rotate(45deg) translateY(0.5rem);
    }

    .btn.dropdown-toggle:focus {
        outline: none !important;
    }
    .avatar {
      vertical-align: middle;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px;
      border-color: #0e1e58;

    }
    
    
    .list-group-item.active{
      background-color: white;
        color: #2e5083;
        border: 0px;
        border-radius: 0px;

    }
    .list-group-item{
      padding-left: 50px;
    }
    nav{
      height: 0px;
    }
    .close-button{
      display: none;
    }
    @media (min-width: 992px) {
      nav{
        height: auto;
      }
      .close-button{
      display: block;
    }
    }
 
    .white{
        background-color: #2e5083;
        color: white;
    }
    .white:active{
        background-color: white;
        color:#efa81d;
    }
    .white:hover{
        background-color: #e97923;
        color: white;
    }
    
    .white:focus{
        background-color: white;
        color:#efa81d;
    }
    
   .blue{
        background-color: #2e5083;
        color: white;
    }
    .blue:active{
        background-color: #efa81d;
        color:white;
    }
    .blue:hover{
        background-color: #e97923;
        color: white;
    }
    
    .blue:focus{
        background-color: #efa81d;
        color:white;
    }


</style>
