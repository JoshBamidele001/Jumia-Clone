

    let todoId = localStorage.getItem("todoId");
    console.log(todoId);
    let allProducts = []
    let products = [];
    let phones_body = document.getElementById("phones_body");

    function signupprofile(){
        window.location.href = "login.html"
    }

    function fetchAllProducts() {
        fetch('https://dummyjson.com/products').then((data) => data.json())
            .then((res) => {
                console.log(res.products);
                allProducts = res.products;
                localStorage.setItem("allProd", JSON.stringify(allProducts))
            })
    }

    fetchAllProducts()


    function dispAllProd() {
        products = JSON.parse(localStorage.getItem("allProd"))
        console.log(products.id);
        products.splice(5,25)
        products.forEach(element => {
            phones_body.innerHTML += `
                <div id= "phpnesBody" onclick = "oneProductDisplay(${element.id})">
                    <img src="${element.images[0]}" />  
                    <h6>${element.title}</h6>  
                    <span>$${element.price}</span> 
                </div>
            `
        });
    }
    dispAllProd()

    function dispAllLaptops() {
        products = JSON.parse(localStorage.getItem("allProd"))
        console.log(products.id);
        let lappyProducts = products.slice(5,10)
        lappyProducts.forEach(element => {
            laptop_body.innerHTML += `
                <div id= "phpnesBody" onclick = "oneProductDisplay(${element.id})">
                    <img src="${element.images[0]}" />  
                    <h6>${element.title}</h6>  
                    <span>$${element.price}</span> 
                </div>
            `
        });
    }
    dispAllLaptops()

    function oneProductDisplay(id){
        console.log("jklknbv");
        localStorage.setItem("todoid", id)
        window.location.href = "oneProduct.html"
    }

    function dispAllFragnance() {
        products = JSON.parse(localStorage.getItem("allProd"))
        console.log(products.id);
        let fraganceProducts = products.slice(10,15)
        fraganceProducts.forEach(element => {
            fragnance_body.innerHTML += `
                <div id= "phpnesBody" onclick = "oneProductDisplay(${element.id})">
                    <img src="${element.images[0]}" />  
                    <h6>${element.title}</h6>  
                    <span>$${element.price}</span> 
                </div>
            `
        });
    }
    dispAllFragnance()

    function dispAllSkincare() {
        products = JSON.parse(localStorage.getItem("allProd"))
        console.log(products.id);
        let skincareProducts = products.slice(15,20)
        skincareProducts.forEach(element => {
            skincare_body.innerHTML += `
                <div id= "phpnesBody" onclick = "oneProductDisplay(${element.id})">
                    <img src="${element.images[0]}" />  
                    <h6>${element.title}</h6>  
                    <span>$${element.price}</span> 
                </div>
            `
        });
    }
    dispAllSkincare()

    function dispAllGroceries() {
        products = JSON.parse(localStorage.getItem("allProd"))
        console.log(products.id);
        let groceriesProducts = products.slice(20,25)
        groceriesProducts.forEach(element => {
            groceries_body.innerHTML += `
                <div id= "phpnesBody" onclick = "oneProductDisplay(${element.id})">
                    <img src="${element.images[0]}" />  
                    <h6>${element.title}</h6>  
                    <span>$${element.price}</span> 
                </div>
            `
        });
    }
    dispAllGroceries()

//    let  SingleProduct = document.getElementById("phpnesBody");
//     SingleProduct.addEventListener("click", singleOutProduct)
//    function singleOutProduct() {
//         console.log("bdnmhjk");
//         window.location.href = "carousel.html"
//     }
    function dispAllHomeDecor() {
        products = JSON.parse(localStorage.getItem("allProd"))
        console.log(products.id);
        let homedecorProducts = products.slice(25,30)
        homedecorProducts.forEach(element => {
            homedecor_body.innerHTML += `
                <div id= "phpnesBody" onclick = "oneProductDisplay(${element.id})">
                    <img src="${element.images[0]}" />  
                    <h6>${element.title}</h6>  
                    <span>$${element.price}</span> 
                </div>
            `
        });
    }
    dispAllHomeDecor()

       
     

    // function dispOneProd() {
    //     products = JSON.parse(localStorage.getItem("allProd"))
    //     console.log(products.id);
       
    //         dispOneProd.innerHTML = `
    //             <div id= "phpnesBody">
    //                 <img src="${products.id.images[0]}" />  
    //                 <h3>${products.id.title}</h3>  
    //                 <h4>$${products.id.price}</h4> 
    //             </div>
    //         `
        
    // }
    
    


 