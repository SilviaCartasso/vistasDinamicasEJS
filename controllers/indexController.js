module.exports = {
    index: function(req, res) {
      let menu = [
        {
          plato: "Carpaccio fresco",
          descripcion: "Entrada Carpaccio de salmón con cítricos U$S 65.50"
        },
        {
          plato: "Risotto de berenjena",
          descripcion: "Risotto de berenjena y queso de cabra U$S 47.00"
        },
        {
          plato:"Mousse de arroz",
          descripcion: "Mousse de arroz con leche y aroma de azahar U$S 27.50"
        },
        {
          plato: "Espárragos blancos",
          descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50"
        }
      ];

        res.render('index', {
          title: "Pimienta & Sal",
          "menu": menu
          })
      },
    detalle: function(req, res,) {
      let detallesMenu = [
        {
          id:1,
          plato: "Carpaccio fresco",
          descripcion: "Entrada Carpaccio de salmón con cítricos",
          precio: "U$S 65.50",
          imagen: "/images/Carpaccio-de-salmon.jpg"
        },
        {
          id:2,
          plato: "Risotto de berenjena",
          descripcion: "Risotto de berenjena y queso de cabra",
          precio: "U$S 47.00",
          imagen: "/images/Risotto-berenjena-queso-cabra.jpg"

        },
        {
          id:3,
          plato:"Mousse de arroz",
          descripcion: "Mousse de arroz con leche y aroma de azahar",
          precio: "U$S 27.50",
          imagen: "/images/Mousse-de-arroz-con-leche.jpg"

        },
        {
          id:4,
          plato: "Espárragos blancos",
          descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
          precio: "U$S 37.50",
          imagen: "/images/esparragos.png",
        }
      ];

      let plato = detallesMenu.find((plato) => plato.id == req.params.id);
      
      res.render('detalleMenu',{
          title: "Pimienta & Sal",
          plato
       })
      }
}