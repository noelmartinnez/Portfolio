
import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
    const {progress} = useProgress();
    
    return (
        /* Crea el porcentaje que aparece en el modelo 3D del ordenador cada vez que se recarga la página */
        <Html>
            <span className='canvas-load'></span>
            <p
                style={{
                    fontSize: 14,
                    color: '#f1f1f1',
                    fontWeight: 800,
                    marginTop: 40
                }}
            >{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader