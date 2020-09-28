import Axios from 'axios';
import React from 'react';
import { Divider, List, Button, Tooltip, Modal, Input, Rate } from 'antd';
import { PlusOutlined, FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

export default function Skill () {
    
    const [info, setInfo] = React.useState([])
    const [skill, setSkill] = React.useState({
        certification : '',
        certification_num : '',
        programming: '',
        degree : '',
        memo : ''
    })
    const [state, setState] = React.useState({ visible: false });
    const {Search} = Input;
    const {TextArea} = Input;
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
      };

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/skill/')
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
        console.log(skill)
        console.log(e);
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
          setSkill(e.target.value);
      };


    return (
        <div>
            <Divider orientation="left">
                Skill                
                <Tooltip title="add">
                    <Button value="small" onClick={showModal} shape="circle" className="add" icon={<PlusOutlined />} />
                </Tooltip>  
            </Divider>
            <List
            size="small"
            header={
                    <div class='first'>
                        What can I do                  
                    </div>
                }
        
            bordered
            dataSource={info}
            renderItem={item => 
                <div>
                    <List.Item>{item.certification}</List.Item>
                    <List.Item>{item.certification_num}</List.Item>
                    <List.Item>{item.programming}</List.Item>
                    <List.Item>{item.degree}</List.Item>
                    <List.Item>{item.memo}</List.Item>
                </div>}
            />
            <Modal
                title="Add Skill"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <div className='list'>
                    <div className='addlist'>
                    자격증
                    </div>
                        <Input onChange={change} name='certification' value={skill.certification} placeholder="Basic usage" />
                    </div>
                <div className='list'>
                    <div className='addlist'>
                    자격증 번호
                    </div>
                    <Input onChange={change} name='certification_num' value={skill.certification_num} placeholder="Basic usage" />
                </div>
                <div className='list'>
                    <div className='addlist'>
                    프로그래밍 언어
                    </div>
                    <Input onChange={change} name='programming' value={skill.programming} placeholder="Basic usage" />
                </div>
                <div className='list'>
                    <div className='addlist'>
                        사용 능력 정도
                    </div>
                    <Rate
                    name='degree'
                    value={skill.degree}
                    defaultValue={2}
                    character={({ index }) => {
                        return customIcons[index + 1];
                    }}
                    />
                </div>
                <div className='list'>
                    <div className='memo'>
                        메모
                    </div>
                        <TextArea
                        onChange={change}
                        name='memo'
                        value={skill.memo}
                        rows={4}
                        style={{ width: 300 }} />
                </div>
            </Modal>
        </div>
    )
}