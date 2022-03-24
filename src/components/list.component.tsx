import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/service.service";
import { Link, RouteComponentProps } from "react-router-dom";
import ITutorialData from '../types/products.type';
import { Table } from "react-bootstrap";
import axios from 'axios';

interface IState {
  customers: any[];
}
type Props = RouteComponentProps<RouterProps>;;
//type Props = RouteComponentProps<RouterProps>;

interface RouterProps { // type for `match.params`
  product_id: string; // must be type `string` since value comes from the URL
}

type State = {
  tutorials: Array<ITutorialData>,
  currentTutorial: ITutorialData | null,
  currentIndex: number,
  searchTitle: string
};


export default class List extends Component<Props, State>{
  // CONSTRUCTOR
  constructor(props: Props, props2: RouteComponentProps) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    
    this.state = {
      tutorials: [], 
      currentTutorial: null, 
      currentIndex: -1,
      searchTitle: ""};

    //this.state = {currentTutorial: {product_id: null, title: "", description: "", published: false,}};
  }


  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial: ITutorialData, index: number) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }


  // METHOD OR FUNCTION

  //DELETE
  //Issue a little about refreshing the url after clicking the delete
  public deleteCustomer(product_id: number) {
    TutorialDataService.delete(product_id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(e);
    });
  }


  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  // searchTitle() {
  //   this.setState({
  //     currentTutorial: null,
  //     currentIndex: -1
  //   });

  //   TutorialDataService.findByTitle(this.state.searchTitle)
  //     .then(response => {
  //       this.setState({
  //         tutorials: response.data
  //       });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByTitle(this.state.searchTitle)
      .then((response: any) => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div>
        
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
              </div>
            </div>

            <h4>Tutorials List</h4>
              <Table striped bordered hover>
                <thead key="thead">
                  <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Video</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Role Posted</th>
                  </tr>
                </thead>
                <tbody>
                  {tutorials && tutorials.map((tutorial: ITutorialData) => (
                    <tr>
                      <td>{tutorial.idproduct}</td>
                      <td>{tutorial.name}</td>
                      <td>{tutorial.location_video}</td>
                      <td>
                        {/* Look at url that same exacty for this */}
                        <Link to={`detail/${tutorial.idproduct}`} className="btn btn-sm btn-secondary">Detail</Link>
                      </td>
                      <td>
                        {/* Look at url that same exacty for this */}
                        <Link to={`edit/${tutorial.idproduct}`} className="btn btn-sm btn-success">Edit</Link>
                      </td>
                      <td>
                        {/* <Link to={`tutorials/${tutorial.product_id}`} className="btn btn-sm btn-outline-secondary">Edit</Link> */}
                        <button className="btn btn-sm btn-danger" onClick={() => this.deleteCustomer(tutorial.idproduct)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                  
                </tbody>
              </Table>
          <button className="m-3 btn btn-sm btn-danger"onClick={this.removeAllTutorials}>
            Remove All
          </button>
        </div>
      </div>
    );
  }
}


