import style from "./style.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserPages() {
    const { name } = useParams()

    return (<>
        <h1>{name}</h1>
    </>);
}

export default UserPages;