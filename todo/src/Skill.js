import Axios from 'axios';
import React from 'react';
import { Divider, List, Button, Tooltip, Modal, Input, Rate } from 'antd';
import { PlusOutlined, FrownOutlined, MehOutlined, SmileOutlined, DeleteOutlined, ToolOutlined } from '@ant-design/icons';

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
    const [modify, setModify] = React.useState({ visible: false });
    const {TextArea} = Input;
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
      };


/////////////////////////로그인 권한 주기//////////////////////
React.useEffect(() => {
    Axios.get('http://127.0.0.1:8000/mysite/skill/', {
        headers: {
            Authorization : "JWT " + window.localStorage.getItem("token")
        }
    }).then(res=>{
        const {data} = res;
        setInfo(prev => data);
    })        
},[])

/////////////////////////창이 만들어질 때/////////////////////////

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/skill/')
        .then(res => {
            const {data} = res;
            setInfo(data)
        }).catch(error => {            
        });
    },[])

/////////////////////////모달 창 생성/////////////////////////   
    const showModal = () => {
        setState({
          visible: true,
        });
      };
/////////////////////////모달 창 OK랑 연결/////////////////////////
    const handleOk = e => {
    // console.log(skill)
    setState({
        visible: false,
    });
    Axios.post('http://127.0.0.1:8000/mysite/skill/', skill)
    .then(res => {
        return Axios.get('http://127.0.0.1:8000/mysite/skill/')
    }).catch(error => {
        }).then(res => {
            const{data} = res
            setInfo(data)
        }).catch(error => {            
        });
    };

/////////////////////////모달창 cancel이랑 연결/////////////////////////
      const handleCancel = e => {
        console.log(e);
        setState({
          visible: false,
        });
      };

/////////////////////////값 바뀔 때/////////////////////////
    //   const change  = (e) => {
    //       setSkill(e.target.value);
    //   };
    const change = (event) => {        
        setSkill({
            ...skill,
            [event.target.name]:event.target.value
        });
    };
    
    const changeEmoji = (event) => {
           setSkill({
                ...skill,
                degree:event
            });
        console.log(event);
    };
/////////////////////////값 삭제하기/////////////////////////
    const deletelist = (id) => {
        Axios.delete('http://127.0.0.1:8000/mysite/skill/'+id)
    .then(res => {
        return Axios.get('http://127.0.0.1:8000/mysite/skill/')
    }).catch(error => {        
        }).then (res => {
            const{data} = res
            setInfo(data)
        }).catch(error => {            
        });   
    };    
/////////////////////////값 수정하기///////////////////////// 
    // const modifylist = (id) => {
    //     Axios.get('http://127.0.0.1:8000/mysite/skill/' + id)
    //     .then(res => {
    //         setSkill(res.data)
    //     })
    //     showModal()
    // }

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
                <div className='lists'>
                    <List.Item>
                        {item.certification}
                        <Button className="delete" onClick={()=>{ deletelist(item.id) }} shape="circle" icon={<DeleteOutlined />} />
                        <Button className="modify"  shape="circle" icon={<ToolOutlined />} />
                    </List.Item>
                    <List.Item>{item.certification_num}</List.Item>
                    <List.Item>{item.programming}</List.Item>
                    <List.Item>
                        ({item.degree}점/5점 만점)<br/>
                        <Rate
                        value={item.degree}
                        character={({ index }) => {
                            return customIcons[index + 1];
                        }} disabled/>                       
                    </List.Item>
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
                    onChange={changeEmoji}
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

            {/* <Modal
                title="Modify Skill"
                visible={modify.visible}
                onOk={handleModfiyOk}
                onCancel={handleModifyCancel}
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
                    onChange={changeEmoji}
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
            </Modal> */}
        </div>
    )
}