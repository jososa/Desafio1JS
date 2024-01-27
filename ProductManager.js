class ProductManager{
    constructor(){
        this.products = []
    }

    //Agrega un producto validando que todos los campos sean obligatorios y el codigo del producto no se repita
    addProduct(title, description, price, thumbail, code, stock){
        if(!title || !description || !price || !thumbail || !code || !stock){
            console.log("Todos los campos a ingresar son obligatorios, reintente nuevamente")
        }else if(this.products.some(prod => prod.code === code)){
                console.log("El código ingresado ya existe")
        }
        else{
            const product = {
                id: this.generateId(),
                title: title,
                description: description,
                price: price,
                thumbail: thumbail,
                code: code,
                stock: stock
            }
            return this.products.push(product)
        }
    }
    
    //Genera id autoincremental
    generateId(){
        let id=0
    
        if(this.products.length === 0){
            id=1
        }
        else{
            id=this.products[this.products.length-1].id++
        }
    
        return id
    }
    
    //Obtiene el listado de productos
    getProducts = () => this.products
    
    //Busca un producto por Id
    getProductById(productId){
    const prod = this.products.find((products) => products.id === productId)
            if(!prod){
                console.log("Not found")
            }
            else{
                console.log(prod)   
            }
    }

}

/***** Testing de entregable *****/

//Se creará una instancia de la clase “ProductManager”
const productMgr = new ProductManager()

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
//const result1 = productMgr.getProducts()
//console.log(result1)

productMgr.addProduct("Television", "Smart TV 4K 55 Pulgadas", 15000, "Img", 9636, 10)

//Se agrega un producto con algún valor vacío para que devuelva el mensaje de error
//productMgr.addProduct("","Smart TV 4K 55 Pulgadas", 15000, "Img", 9636, 10)

//	Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
const result2 = productMgr.getProducts()
console.log(result2)

//  Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
//productMgr.addProduct("Television", "Smart TV 4K 55 Pulgadas", 15000, "Img", 9636, 10)

//productMgr.addProduct("TV LED", "Smart TV 4K 70 Pulgadas", 25000, "Img2", 1590, 7)

//	Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
//const result3 = productMgr.getProductById(5)
//console.log(result3)

//const result4 = productMgr.getProductById(2)
//console.log(result4)
