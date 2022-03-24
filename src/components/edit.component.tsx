import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

import TutorialDataService from "../services/service.service";
import ITutorialData from "../types/products.type";

interface RouterProps { // type for `match.params`
  product_id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentTutorial: ITutorialData;
  message: string;
}

export default class Edit extends Component<Props, State> {
  // CONSTRUCTOR
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDiscountedPrice = this.onChangeDiscountedPrice.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeImage2 = this.onChangeImage2.bind(this);
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangeDisplay = this.onChangeDisplay.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    //this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);
    // this.state = {currentTutorial: {
    //   product_id: null, 
    //   name: "", 
    //   description: "", 
    //   price: null,
    //   discounted_price: null,
    //   image: "",
    //   image_2: "",
    //   thumbnail: "",
    //   display: "",
    //   // published: false,
    // },message: "",};
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.product_id);
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          name: name,
        },
      };
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

  onChangePrice(e: ChangeEvent<HTMLInputElement>) {
    const price = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        price: price,
      },
    }));
  }


  onChangeDiscountedPrice(e: ChangeEvent<HTMLInputElement>) {
    const discounted_price = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        discounted_price: discounted_price,
      },
    }));
  }


  onChangeImage(e: ChangeEvent<HTMLInputElement>) {
    const image = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        image: image,
      },
    }));
  }


  onChangeImage2(e: ChangeEvent<HTMLInputElement>) {
    const image_2 = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        image_2: image_2,
      },
    }));
  }

  onChangeThumbnail(e: ChangeEvent<HTMLInputElement>) {
    const thumbnail = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        thumbnail: thumbnail,
      },
    }));
  }

  onChangeDisplay(e: ChangeEvent<HTMLInputElement>) {
    const display = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        display: display,
      },
    }));
  }

  getTutorial(product_id: string) {
    TutorialDataService.get(product_id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // updatePublished(status: boolean) {
  //   // const data: ITutorialData = {
  //   //   product_id: this.state.currentTutorial.product_id,
  //   //   name: this.state.currentTutorial.name,
  //   //   description: this.state.currentTutorial.description,
  //   //   price: this.state.currentTutorial.price,
  //   //   discounted_price: this.state.currentTutorial.discounted_price,
  //   //   image: this.state.currentTutorial.image,
  //   //   image_2: this.state.currentTutorial.image_2,
  //   //   thumbnail: this.state.currentTutorial.thumbnail,
  //   //   display: this.state.currentTutorial.display,
  //   //   // published: status,
  //   // };

  //   TutorialDataService.update(data, this.state.currentTutorial.product_id)
  //     .then((response) => {
  //       this.setState((prevState) => ({
  //         currentTutorial: {
  //           ...prevState.currentTutorial,
  //           published: status,
  //         },
  //         message: "The status was updated successfully!"
  //       }));
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial,
      this.state.currentTutorial.idproduct
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.idproduct)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input type="text" className="form-control" id="name" value={currentTutorial.name} onChange={this.onChangeName}/>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" value={currentTutorial.description} onChange={this.onChangeDescription}/>
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                {/* <input type="text" className="form-control" id="price" value={currentTutorial.price} onChange={this.onChangePrice}/> */}
              </div>

              <div className="form-group">
                <label htmlFor="discounted_price">Discounted Price</label>
                {/* <input type="text" className="form-control" id="discounted_price" value={currentTutorial.discounted_price} onChange={this.onChangeDiscountedPrice}/> */}
              </div>

              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" value={currentTutorial.image} onChange={this.onChangeImage}/>
              </div>

              <div className="form-group">
                <label htmlFor="image_2">Image 2</label>
                {/* <input type="text" className="form-control" id="image_2" value={currentTutorial.image_2} onChange={this.onChangeImage2}/> */}
              </div>

              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                {/* <input type="text" className="form-control" id="thumbnail" value={currentTutorial.thumbnail} onChange={this.onChangeThumbnail}/> */}
              </div>

              <div className="form-group">
                <label htmlFor="display">Display</label>
                {/* <input type="text" className="form-control" id="display" value={currentTutorial.display} onChange={this.onChangeDisplay}/> */}
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {/* {currentTutorial.published ? "Published" : "Pending"} */}
              </div>
            </form>

            {/* {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )} */}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}