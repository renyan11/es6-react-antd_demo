import React from 'react'
import { Form, Icon, Input, Rate,Select, Checkbox, DatePicker, Col, Radio, Button, Modal,InputNumber ,Switch,Slider,Upload, message } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const RangePicker = DatePicker.RangePicker;

class myForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    // 选择select
    handleSelectChange = (value) => {
        console.log(`selected ${value}`)
    }

    // 提交表单
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('收到表单值：', this.props.form.getFieldsValue())

        this.props.form.resetFields()
    }


    // 显示弹框
    showModal = () => {
        this.setState({ visible: true })
    }


    // 隐藏弹框
    hideModal = () => {
        this.setState({ visible: false })
    }

    render() {
        // 定义表单属性
        const { getFieldProps,getFieldDecorator } = this.props.form

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        const success = function () {
            message.success('操作成功!');
        }

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    label="用户名"
                    {...formItemLayout}
                    >
                    {getFieldDecorator('username', {
                        rules: [
                        { required: true, message: 'Please write your username!' },
                        ],
                    })(
                    <Input prefix={<Icon type="user" style={{fontSize:13}}/>} placeholder="username please enter..."/>
                    )}
                </FormItem>

                <FormItem
                    id="control-input"
                    label="密码"
                    {...formItemLayout}
                    required>
                    <Input prefix={<Icon type="lock" style={{fontSize:13}}></Icon>} id="control-input" placeholder="password please enter..."
                    {...getFieldProps('password')} />
                </FormItem>

                <FormItem
                    label="日期选择框"
                    labelCol={{ span: 3 }}
                    required>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('startDate') } format="YYYY-MM-DD HH:mm:ss"/>
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('endDate')} />
                        </FormItem>
                    </Col>
                </FormItem>
                
                <FormItem
                    {...formItemLayout}
                    label="RangePicker"
                    >
                        <RangePicker {...getFieldProps('rangePicker')}/>
                </FormItem>

                <FormItem
                    id="control-textarea"
                    label="文本域"
                    {...formItemLayout}>
                    <Input type="textarea" id="control-textarea" rows="3" 
                    {...getFieldProps('content')} />
                </FormItem>

                <FormItem
                    label="Select 单选择器"
                    {...formItemLayout}>
                    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                        {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="Select[multiple]"
                    {...formItemLayout}
                    >
                    <Select mode="multiple" id="select-multiple" placeholder="please selects here">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="black">Black</Option>
                        <Option value="pink">Pink</Option>
                        <Option value="blue">Blue</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="rate stars"
                    {...formItemLayout}>
                    <Rate character={<Icon type="heart" />} allowHalf />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="InputNumber"
                    >
                    <InputNumber min={1} max={10} />
                    <span className="ant-form-text"> machines</span>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Switch"
                    >
                    <Switch />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Slider"
                    >
                    <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                </FormItem>

                <FormItem
                    label="Checkbox 多选框"
                    {...formItemLayout}
                    >
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem1')}>选项一</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem2')}>选项二</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem3')}>选项三</Checkbox>
                </FormItem>

                <FormItem
                    label="Radio 单选框"
                    {...formItemLayout} >
                    <RadioGroup defaultValue="b" {...getFieldProps('radioItem')}>
                        <Radio value="a">A</Radio>
                        <Radio value="b">B</Radio>
                        <Radio value="c">C</Radio>
                        <Radio value="d">D</Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Upload"
                    extra="longgggggggggggggggggggggggggggggggggg"
                    >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </FormItem>

                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit" onClick={success}>确定</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.showModal}>点击有惊喜</Button>
                </FormItem>
                {/*对话框*/}
                <Modal title="登录" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
                    这是一个modal
                </Modal>
            </Form>
        )
    }
}

{/*Form.create 包装的组件将会自带 this.props.form 属性*/}
myForm = Form.create()(myForm)

export default myForm