import React, { Component, lazy, Suspense } from 'react';

import {
  Col,
  Row,
} from 'reactstrap';
import tableau from "tableau-api";

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {  
    this.initViz()  
  }
  initViz() {  
    const vizUrl = "https://public.tableau.com/views/My_first_dashboard_15638891349800/Type"
   //const vizUrl = "https://public.tableau.com/views/test_book_15607886387310/Sheet1?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link";
    const vizContainer = this.vizContainer;  
    let viz = new window.tableau.Viz(vizContainer, vizUrl)  
    // const options = {
    //   hideTabs: true,
    //   width: "700px",
    //   height: "800px",
    //   onFirstInteractive: () => {
    //       const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
    //       const options = {
    //           ignoreAliases: false,
    //           ignoreSelection: false,
    //           includeAllColumns: false
    //       };
    //       sheet.getUnderlyingDataAsync(options).then((t) => {
    //           const tableauData = t.getData();
    //           let data = [];
    //           const pointCount = tableauData.length;
    //           for(let a = 0; a < pointCount; a++ ) {
    //               data = data.concat({
    //                   x: tableauData[a][0].value,
    //                   y: Math.round(tableauData[a][3].value,2)
    //               })
    //           };
    //       })
    //   }
    // };

    //let viz = new window.tableau.Viz(this.container, vizUrl, options);
  } 
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
          <div ref={(div) => { this.vizContainer = div }}>  
          </div>
              
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
