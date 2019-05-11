import * as React from 'react';
import ReactTable from 'react-table';
import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
const TabData = [
  [
    {
      id: 'ID',
      Header: 'ID',
      accessor: (d) => d.lastName + ', ' + d.firstName
    },
    {
      id: 'ID Type',
      Header: 'ID Type',
      accessor: (d) => d.dateofBirth
    },
    {
      id: 'Name',
      Header: 'Name',
      accessor: (d) => d.ssn // Custom value accessors!
    },
    {
      id: 'Created Date',
      Header: 'Created Date', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Activity Type',
      Header: 'Activity Type', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Description',
      Header: 'Description', // Custom header components!
      accessor: (d) => d.matchPercentage
    },
    {
      id: 'Due Date',
      Header: 'Due Date', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Aging',
      Header: 'Aging', // Custom header components!
      accessor: (d) => d.gender
    }
  ],
  [
    {
      id: 'ID',
      Header: 'ID',
      accessor: (d) => d.lastName + ', ' + d.firstName
    },
    {
      id: 'ID Type',
      Header: 'ID Type',
      accessor: (d) => d.dateofBirth
    },
    {
      id: 'Name',
      Header: 'Name',
      accessor: (d) => d.ssn // Custom value accessors!
    },
    {
      id: 'Created Date',
      Header: 'Created Date', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Activity Type',
      Header: 'Activity Type', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Description',
      Header: 'Description', // Custom header components!
      accessor: (d) => d.matchPercentage
    },
    {
      id: 'Due Date',
      Header: 'Due Date', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Aging',
      Header: 'Aging', // Custom header components!
      accessor: (d) => d.gender
    }
  ],
  [
    {
      id: 'ID',
      Header: 'ID',
      accessor: (d) => d.lastName + ', ' + d.firstName
    },
    {
      id: 'ID Type',
      Header: 'ID Type',
      accessor: (d) => d.dateofBirth
    },
    {
      id: 'Name',
      Header: 'Name',
      accessor: (d) => d.ssn // Custom value accessors!
    },
    {
      id: 'Created Date',
      Header: 'Created Date', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Activity Type',
      Header: 'Activity Type', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Description',
      Header: 'Description', // Custom header components!
      accessor: (d) => d.matchPercentage
    },
    {
      id: 'Due Date',
      Header: 'Due Date', // Custom header components!
      accessor: (d) => d.gender
    },
    {
      id: 'Aging',
      Header: 'Aging', // Custom header components!
      accessor: (d) => d.gender
    }
  ]
];

export default class Inbox extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabIndex: -1
    };
  }
  handleTabClick = (tabIndex) => {
    this.setState({
      tabIndex
    });
  };

  render() {
    return (
      <div>
        <div>
          <div className='row'>
            <a href='javascript:void(0)' onClick={() => this.handleTabClick(0)}>
              <div
                className={`w3-hover-light-grey  w3-bottombar w3-padding tablink col-md-4 Inbox-TextStyle ${this.state
                  .tabIndex === 0
                  ? 'w3-border-red'
                  : ''}`}
              >
                Integrated Eligibility
                <p className='Inbox-TextStyle underline'>5</p>
              </div>
            </a>
            <a href='javascript:void(0)' onClick={() => this.handleTabClick(1)}>
              <div
                className={`w3-hover-light-grey  w3-bottombar w3-padding tablink col-md-4 Inbox-TextStyle ${this.state
                  .tabIndex === 1
                  ? 'w3-border-red'
                  : ''}`}
              >
                Child Welfare
                <p className='Inbox-TextStyle underline'>6</p>
              </div>
            </a>
            <a href='javascript:void(0)' onClick={() => this.handleTabClick(2)}>
              <div
                className={`w3-hover-light-grey  w3-bottombar w3-padding tablink col-md-4 Inbox-TextStyle ${this.state
                  .tabIndex === 2
                  ? 'w3-border-red'
                  : ''}`}
              >
                Child Support
                <p className='Inbox-TextStyle underline'>7</p>
              </div>
            </a>
            {this.state.tabIndex === 0 && (
              <div id='IE' className='prgrmName'>
                <ReactTable
                  noDataText='There are no IE records found'
                  showPagination={true}
                  className='-striped'
                  showPageSizeOptions={true}
                  pageSizeOptions={[ 5, 10, 20, 25, 50, 100 ]}
                  defaultPageSize={5}
                  columns={TabData[0]}
                  sortable={false}
                />
              </div>
            )}
            {this.state.tabIndex === 1 && (
              <div id='CW' className='prgrmName'>
                <ReactTable
                  noDataText='There are no CW records found'
                  showPagination={true}
                  className='-striped'
                  showPageSizeOptions={true}
                  pageSizeOptions={[ 5, 10, 20, 25, 50, 100 ]}
                  defaultPageSize={2}
                  columns={TabData[1]}
                  sortable={false}
                />
              </div>
            )}
            {this.state.tabIndex === 2 && (
              <div id='CS' className='prgrmName'>
                <ReactTable
                  noDataText='There are no CS records found'
                  showPagination={true}
                  className='-striped'
                  showPageSizeOptions={true}
                  pageSizeOptions={[ 5, 10, 20, 25, 50, 100 ]}
                  defaultPageSize={3}
                  columns={TabData[2]}
                  sortable={false}
                />
              </div>
            )}
          </div>
        </div>

        {/* <Tabs id="access-management-tabs" >
                    <Tab title="Integrated eligibility" animation mountOnEnter/>
                    <Tab title="Child Welfare" animation mountOnEnter/>
                    <Tab title="Child Support" animation mountOnEnter/>
                </Tabs> */}
        {/* <Container>
                        <Row>
                            <Col>Integrated eligibility</Col>
                            <Col>Child Welfare</Col>
                            <Col>Child Support</Col>
                        </Row>
                    </Container>; */}
      </div>
    );
  }
}
