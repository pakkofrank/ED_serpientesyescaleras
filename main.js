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

        //escaleras

        switch (this._posicion){
             //escaleras
            case 2:
                this._posicion += 36;
                break
            case 7:
                this._posicion += 7;

            break

            case 15:
                this._posicion += 11;

            break

            case 21:
                this._posicion += 21;
            break

            case 28:
                this._posicion += 54;
            break

            case 36:
                this._posicion += 8;
            break

            case 51:
                this._posicion += 16;
            break

            case 78:
                this._posicion += 28;

            case 2:
                this._posicion += 36;
                break
            case 7:
                this._posicion += 7;

            break

            case 15:
                this._posicion += 11;

            break

            case 21:
                this._posicion += 21;
            break

            case 28:
                this._posicion += 54;
            break

            case 36:
                this._posicion += 8;
            break

            case 51:
                this._posicion += 16;
            break

            case 78:
                this._posicion += 28;
           case 2:
                this._posicion += 36;
                break
            case 7:
                this._posicion += 7;

            break

            case 15:
                this._posicion += 11;

            break

            case 21:
                this._posicion += 21;
            break

            case 28:
                this._posicion += 54;
            break

            case 36:
                this._posicion += 8;
            break

            case 51:
                this._posicion += 16;
            break

            case 78:
                this._posicion += 28;
            break
            //serpientes
            case 16:
                this._posicion += -10;
                break
            case 49:
                this._posicion += -38;

            break

            case 62:
                this._posicion += -43;

            break

            case 74:
                this._posicion += -21;
            break

            case 89:
                this._posicion += -21;
            break

            case 92:
                this._posicion += -4;
            break

            case 95:
                this._posicion += -20;
            break

            case 99:
                this._posicion += -19;
            break                 
        }
    }
}

class Jugador2 extends Jugadores {
    avanzar(){
        let n = this._dado.lanzar();
        this._posicion += n;

        switch (this._posicion){
            //escaleras
            case 2:
                this._posicion += 36;
                break
            case 7:
                this._posicion += 7;

            break

            case 15:
                this._posicion += 11;

            break

            case 21:
                this._posicion += 21;
            break

            case 28:
                this._posicion += 54;
            break

            case 36:
                this._posicion += 8;
            break

            case 51:
                this._posicion += 16;
            break

            case 78:
                this._posicion += 28;

            case 2:
                this._posicion += 36;
                break
            case 7:
                this._posicion += 7;

            break

            case 15:
                this._posicion += 11;

            break

            case 21:
                this._posicion += 21;
            break

            case 28:
                this._posicion += 54;
            break

            case 36:
                this._posicion += 8;
            break

            case 51:
                this._posicion += 16;
            break

            case 78:
                this._posicion += 28;
         case 2:
                this._posicion += 36;
                break
            case 7:
                this._posicion += 7;

            break

            case 15:
                this._posicion += 11;

            break

            case 21:
                this._posicion += 21;
            break

            case 28:
                this._posicion += 54;
            break

            case 36:
                this._posicion += 8;
            break

            case 51:
                this._posicion += 16;
            break

            case 78:
                this._posicion += 28;
            break
            //serpientes
            case 16:
                this._posicion += -10;
                break
            case 49:
                this._posicion += -38;

            break

            case 62:
                this._posicion += -43;

            break

            case 74:
                this._posicion += -21;
            break

            case 89:
                this._posicion += -21;
            break

            case 92:
                this._posicion += -4;
            break

            case 95:
                this._posicion += -20;
            break

            case 99:
                this._posicion += -19;
            break              
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


