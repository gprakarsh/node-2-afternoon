module.exports={
    create:(req,res)=>{
      const {name,description,price,image_url} = req.body;
      req.app.get('db').create_product([name,description,price,image_url]).then(()=>{
          res.status(200).json("Product Added")
      })
    },
    getOne:(req,res)=>{
        const {id} = req.params;
        req.app.get('db').read_product(id).then((product)=>{
            res.status(200).send(product)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send({errorMessage:"Oops Something Went Wrong!"})
        })
    },
    getAll:(req,res)=>{
        req.app.get('db').read_products().then((products)=>{
            console.log(products)
            res.status(200).send(products);
        })
        
        .catch(err=>{
            console.log(err);
            res.status(500).send({errorMessage:"Oops Something Went Wrong!"})
        })
    },
    update:(req,res)=>{
        const {id} = req.params;
        const {desc} = req.query;
        req.app.get('db').update_product([id,desc]).then(()=>{
         res.status(200).json("Updated Product Description")
        })
        
        .catch(err=>{
            console.log(err);
            res.status(500).send({errorMessage:"Oops Something Went Wrong!"})
        })
    },
    delete:(req,res)=>{
        const {id} = req.params;
        req.app.get('db').delete_product(id).then(()=>{
            res.status(200).json("Product Deleted")
        })        
        .catch(err=>{
            console.log(err);
            res.status(500).send({errorMessage:"Oops Something Went Wrong!"})
        })
    }
}