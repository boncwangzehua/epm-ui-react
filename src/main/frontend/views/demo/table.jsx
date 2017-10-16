import React, { Component } from 'react';
import { Page, Divider, Table, Button, Column, Select, Option, context } from 'epm-ui';

class IndexPage extends Component {
  render() {
    return (
      <Page>
        <Divider />
        <Table dataSource={ `${ context.contextPath }/demo/table/table` } multiLine={ true } striped={ true }>
          <Column title="街道" dataIndex="street">
            { ( value ) => <a>{ value }</a> }
          </Column>
          <Column title="地址" dataIndex="village" />
          <Column title="单元" dataIndex="unit">
            { ( value ) => <Button> vlaue </Button> }
          </Column>
          <Column title="复选框" dataIndex="boolean">
            { ( value ) =>
              <Select placeholder="Please select" >
                <Option value="1">Options 1 </Option>
                <Option value="2">Options 2 </Option>
                <Option value="3">Options 3 </Option>
                <Option value="4">Options 4 </Option>
                <Option value="5">Options 5 </Option>
              </Select>
            }
          </Column>
        </Table>
      </Page>
    );
  }
  
}

IndexPage.epmUIPage = {
  title: "EPM UI"
};

export default IndexPage;
export { IndexPage };