import React, { Component } from 'react';
import { Page, Divider, Tabs, Tab, Gauge, Sankey, Bar, Line } from 'epm-ui';

const page = {
  title: "图表组件示例",
};

class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      barData: ""
    };
    this.fetchBarData = this.fetchBarData.bind( this );
  }

  componentDidMount() {
    this.fetchBarData( "asdf" );
  }

  fetchBarData( args ) {
    let formdata = new FormData();
    formdata.append( 'args', args );
    fetch( "/demo/charts/bar", { method: 'POST', credentials: 'same-origin', body: formdata } )
      .then( ( res ) => res.json() )
      .then( ( barData ) => this.setState( { barData } ) )
      .catch( ( err ) => console.error( err.toString() ) );
  }

  render() {
    return (
      <Page>
        <Divider/>
        <Tabs>
          <Tab title="折线图">
              <Line dataSource={ this.state.barData } />
          </Tab>
          <Tab title="柱状图">
            <Bar dataSource={ this.state.barData } />
          </Tab>
          <Tab title="仪表图" >
            <Gauge dataSource="/demo/charts/gauge" />
          </Tab>
          <Tab title="桑基图">
            <Sankey dataSource="/demo/charts/sankey" />
          </Tab>
        </Tabs>
        </Page>
    );
  }
}

IndexPage.epmUIPage = page;

export default IndexPage;
export { IndexPage };