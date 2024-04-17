import style from "./style.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function UserPages() {
    const { name } = useParams()
    const [resultClient, setResultClient] = useState([{}])
    const [age, setAge] = useState('');

    async function getClient() {
        const res = await axios.post("http://localhost:3000/client", { name: name }, {
            withCredentials: true,
        });
        setResultClient(res.data)
    }

    async function changeStatus() {
        const res = await axios.post("http://localhost:3000/status", age, {
            withCredentials: true,
        });
    }

    useEffect(() => {
        changeStatus()
        getClient()
    }, [age])

    return (<div className={style.wrapper}>
        <h1 className={style.nameUser}>{name}</h1>
        {resultClient.map((el) => <div className={style.wrapperClient}>
            <p >{el.name}</p>
            <p >{el.surname}</p>
            <p >{el.patronymic}</p>
            <p >{el.accnum}</p>
            <p >{el.data}</p>
            <p >{el.inn}</p>
            <p >{el.status}</p>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Изменить</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        onChange={(e) => setAge({ id: el.id, status: e.target.value })}
                    >
                        <MenuItem value={'В работе'}>В работе</MenuItem>
                        <MenuItem value={'Отказ'}>Отказ</MenuItem>
                        <MenuItem value={'Сделка закрыта'}>Сделка закрыта</MenuItem>
                    </Select>
                </FormControl>
            </Box>


        </div>)}
    </div>);
}

export default UserPages;