var app = new Vue({
     el:"#app",
     data: {
          greeting: 'Good Morning',
          names: [
               "Mary",
               "Omolade",
               "Moyinoluwa", 
               "Oluwatimileyin",  
               "Ibukun",
               "Temitope", 
               "Miracle", 
               "Olajuwon", 
               "Fatomi",
          ],
          cities: [
               "Las vegas",
               "Lagos",
          ],
          name: "",
          message: "Timi is in Lagos",
     },
     mounted() {
          // alert('Welcome to Enyata')
          this.greet()
     },
     methods: {
          greet(){
               this.greeting = "HEY,SACK OLE!"
          },
          reverseMessage() {
               this.message = this.message.split(" ").reverse().join(" ");
          }
     },

})