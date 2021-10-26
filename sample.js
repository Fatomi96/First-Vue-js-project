const app = new Vue({
     el: '#app',
     data: {
          products: [
               {
                    name: 'Boots',
                    quantity: 7
                },
                {
                    name: 'Tops',
                    quantity: 0
                },
                {
                    name: 'Shirts',
                    quantity: 2
                },
                {
                    name: 'Sneakers',
                    quantity: 4
                }
          ]
     },
     computed: {
          totalProducts () {
               return this.products.reduce((sum, product) => {
                  return sum + product.quantity  
               }, 0)
          }
     }
     
})

