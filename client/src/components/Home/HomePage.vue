<template>
  <div class="pl-1" style="margin-left:3px" >
    <div class="row " style="width:102% !important">
                    <div class="col-md-12 p-0 pl-3"  style="padding: 0px !important;width:100% " >
                        <div id="carouselExampleIndicators" class="carousel slide pl-3 " data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner " style="height: 250px;">
                                <div class="carousel-item active">
         
                                    <img class="d-block w-100" src="../../assets/home/image1.jpg" >
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../../assets/home/image2.jpg" >
                                </div>
                                <div class="carousel-item">
                                 <img class="d-block w-100" src="../../assets/home/image3.jpg" >
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                 
                        </div>
                    </div>
    </div>
    <div class="row justify-content-center mt-5 " style="margin:auto ;" >
                    <div class="row justify-content-center " style="margin-bottom: 50px;" >
                        <h2 >Current Available Special Offers</h2>
                        <div class="container">
                            <div class="row" style="margin: auto; max-width: 1000px;">
                                <div class="card m-3 shadow" style="width: 18rem;" v-for="serv in services" :key="serv._id">
                                    <img src="../../assets/home/summer.jpg" class="card-img-top ">
                                    <div class="card-body">
                                        <h5 class="card-title">{{serv.name}}</h5>
                                        <a @click="goToOfferDetails(serv._id)" class="btn mt-3 " style="float: right;text-decoration:none;font-size:15px">Apply now</a>
                                        <p class="card-text"> <img src="../../assets/home/stopwatch.png"> {{handleRemainingDays(serv.duration.endOffer)}} days remaining !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HomePage',
  computed: {
    ...mapGetters(['types', 'typeOfService', 'services', 'service', 'token'])
  },
  created() {
    this.handleGetServicesByType()
  },
  methods: {
    handleGetServiceById(id) {
      this.$store.dispatch("getServiceById", {
        id,
        token: this.token
      })
    },
    goToOfferDetails(id) {
      this.handleGetServiceById(id)
      this.$router.push('/offers/details')
    },
    handleRemainingDays(end) {
      const date1 = new Date(end);
      const date2 = new Date();
      //console.log(date2)
      //console.log(date1)
      const diffTime = date1 - date2;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays
    },
    handleGetServicesByType() {
      this.types.forEach((val) => {
        if (val.name === 'Offer' ) {
          this.$store.commit('setTypeOfService', val)
        }
      })
      this.$store.dispatch("getServicesByType", {
        typeOfService: this.typeOfService._id,
        token: this.token
      })
    },
  }
}
</script>
<style> 
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
  .blue{
    background-color: #2e5083;
    color: white;
  }
  .blue:hover{
    background-color: #e97923;
    color: white;
  }
  .blue:active{
    background-color: #efa81d;
    color: white;
  }
  .blue:focus{
    background-color: #efa81d;
    color: white;
  }
  .list-group-item.active{
  background-color: #e97923;
    color: white;
    border: 0px
  }
  .row>* {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .card-title {
    color: #2e5083;
    font-weight: lighter !important;
    font-size: 1.09rem;
  }
  .card-text {
    color: #e97923;
    font-size: 0.95rem;
  }
  .btn {
    background: white;
    border-radius: 0.2rem;
    border-color: #2e5083;
    color: #2e5083;
    justify-content: end !important;
    font-size: 0.9rem;
    font-weight: 250 !important;
  }
  .btn:hover {
    background: #2e5083 !important;
    color: white !important;
  }
  .card {
    height: max-content !important;
  }
  .modal-header {
    border-bottom: none !important;
  }
  .modal-footer {
    border-top: none !important;
  }
  .modal-header {
    padding: 0 !important;
  }
  .modal-header .card-img-top {
    height: 120px !important;
    object-fit: cover;
  } 
</style>