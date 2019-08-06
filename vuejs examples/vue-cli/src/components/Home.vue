<template>
  <div class="container">
 <div class="clearfix">&nbsp;</div>
          <h1>Page Heading</h1>
     <button id="show-modal" @click="addProductModal = true" class="btn btn-outline-success">Add product</button>
  <!-- use the modal component, pass in the prop -->
    <modal v-if="addProductModal" @close="addProductModal = false">
       <h3 slot="header">Product Details </h3>
    </modal>
      <hr>
 <div class="card-deck">
  <div class="card">
    <img src="https://vuejs.org/images/logo.png" class="card-img-top" alt="loggo">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
 
  <div class="card">
    <img src="https://vuejs.org/images/logo.png" class="card-img-top" alt="loggo">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
 
  <div class="card">
    <img src="https://vuejs.org/images/logo.png" class="card-img-top" alt="loggo">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
  </div>      
</template>

<script>
 export default {
    
}
</script>

<style lang="scss"> 
</style>
