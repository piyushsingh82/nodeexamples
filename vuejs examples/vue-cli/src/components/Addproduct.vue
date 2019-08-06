<template>
 <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Product Details modal
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            
            
            <form class="needs-validation col-md-12" novalidate="">
                <div class="row">
                  <div class="col-md-12">
                    <label for="firstName">Product name</label>
                    <input type="text" class="form-control" id="productName" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                      Valid Product name is required.
                    </div>
                  </div>
                   
                </div>
        
                <div class="mb-3">
                  <label for="address">Descrpton</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                  <div class="invalid-feedback">
                    Please enter your Descrpton.
                  </div>
                </div>
        
                <div class="mb-12">
                  <label for="address2">More detals <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                </div>
        
                <div class="row">
                  <div class="col-md-12">
                    <label for="country">Category</label>
                    <select class="custom-select d-block w-100" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid Category.
                    </div>
                  </div>
                 </div>
                <hr class="mb-4">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address">
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                 
        
                
                  
                <hr class="mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="button">Save to List</button>
              </form>
        
          </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
 
</script>

<style lang="scss"> 
</style>
