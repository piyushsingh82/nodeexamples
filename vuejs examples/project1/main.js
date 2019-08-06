new Vue({
    el:'#app',
    data:{
        x:0,
        y:0,
        result:0,
        counter:0,
        title:'Hello World',
        textheading :'heading',
        link:'http://www.google.com',
        finalTitle: '<a href="http://www.google.com">google</a>'
    },
    methods:{
        onchangeme:function(event){
         this.title = event.target.value;  
        },
        
        increase:function(){
        this.counter ++;
        
        },
        decrease:function(){
            this.counter--;
           
            },   
        updatemousecordinates:function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        stopmousecordinates:function(event)
        {
            event.stopPropagation();
        }
        ,alertMe:function(){
            alert("alert");
        }
    }
});