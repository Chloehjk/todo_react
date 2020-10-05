import Axios from 'axios';
import React from 'react';
import { Divider, List, Button, Tooltip, Modal, Input, DatePicker, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';


export default function Experience () {
    
    const [info, setInfo] = React.useState([]);
    const [state, setState] = React.useState({ visible: false });
    const {RangePicker} = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    const {TextArea} = Input;
    const [experience, setExperience] = React.useState({
        title : '',
        date : [],
        institution : '',
        memo : ''
    })


/////////////////////////로그인 권한 주기//////////////////////
    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/experience/', {
            headers: {
                Authorization : "JWT " + window.localStorage.getItem("token")
            }
        }).then(res=>{
            const {data} = res;
            setInfo(prev => data);
        })        
    },[])
/////////////////////////창이 만들어질 때/////////////////////////
    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/experience/')
        .then(res => {
            const {data} = res;
            setInfo(data)
        }).catch(error => {            
        });
    },[])

/////////////////////////모달 창 생성/////////////////////////   
    const showModal = () => {
      setState({
        visible: true,
      });
    };

/////////////////////////모달 창 OK랑 연결/////////////////////////
    const handleOk = e => {        
    const exp = {...experience,
                    start_date:experience.date[0].format("YYYY-MM-DD"),
                    end_date:experience.date[1].format("YYYY-MM-DD")
                }
           //////////////쓸데없는 값 삭제해주기////////////////
    delete exp['date']
    console.log(exp);
    //   console.log(e);
      setState({
        visible: false,
      });
            //////////////입력값 post하고 사이트에 띄우기////////////////
    Axios.post('http://127.0.0.1:8000/mysite/experience/', exp)
    .then(res => {
        return Axios.get('http://127.0.0.1:8000/mysite/experience/')
    }).catch(error => {        
        }).then (res => {
            const{data} = res
            setInfo(data)
        }).catch(error => {            
        });    
    };
     
/////////////////////////모달창 cancel이랑 연결/////////////////////////

    const handleCancel = e => {
      console.log(e);
      setState({
        visible: false,
      });
    };

/////////////////////////값 바뀔 때/////////////////////////

    const change  = (e) => {
        setExperience({
            ...experience,
            [e.target.name]:e.target.value
        });
    };
/////////////////////////달력에서 값이 바뀔 때/////////////////////////
    const changeDate = (e) => {
        setExperience({
            ...experience,
            date:e
        })
        // console.log(e[0].format("YYYY-MM-DD"));
        // console.log(e[1].format("YYYY-MM-DD"));
    }

/////////////////////////값 삭제하기/////////////////////////
    const deletelist = (id) => {
        Axios.delete('http://127.0.0.1:8000/mysite/experience/'+id)
    .then(res => {
        return Axios.get('http://127.0.0.1:8000/mysite/experience/')
    }).catch(error => {        
        }).then (res => {
            const{data} = res
            setInfo(data)
        }).catch(error => {            
        });    
    };
    


    return (
        <div>
            <Divider orientation="left">
                Experience
                <Tooltip title="add">
                        <Button className="add" onClick={showModal} shape="circle" icon={<PlusOutlined />} />
                </Tooltip>
            </Divider>
            <List
            size="small"
            header={
            <div class='first'>
                What I did
            </div>
            }
            bordered
            dataSource={info}
            renderItem={item => 
                <div className='lists'>
                    <List.Item>
                        {item.title}
                            <Button className="add" onClick={()=>{ deletelist(item.id) }} shape="circle" icon={<DeleteOutlined />} />
                    </List.Item>                        
                    <List.Item>{item.start_date}</List.Item>
                    <List.Item>{item.institution}</List.Item>
                    <List.Item>{item.memo}</List.Item>
                </div>}
            />
             <Modal
                title="Add Experience"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <div>
                    <div className='addlist'>
                    경험 제목
                    </div>
                    <Input onChange={change} name='title' value={experience.title} placeholder="Basic usage" style={{width:'300'}}/>
                </div>
                <div>
                    <div className='addlist'>
                        기간
                    </div>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                        name='when'
                        onChange={changeDate}
                        value={experience.date}
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format = {dateFormat}
                        />
                    </Space>
                </div>
                <div>
                    <div className='addlist'>
                    수행기관
                    </div>
                    <Input onChange={change} name='institution' value={experience.institution} placeholder="Basic usage" />
                </div>
                <div>
                    <div className='memo'>
                        메모
                    </div>
                        <TextArea 
                        onChange={change} 
                        name='memo'
                        value={experience.memo}
                        rows={4}
                        style={{ width: 300 }} />
                </div>
            </Modal>
        </div>
    )
}

