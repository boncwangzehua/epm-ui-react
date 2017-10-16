import React, { Component } from 'react';
import { Page, Row, Container, Pagination, PagiTable, Modal, ModalBody, Label, Form, FormItem, Button, Col, Divider, Table, Column, context, Input } from 'epm-ui';
class Search extends Component{
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            total:props.total,
            pageIndex:1,
            InputValue:"",
            formData:{
                id:'',
                name:'',
                age:'',
                job:'',
                telephone:'',
                address:''
            },
            visible:false,
            requestPath:`${ context.contextPath }/tableData?index=1&size=5`,
        }
    }
    fetchPageTotal() {
        fetch && fetch( `${ context.contextPath }/getTableRows`, { credentials: 'same-origin' } )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    total:data
                })
            });
    }

    handleSearch(){
        console.log(`${ context.contextPath }/index`);
        this.setState( ( previousState, currentProps ) => {
            return { requestPath:`${ context.contextPath }/tableData?index=1&size=5&requestPath=`+this.state.InputValue };
        }, () => {
            this.fetchPageTotal();
        } );
    }

    handleChange(value){
        this.setState({
            InputValue:value
        })

    }
    handlePageChange(index,size){
        this.setState({
            pageIndex:index,
            requestPath:`${ context.contextPath }/tableData?index=`+index+`&size=`+size+`&requestPath=`+this.state.InputValue
        })

    }
    handleUpdate(value){
        this.setState({
            visible:!this.state.visible,
            formData:{
                id:value.id,
                name:value.name,
                age:value.age,
                job:value.job,
                telephone:value.telephone,
                address:value.address
            },
        });

    }
    handleDelete(id,name){
        if(confirm("确定要删除"+name+"吗"))
        {
            this.setState({
                requestPath:`${ context.contextPath }/tableData?index=`+this.state.pageIndex+`&size=5&requestPath=`+this.state.InputValue+`&id=`+id
            });
        }
    }
    handleAdd(){
        this.setState({
            formData:{
                name:'',
                age:'',
                job:'',
                telephone:'',
                address:''
            },
            visible: !this.state.visible
        })
    }
    handleClose(){
        console.log(this.state.visible);
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        return(
            <Page>
                <Container type="fixed">
                    <Divider/>
                    <Row>
                        <Col size={10}>
                            <Label>搜索框</Label>
                            <Input placeholder="请输入搜索内容" type="search" name="search" onChange={this.handleChange}/>
                            <Button type="default" onClick={this.handleSearch}>搜索</Button>
                            <Button type="default" onClick={this.handleAdd}>增加</Button>
                        </Col>
                    </Row>
                    <Divider/>
                    <Modal visible={ this.state.visible } onClose={ this.handleClose} >
                        <ModalBody>
                            <Form method="post" action={`${context.contextPath}/submitData`} >
                                <FormItem>
                                    <Input type="text" name="id" value={this.state.formData.id} />
                                </FormItem>
                                <FormItem>
                                    <Label>姓名</Label>
                                    <Input type="text" name="name" value={this.state.formData.name} />
                                </FormItem>
                                <FormItem>
                                    <Label>年龄</Label>
                                    <Input type="text" name="age" value={this.state.formData.age}/>
                                </FormItem>
                                <FormItem>
                                    <Label>工作</Label>
                                    <Input type="text" name="job" value={this.state.formData.job}/>
                                </FormItem>
                                <FormItem>
                                    <Label>电话</Label>
                                    <Input type="text" name="telephone" value={this.state.formData.telephone}/>
                                </FormItem>
                                <FormItem>
                                    <Label>地址</Label>
                                    <Input type="text" name="address" value={this.state.formData.address}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit" onClick={this.handleClose}>提交</Button>
                                <Button type="default" onClick={this.handleClose}>取消</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                    <Row>
                        <Col size={10}>
                            <Table dataSource={ this.state.requestPath } fixed={true}>
                                <Column title="姓名" dataIndex="name"/>
                                <Column title="年龄" dataIndex="age"/>
                                <Column title="工作" dataIndex="job"/>
                                <Column title="电话" dataIndex="telephone"/>
                                <Column title="地址" dataIndex="address"/>
                                <Column title="操作">
                                    {(value) =>
                                        <div>
                                            <Button type="primary" onClick={this.handleUpdate.bind(this,value)}>修改</Button>
                                            <Button type="danger" onClick={this.handleDelete.bind(this,value.id,value.name)}>删除</Button>
                                        </div>
                                    }
                                </Column>
                            </Table>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col size={4}></Col>
                        <Col size={8}>
                            <Pagination index={this.state.pageIndex} total={this.state.total} pages={5} size={5} onChange={this.handlePageChange}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        )
    }
}
export default Search;
export {Search}
