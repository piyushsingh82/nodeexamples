var app = new Vue({
    el: '#app',
    data: {
     greeting: 'Welcome to your Vue.js app!',
     docsURL: 'http://vuejs.org/guide/',
     discordURL: 'https://chat.vuejs.org',
     forumURL: 'http://forum.vuejs.org/',
     link:'http://www.google.com',
     x:0,
     y:0,
     counter:0,
     secondCounter:0,
     attachRed:false,
     color:'blue',
     attachYellow:false,
     newColor:'orange',
     width:100,
     showp:true,
     ingredients:['meat','fruit','cookies'],
     persons:[
         {name:'piyush',age:37,color:'red'},
         {name:'nutan',age:35,color:'purple'}
    ]
   },
    computed:
    {
        output:function (){
            console.log("output computed");
            return this.counter > 5 ? "greater than 5":"smaller than 5";
        },
        divClasses:function(){
            return {
                red:this.attachRed,
                blue:!this.attachRed
            }
        }
        ,myStyle:function(){
            return{
                backgroundColor: this.newColor,
                width: this.width + 'px'
            }
        }
    },
    watch:
    {
        counter:function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000)
        }
    },
    methods: {
        result:function (){
            console.log("result method");
           return this.counter > 5 ? "greater than 5":"smaller than 5";
       },
      humanizeURL: function (url) {
        return url
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '')
      },
      changeLink: function(){
          this.link = "http://vuejs.org";
      }

    }
  })