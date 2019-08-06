<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">NuPiyu</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">New Arrivals</b-nav-item>
        <b-nav-item href="#" >Services</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

         

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-container> 
    <b-carousel
        id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        fade
        background="#ababab"
        :interval="2000"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
       <!-- Slides with img slot -->
       </b-carousel>
      <h2><span>{{ msg }}</span> Ecosystem</h2>
      <b-alert :show="dismissCountDown" dismissible variant="info" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
    <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress variant="info" :max="dismissSecs" :value="dismissCountDown" height="2px" />
    </b-alert> <b-button @click="showAlert" variant="success" class="m-1 ">
     showhide
    </b-button>
   
    
      <b-card-group deck>
    <b-card title="Title" img-src="https://m.media-amazon.com/images/I/81LHaK7eXyL._AC_SX255_.jpg" img-alt="Image" img-top>
      <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
      
       
      <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
    </b-card>

    <b-card title="Title" img-src="https://m.media-amazon.com/images/I/71NIrOxq9-L._AC_SX255_.jpg" img-alt="Image" img-top>
       <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
      
      <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
    </b-card>

    <b-card title="Title" img-src="https://m.media-amazon.com/images/I/711uj52gatL._SX480_.jpg" img-alt="Image" img-top>
       <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
      <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
    </b-card>
  </b-card-group>
 
 
      
    </b-container>
    <footer class="footer ">
      <div class="container success">
        <div class="row bottom-rule">
 
        <div class="col-sm-8 footer-section">
        <ul class="list-inline">
            <li class="text-uppercase">Customer Service:</li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Our Guarantee</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Product Guides</a></li>
            <li><a href="#">Customer Care</a></li>
        </ul>
        <ul class="list-inline">
            <li class="text-uppercase">Social Media &amp; Articles:</li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">The Best Journal</a></li>
        </ul>
        <ul class="list-inline">
            <li class="text-uppercase">Events:</li>
            <li><a href="#">Hangout April 30</a></li>
            <li><a href="#">Makers Faire</a></li>
        </ul>
        </div>
     <div class="col-sm-4 footer-section">
    <strong>Connect with Best Store</strong>
    <p>Email promotions, news, and information</p>
    <form class="form-inline">
        <div class="form-group">
            <label 
                class="sr-only" 
                for="inputEmail"
            >Email</label>
            <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="address@example.com"
            >
         </div>
         <button type="submit" class="btn btn-success">Subscribe</button>
     </form>
    </div>
    </div>
    <hr/>
 <div class="row leg-room">
    <div class="col-md-12 text-center">
        <h1 class="text-uppercase">NuPiyu </h1>
        <p class="monospaced">
            &copy;2016  ENuPiyu Levevis Ecommerce Pvt Ltd
            <span class="text-uppercase">All Rights Reserved</span></p>
    
</div><!-- end row -->
    </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false,
          slide: 0,
        sliding: null,
    
      msg: 'Welcome Guest'
    }    
  },
  methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

 <style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.showhide{
float:left;
  
}
.card-header{
      padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
}
.footer{
  padding-top:20px;
    margin-top:20px;
    width: 100%;
    background-color: #f5f5f5;
}
.container .text-muted {
    margin: 20px 0;
}
</style>
