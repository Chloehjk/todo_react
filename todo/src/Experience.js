import Axios from 'axios';
import React from 'react';
import { Divider, List, Button, Tooltip, Modal, Input, DatePicker, Space } from 'antd';
import { PlusOutlined, AudioOutlined } from '@ant-design/icons';
import moment from 'moment';


export default function Experience () {
    
    const [info, setInfo] = React.useState([]);
    const [state, setState] = React.useState({ visible: false });
    const {Search} = Input;
    const {RangePicker} = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    const {TextArea} = Input;
    const [experience, setExperience] = React.useState({
        title : '',
        date : [],
        institution : '',
        memo : ''
    })
    

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/experience/')
        .then(res => {
            const {data} = res;
            setInfo(data)
        }).catch(error => {            
        });
    },[])

   
    const showModal = () => {
      setState({
        visible: true,
      });
    };
  
    const handleOk = e => {
    console.log(experience)
    //   console.log(e);
      setState({
        visible: false,
      });
    };
  
    const handleCancel = e => {
      console.log(e);
      setState({
        visible: false,
      });
    };

    const change  = (e) => {

        console.log(e.target);

        setExperience({
            ...experience,
            [e.target.name]:e.target.value
        });
    };

    const changeDate = (e) => {
        setExperience({
            date:e
        })
        // console.log(e[0].format("YYYY-MM-DD"));
        // console.log(e[1].format("YYYY-MM-DD"));
    }
    
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
                <div>
                    <List.Item>{item.title}</List.Item>
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

