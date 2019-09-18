class Dado{
    constructor(){

    }
    lanzar(){
       return Math.ceil(Math.random()*6+1) 
    }
}

class Jugadores{
    constructor(){
        this._posicion = 0;
        this._dado = new Dado();
    }
    get posicion(){
        return this._posicion;
    }
    get dado(){
        return this._dado;
    }
}

class Jugador1 extends Jugadores {
    avanzar(){
        let n = this._dado.lanzar();
        this._posicion += n;

        switch (this._posicion){
            case 2:
                this._posicion += 10;
                break
            case 7:
                this._posicion += -10;

            break

            case 15:
                this._posicion += -10;

            break

            case 21:
                this._posicion += -10;
            break

            case 28:
                this._posicion += -10;
            break

            case 36:
                this._posicion += -10;
            break

            case 51:
                this._posicion += -10;
            break

            case 78:
                this._posicion += -10;
        }
    }
}

class Jugador2 extends Jugadores {
    avanzar(){
        let n = this._dado.lanzar();
        this._posicion += n;

        switch (this._posicion){
            case 2:
                this._posicion += 10;
                break
            case 7:
                this._posicion += 10;

            break

            case 15:
                this._posicion += -10;

            break

            case 21:
                this._posicion += 10;
            break

            case 28:
                this._posicion += 10;
            break

            case 36:
                this._posicion += -10;
            break

            case 51:
                this._posicion += 10;
            break

            case 78:
                this._posicion += 10;
        }
    }
}

var j1 = new Jugador1();
var j2 = new Jugador2();


while(j1.posicion<100 && j2.posicion<100){
    j1.avanzar();
    j2.avanzar();
    console.log(j1.posicion,j2.posicion);
}

if (j1.posicion>=100 && j2.posicion>=100){
    console.log("empate");
}else if(j1.posicion>=100){
    console.log("jugador 1 gano");
}else{
    console.log("jugador 2 gano");
}


