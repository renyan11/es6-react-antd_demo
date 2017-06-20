import React from 'react'
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode

class myTree extends React.Component {
    constructor(props) {
        super(props)

    }

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }

    render () {
        return (
            <div style={{ width: "30%", margin: "0 auto",border:"1px dashed lightpink" }} >
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>ryan</span>} key="0-0-1-0" />
                    </TreeNode>
                    <TreeNode title="parent 1-2" key="0-0-2">
                        <TreeNode title={<span style={{ color: '#08d' }}>zzl</span>} key="0-0-1-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-3" key="0-0-3">
                        <TreeNode title={<span style={{ color: '#08e' }}>xw</span>} key="0-0-1-2" />
                    </TreeNode>
                    <TreeNode title="parent 1-4" key="0-0-4">
                        <TreeNode title={<span style={{ color: '#08f' }}>xsy</span>} key="0-0-1-3" />
                    </TreeNode>
                    </TreeNode>
                </Tree>
            </div>
        );
    }
}

export default myTree