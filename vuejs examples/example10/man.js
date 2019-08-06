    var app = new Vue({
      el: '#app',
      data:{
          startZip:'',
          startCity:'',
          endZip:'',
          endCity:''
      },
      watch:{
        startZip: function()
        {
          this.startCity='';
          if (this.startZip.length == 5)
          {
            this.lookupStartZip()
          }
        },
        endZip: function()
        {
          this.EndCity='';
          if(this.endZip.length == 5)
          {
            this.lookupEndZip()
          }
        }
      },
      methods:{
        lookupStartZip: _.debounce(function(){
        var app = this;
        app.startCity='searching..';
        axios.get('http://ziptasticapi.com/' + app.startZip)
        .then(function(response)
        {
          app.startCity= response.data.city+', '+response.data.state;
        })
        .catch(function(error)
        {
          app.startCity="No records found.."
        })
        
        },500)
       ,
       lookupEndZip: _.debounce(function(){
        var app = this;
        app.endCity='searching..';
        axios.get('http://ziptasticapi.com/' +app.endZip)
        .then(function(response){
            app.endCity = response.data.city+' , '+response.data.state
        })
        .catch(function(){
          app.endCity= 'No records found..'
        })
        },500)
      }
    })