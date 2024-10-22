import { PulseLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
    return (
        <div className="loading">
            <PulseLoader color="#7e634e"/>
        </div>
    )
}

export default Loading