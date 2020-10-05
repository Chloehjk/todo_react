import React, { useEffect } from 'react';
import Axios from 'axios';
import API from 'Api';

export default function AxiosTest() {

    const [students, setStudents] = React.useState([]);
    const [id, setId] = React.useState(0);

    useEffect(()=>{
        //만들어질때
        API.get("study/students/")
        .then((res) => {
            // const data = res.data;
            const {data} = res;
            console.log(res);
            console.log(data);
            setStudents(data);
        }).catch(error => {
            console.log(error);
        })

        return () =>{
            //사라질때
        }
    },[])

    const click = (e) => {
        console.log(e.target.id);
        setId(e.target.id);
    }

    return (
        <div>
            {students.map((v)=> {
                return(<div id={v.id} onClick={click}>{v.name} {v.email}</div>)
            }
            )}
            <Detail id={id}/>
        </div>
    )
}

function Detail({id}){

    const [student, setStudent] = React.useState(null)

    useEffect(()=>{
        console.log("id 가 바뀜")
        API({
            method:'GET',
            url:"study/students/" + id
            })
        .then((res) => {
            // const data = res.data;
            const {data} = res;
            // console.log(res);
            // console.log(data);
            setStudent(data);
        }).catch(error => {
            console.log(error);
        })
    },[id])

    return (
        <div>
            {student && <div>{JSON.stringify(student)}</div>}
        </div>
    )

}