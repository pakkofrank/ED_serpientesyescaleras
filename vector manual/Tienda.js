export default class Tienda{
    constructor(tabla){
        this._tabla = tabla;
        this._vector = new Array(20);
    }
    _agregar(producto){
        let row = this._tabla.insertRow(-1);

        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
       

        cellCodigo.innerHTML = producto.codigo;
        cellNombre.innerHTML = producto.nombre;
        cellPrecio.innerHTML = producto.precio;
        cellCantidad.innerHTML = producto.cantidad;
        cellDescripcion.innerHTML = producto.descripcion;
        

        let objProductos = {
            codigo:producto.codigo,
            nombre:producto.nombre,
            precio:producto.precio,
            cantidad:producto.cantidad,
            descripcion:producto.descripcion
        }

        this._vector.vectorBinario2(objProductos);

    }

    _buscarProducto(codigo){
        let result = -1;
        this._vector.forEach((producto, index) => {
            if(producto.codigo === codigo){
                result = index;
                return;
            }
        });
        return result;

    }

    agregarProducto(producto){
        this._agregar(producto);
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "El producto se registro correctamente"
        })
    }

    /*_addBtnEliminar(row, producto){
        let btnEliminar = document.createElement("input");
        btnEliminar.value = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.className = "btn btn-danger";
        btnEliminar.id = "btnEliminar";

        btnEliminar.addEventListener("click", ()=>{
            let p = new Tienda();
            p._eliminarProducto(row, producto)
        });
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnEliminar);

    }*/

    vectorBinario2(array, item){
        var min = 0;
        var max = array.length -1;

        while(min <= max){

            var med = Math.floor((min + max)/2);
            var guess = array[med];

            if(guess === item){
                return med;
            }
            if(guess > item){
                max = med -1;
            }else{
                min = med +1;
            }

        }
        return -1;   

    }
    /*

    _eliminarProducto(row, articulo){
        Swal.fire({
            type: "question",
            title: "¿Deseas eliminar al contacto?",
            text: articulo.codigo,
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No"
        }).then(result => {
            if (result.value) {
                let r = this._buscarProducto(articulo.codigo);
                this._vector.splice(r, 1);
                row.remove();
            }
        });
      }*/


    }

    /*
    function vectorBinario (array, item){
        var min = 0;
        var max = array.length -1;

        while(min <= max){

            var med = Math.floor((min + max)/2);
            var guess = array[med];

            if(guess = item){
                return med;
            }
            if(guess > item){
                max = med -1;
            }else{
                min = med +1;
            }

        }
        return -1;
        
        

    }
    */