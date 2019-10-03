export default class Tienda {
    constructor(tabla) {
        this._tabla = tabla;
        this._vector = new Array(20);
        this._contador = 0;
    }
    _agregar(objproducto) {
        if (this._contador < 20) {
            this._vector[this._contador] = objproducto;
            this._contador++;
            console.log(objproducto.codigo);
            this.ordenarProducto();
           
        }else{
            alert("se llego al cupo maximo de productos")
        }

        console.log(this._vector);


    }


    actualizarTabla() {
        this._tabla.innerHTML = "";

        for (let i = 0; i < this._contador; i++) {

            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = this._vector[i].codigo
            row.insertCell(1).innerHTML = this._vector[i].nombre
            row.insertCell(2).innerHTML = this._vector[i].precio
            row.insertCell(3).innerHTML = this._vector[i].cantidad 
            row.insertCell(4).innerHTML = this._vector[i].descripcion

        }
    }


    _buscarProducto(codigo) {
        let result = -1;
        this._vector.forEach((producto, index) => {
            if (producto.codigo === codigo) {
                result = index;
                return;
            }
        });
        return result;

    }


    ordenarProducto() {
        for (var i = 0; i < this._contador; i++) {
            for (var j = 0; j < this._contador; j++) {
                for (var l = 0; l < this._contador; l++) {
                    if (this._vector[j].codigo < this._vector[l].codigo) {
                        let n = this._vector[j];
                        this._vector[j] = this._vector[l];
                        this._vector[l] = n;
                    }
                }
            }

        }
    }

    agregarProducto(objproducto){
        this._agregar(objproducto);
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

    vectorBinario2(array, item) {
        var min = 0;
        var max = array.length - 1;

        while (min <= max) {

            var med = Math.floor((min + max) / 2);
            var guess = array[med];

            if (guess === item) {
                return med;
            }
            if (guess > item) {
                max = med - 1;
            } else {
                min = med + 1;
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