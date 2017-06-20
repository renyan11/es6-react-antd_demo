import React from 'react'
import {Table, Button} from 'antd'

const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">博客园</a>
            }
        }, {
            title: '操作',
            width: '20%',
            dataIndex: 'operate'
        }]

export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            loading: false,
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []

        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Ryan${i}`,
                age: 18,
                address: `南京市雨花台区铁心桥${i}号`,
                remark: 'http://www.cnblogs.com/luozhihao/',
                operate: '暂无'
            })
        }

        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    //Reload
    start = () => {
        this.setState({loading:false});
        //ajax here
        setTimeout(() => {
            this.setState({
                selectedRowKeys : [],
                loading :false,
            })
        },1000)
    }

    render() {
        const {loading, selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        const hasSelected = selectedRowKeys.length > 0 ;

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <div>
                <div style={{marginBottom: 16}}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>Reload</Button>
                    <span style={{marginLeft:10}}>{hasSelected ? `Selected ${selectedRowKeys.length} items`:''}</span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
            </div>
        )
    }
}
