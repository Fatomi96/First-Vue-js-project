//Declare new instance
const app = new Vue ({
     el:"#assignment",
     data: {
          formData: {
               name: "Fatomi Abiodun",
               address:  "Ibadan, Oyo State",
               occupation: "Software Developer (student)",
               visitorName: "",
               userName: "",
               email: "",
               phoneNumber: "",
          },
          foods: [
               "Pounded yam and Egusi",
               "Wheat and Vegetable",
               "Yam and Egg",
               "Amala and Abula",
          ],
          countries: [
               "Canada",
               "Qatar",
               "Saudi Arabia",
               "United state of America",
          ],
          tableData: [],
          food: "",
          country: "",
          food_visibility: false,
          country_visibility: false,
          currentTime: new Date().getHours(),
          fullTime: new Date().getHours() + ":" + new Date().getMinutes(),
          greetings: null,
     },
     methods: {
          favFood (){
               this.food_visibility = true
          },
          favCountry (){
               this.country_visibility = true
          },
          submit() {
               this.tableData.push({...this.formData})
          }
     },

})