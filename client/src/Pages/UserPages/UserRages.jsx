import style from "./style.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPages() {
    const { name } = useParams()
    const [resultClient, setResultClient] = useState([{}])

    async function getClient() {
        const res = await axios.post("http://localhost:3000/client", { name: name }, {
            withCredentials: true,
        });
        setResultClient(res.data)
    }

    useEffect(() => {
        getClient()
    }, [])


    return (<div className={style.wrapper}>
        <h1 className={style.nameUser}>{name}</h1>
        {resultClient.map((el) => <div className={style.wrapperClient}>
            <p className={style.clientName}>{el.name}</p>
            <p className={style.clientSurname}>{el.surname}</p>
            <p className={style.clientPatronymic}>{el.patronymic}</p>
            <p className={style.clientaccnum}>{el.accnum}</p>
            <p className={style.clientPatronymic}>{el.data}</p>
            <p className={style.clientPatronymic}>{el.inn}</p>
            <p className={style.clientstaus}>{el.status}</p>
        </div>)}
    </div>);
}

export default UserPages;