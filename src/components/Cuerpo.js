import './Estilos/Cuerpo.css';
import { Grid, Box } from '@material-ui/core';
import Popup from 'reactjs-popup';
import MotoBreakout from './Imagenes/MotoBreakout.png';
import MotoFatboyHarley from './Imagenes/MotoFatboyHarley.PNG';
import TrikeFreewheeler from './Imagenes/TrikeFreewheeler.png';
import ThreeScene from './Modelos/ThreeScene';

function Cuerpo() {
  return (
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
            <Popup
              trigger={<button className="botones"> Ver más 1 </button>}
              modal
              nested
            >
              {close => (
                <Box
                  style={{
                    backgroundColor: '#263238',
                    padding: '30px',
                    minWidth: '600px'
                  }}
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    spacing={2}
                    item
                    xs={12}
                    display="flow"
                  >
                    <Grid
                      item
                      md={10}
                      xs={12}
                    >
                      <div
                        className="TitVisModelo"
                      >
                        Moto Breakout 2021
                      </div>
                    </Grid>
                    <Grid
                      justifyContent="space-between"
                      spacing={2}
                      item
                      xs={12}
                      display="flow"
                    >
                      <Box
                        sx={{
                          alignItems: 'center',

                        }}
                      >
                        <Grid
                          item
                          md={12}
                          xs={12}
                        >
                          <div
                            class="sketchfab-embed-wrapper"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              backgroundColor: "white"
                            }}
                          >
                            <iframe
                              style={{
                                width: "100%",
                                height: '350px'
                              }}
                              title="Moto"
                              frameborder="0"
                              allowfullscreen
                              mozallowfullscreen="true"
                              webkitallowfullscreen="true"
                              allow="autoplay; fullscreen; xr-spatial-tracking"
                              xr-spatial-tracking
                              execution-while-out-of-viewport
                              execution-while-not-rendered
                              web-share
                              src="https://sketchfab.com/models/82c3482d12f84bab89ae8be7ccb9844f/embed"
                            ></iframe>
                          </div>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </div>
                </Box>
              )}
            </Popup>
          </Grid>
          <Grid item xs={3}>
            <Popup
              trigger={<button className="botones"> Ver más 1 </button>}
              modal
              nested
            >
              {close => (
                <Box
                  style={{
                    backgroundColor: '#263238',
                    padding: '30px',
                    minWidth: '600px'
                  }}
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    spacing={2}
                    item
                    xs={12}
                    display="flow"
                  >
                    <Grid
                      item
                      md={10}
                      xs={12}
                    >
                      <div
                        className="TitVisModelo"
                      >
                        Fat Boy 2021
                      </div>
                    </Grid>
                    <Grid
                      justifyContent="space-between"
                      spacing={2}
                      item
                      xs={12}
                      display="flow"
                    >
                      <Box
                        sx={{
                          alignItems: 'center',

                        }}
                      >
                        <Grid
                          item
                          md={12}
                          xs={12}
                        >
                          <div
                            class="sketchfab-embed-wrapper"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              backgroundColor: "white"
                            }}
                          >
                            <iframe
                              style={{
                                width: "100%",
                                height: '350px'
                              }}
                              title="Moto"
                              frameborder="0"
                              allowfullscreen
                              mozallowfullscreen="true"
                              webkitallowfullscreen="true"
                              allow="autoplay; fullscreen; xr-spatial-tracking"
                              xr-spatial-tracking
                              execution-while-out-of-viewport
                              execution-while-not-rendered
                              web-share
                              src="https://sketchfab.com/models/82c3482d12f84bab89ae8be7ccb9844f/embed"
                            ></iframe>
                          </div>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </div>
                </Box>
              )}
            </Popup>
          </Grid>
          <Grid item xs={3}>
            <Popup
              trigger={<button className="botones"> Ver más 1 </button>}
              modal
              nested
            >
              {close => (
                <Box
                  style={{
                    backgroundColor: '#263238',
                    padding: '30px',
                    minWidth: '600px'
                  }}
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    spacing={2}
                    item
                    xs={12}
                    display="flow"
                  >
                    <Grid
                      item
                      md={10}
                      xs={12}
                    >
                      <div
                        className="TitVisModelo"
                      >
                        Trike Free Wheeler 2021
                      </div>
                    </Grid>
                    <Grid
                      justifyContent="space-between"
                      spacing={2}
                      item
                      xs={12}
                      display="flow"
                    >
                      <Box
                        sx={{
                          alignItems: 'center',

                        }}
                      >
                        <Grid
                          item
                          md={12}
                          xs={12}
                        >
                          <div
                            class="sketchfab-embed-wrapper"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              backgroundColor: "white"
                            }}
                          >
                            <iframe
                              style={{
                                width: "100%",
                                height: '350px'
                              }}
                              title="Moto"
                              frameborder="0"
                              allowfullscreen
                              mozallowfullscreen="true"
                              webkitallowfullscreen="true"
                              allow="autoplay; fullscreen; xr-spatial-tracking"
                              xr-spatial-tracking
                              execution-while-out-of-viewport
                              execution-while-not-rendered
                              web-share
                              src="https://sketchfab.com/models/82c3482d12f84bab89ae8be7ccb9844f/embed"
                            ></iframe>
                          </div>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </div>
                </Box>
              )}
            </Popup>
          </Grid>
          <Grid item xs={3}>
            <Popup
              trigger={<button className="botones"> Ver más 1 </button>}
              modal
              nested
            >
              {close => (
                <Box
                  style={{
                    backgroundColor: '#263238',
                    padding: '30px',
                    minWidth: '600px'
                  }}
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    spacing={2}
                    item
                    xs={12}
                    display="flow"
                  >
                    <Grid
                      item
                      md={10}
                      xs={12}
                    >
                      <div
                        className="TitVisModelo"
                      >
                        Trike Free Wheeler 2021
                      </div>
                    </Grid>
                    <Grid
                      justifyContent="space-between"
                      spacing={2}
                      item
                      xs={12}
                      display="flow"
                    >
                      <Box
                        sx={{
                          alignItems: 'center',

                        }}
                      >
                        <Grid
                          item
                          md={12}
                          xs={12}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              backgroundColor: "white"
                            }}
                          >
                            <ThreeScene />
                          </div>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </div>
                </Box>
              )}
            </Popup>
          </Grid>
        </Grid>
      </div>

    </>

  )
}

export default Cuerpo;
