import './Estilos/Cuerpo.css';
import {Grid} from '@material-ui/core';
import MotoBreakout from './Imagenes/MotoBreakout.png';
import MotoFatboyHarley from './Imagenes/MotoFatboyHarley.PNG';
import TrikeFreewheeler from './Imagenes/TrikeFreewheeler.png';
import ThreeScene from './Modelos/ThreeScene';

function Cuerpo()
{
    return(
        <>
        <div className="personalizarcuerpo">
        <Grid container spacing={8}>
            <Grid item xs={3}>
                <div className="cuadro">
                <img src={MotoBreakout} alt="Moto1" width="100%" />
                </div>
            </Grid>
            <Grid item xs={3} >
                <div className="cuadro">
                <img src={MotoFatboyHarley} alt="Moto2" width="100%" />
                </div>
            </Grid>
            <Grid item xs={3} >
                <div className="cuadro">
                <img src={TrikeFreewheeler} alt="Moto3" width="100%" />
                </div>
            </Grid>
            <Grid item xs={3} >
                <div className="cuadro">
                <img src={TrikeFreewheeler} alt="Moto3" width="100%" />
                </div>
            </Grid>
            <Grid xs={3}>
                <div className="nombremoto">
                Moto Breakout 2021
                </div>
                <div className="marcamoto">
                    Harley Davidson
                </div>
                </Grid>

            <Grid xs={3}>
            <div className="nombremoto">
                Fat Boy 2021
                </div>
                <div className="marcamoto">
                    Harley Davidson
                </div>
            </Grid>
            <Grid xs={3} >
            <div className="nombremoto">
                Trike Free Wheeler 2021
                </div>
                <div className="marcamoto">
                    Harley Davidson
                </div>
            </Grid>
            <Grid xs={3}>
            <div className="nombremoto">
                Trike Free Wheeler 2021
                </div>
                <div className="marcamoto">
                    Harley Davidson
                </div>
            </Grid>
            <Grid item xs={3}>
                <button className="botones">
                    Ver más
                </button>
            </Grid>
            <Grid item xs={3}>
            <button className="botones">
                    Ver más
                </button>
            </Grid>
            <Grid item xs={3}>
            <button className="botones">
                    Ver más
                </button>
            </Grid>
            <Grid item xs={3}>
            <button className="botones">
                    Ver más
                </button>
            </Grid>
        </Grid>        
        </div>
        <div className="x">
            <div className="TitVisModelo"> 
            Moto Breakout 2021
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <ThreeScene/>
            </div>
        </div>
        </>
        
    )
}

export default Cuerpo;