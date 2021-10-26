//declaring a new instance
var app = new Vue ({
     el:"#data",
     data: {
         formData: {
             name: '',
             email: ''
         },
         tableData: []
     },
     methods: {
         submit() {
             this.tableData.push(this.formData)
          //    this.tableData.push({...this.formData})
          //    console.log(this.formData)
          //    console.log('table data', this.tableData);
         }
     }
})