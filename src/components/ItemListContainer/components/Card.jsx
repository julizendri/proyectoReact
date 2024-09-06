import { ImageUser } from "./ImageUser"
import { InfoUser } from "./InfoUser"

export const Card = ({imagenSRC, name, details}) => {
    return <div className="userCard">
        <ImageUser imagenSRC={imagenSRC} />
        <InfoUser  name={name} details={details}/>
    </div>
}