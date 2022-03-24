import { Component, ChangeEvent, useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router-dom';


import TutorialDataService from "../services/service.service";
import ITutorialData from "../types/products.type";
//import QRCode from 'qrcode';

var QRCode = require('qrcode.react');

//import image from "../assets/product_images";
interface RouterProps { // type for `match.params`
  idproduct: string; // must be type `string` since value comes from the URL
}

//const QRCode = require('qrcode');
const url_details = "http://localhost:3000/detail/";
type Props = RouteComponentProps<RouterProps>;
const url = "http://localhost:8888/Product-Azure-PDO-master/Admin/";
const url_V = "//player.vimeo.com/video/";
//const qrcodeImage_url = "http://localhost:8888/Product-Azure-PDO-master/Admin/";

type State = {
  currentTutorial: ITutorialData;
  message: string;
}


export default class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocationVideo = this.onChangeLocationVideo.bind(this);
    this.onChangeQrCodeImage = this.onChangeQrCodeImage.bind(this);
    this.getTutorial = this.getTutorial.bind(this);

    this.state = {
      currentTutorial: {
        idproduct: null,
        name: "",
        artist: "",
        year: "",
        datepost: "",
        datestart: "",
        dateend: "",
        numberallowed: "",
        venue: "",
        description: "",
        image: "",
        location_image: "",
        video: "",
        location_video: "",
        time: "",
        qrCodeImage: "",
        whoisposted: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.idproduct);
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


  onChangeArtist(e: ChangeEvent<HTMLInputElement>) {
    const artist = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          artist: artist,
        },
      };
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          description: description,
        },
      };
    });
  }


  onChangeLocationVideo(e: ChangeEvent<HTMLInputElement>) {
    const location_video = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          location_video: location_video,
        },
      };
    });
  }

  onChangeQrCodeImage(e: ChangeEvent<HTMLInputElement>) {
    const qrCodeImage = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        qrCodeImage: qrCodeImage,
      },
    }));
  }

  onChangeLocationImage(e: ChangeEvent<HTMLInputElement>) {
    const location_image = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        location_image: location_image,
      },
    }));
  }



  getTutorial(idproduct: string) {
    TutorialDataService.get(idproduct)
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

  render() {
    const { currentTutorial } = this.state;
    const url_image = url + currentTutorial.location_image;
    const url_video = url_V + currentTutorial.location_video;
    const url_qr = url + currentTutorial.qrCodeImage;
    
    //qrcode
    const text = url_details + currentTutorial.idproduct;
    
    
    return (
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                  <div className="col-md-6">
                      <div className="images p-3">
                          <iframe className="embed-responsive-item" src={url_video} width="510" height="300"></iframe>
                          
                          <p className="about">{currentTutorial.description}</p>

                          <div className="text-center p-4"> 
                            {/* <img id="main-image" src={src} width="350"/>  */}
                            <QRCode value={text} />
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="product p-4">
                          <div className="mt-4 mb-3">
                              <h5 className="text-uppercase">{currentTutorial.name}</h5>
                          </div>
                          
                          <div className="text-center p-4"> 
                            <img id="main-image" src={url_image} width="350"/> 
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}