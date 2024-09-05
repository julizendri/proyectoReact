import { ImageUser } from "./ImageUser"
import { InfoUser } from "./InfoUser"

export const Card = ({imagenURL, name, details}) => {
    return <div className="userCard">
        <ImageUser imagenURL={imagenURL} />
        <InfoUser  name={name} details={details}/>
    </div>
}