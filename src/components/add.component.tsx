import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/service.service";
import ITutorialData from '../types/products.type';

type Props = {};

type State = ITutorialData & {
  submitted: boolean
};

export default class Add extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeDatepost = this.onChangeDatepost.bind(this);
    this.onChangeDatestart = this.onChangeDatestart.bind(this);
    this.onChangeDateend = this.onChangeDateend.bind(this);
    this.onChangeNumberallowed = this.onChangeNumberallowed.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeVenue = this.onChangeVenue.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeLocation_Image = this.onChangeLocation_Image.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onChangeLocation_Video = this.onChangeLocation_Video.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeQrCodeImage = this.onChangeQrCodeImage.bind(this);
    this.onChangeWhoisposted = this.onChangeWhoisposted.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      idproduct: null,
      name: "",
      artist: "",
      year: "",
      datepost: "",
      datestart: "",
      dateend: "",
      numberallowed: null,
      venue: "",
      description: "",
      image: "",
      location_image: "",
      video: "",
      location_video: "",
      time: "",
      qrCodeImage: "",
      whoisposted: "",
      submitted: false,
    };
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeArtist(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      artist: e.target.value
    });
  }

  onChangeYear(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      year: e.target.value
    });
  }

  onChangeDatepost(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      datepost: e.target.value
    });
  }

  onChangeDatestart(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      image: e.target.value
    });
  }

  onChangeDateend(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      dateend: e.target.value
    });
  }

  onChangeNumberallowed(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      numberallowed: e.target.value
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeVenue(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      venue: e.target.value
    });
  }

  onChangeImage(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      image: e.target.value
    });
  }

  onChangeLocation_Image(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      location_image: e.target.value
    });
  }

  onChangeVideo(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      video: e.target.value
    });
  }

  onChangeLocation_Video(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      location_video: e.target.value
    });
  }

  onChangeTime(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      time: e.target.value
    });
  }

  onChangeQrCodeImage(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      qrCodeImage: e.target.value
    });
  }

  onChangeWhoisposted(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      whoisposted: e.target.value
    });
  }


  saveTutorial() {
    const data: ITutorialData = {
      name: this.state.name,
      artist: this.state.artist,
      year: this.state.year,
      datepost: this.state.datepost,
      datestart: this.state.datestart,
      dateend: this.state.dateend,
      numberallowed: this.state.numberallowed,
      venue: this.state.venue,
      description: this.state.description,
      image: this.state.image,
      location_image: this.state.location_image,
      video: this.state.video,
      location_video: this.state.location_video,
      time: this.state.time,
      qrCodeImage: this.state.qrCodeImage,
      whoisposted: this.state.whoisposted
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          name: response.data.name,
          artist: response.data.artist,
          year: response.data.year,
          datepost: response.data.datepost,
          datestart: response.data.datestart,
          dateend: response.data.dateend,
          numberallowed: response.data.numberallowed,
          venue: response.data.venue,
          description: response.data.description,
          image: response.data.image,
          location_image: response.data.location_image,
          video: response.data.video,
          location_video: response.data.location_video,
          time: response.data.time,
          qrCodeImage: response.data.qrCodeImage,
          whoisposted: response.data.whoisposted
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      idproduct: null,
      name: "",
      artist: "",
      year: "",
      datepost: "",
      datestart: "",
      dateend: "",
      numberallowed: null,
      venue: "",
      description: "",
      image: "",
      location_image: "",
      video: "",
      location_video: "",
      time: "",
      qrCodeImage: "",
      whoisposted: "",
      submitted: false,
    });
  }

  render() {
    const { 
      name,
      artist,
      year,
      datepost,
      datestart,
      dateend,
      numberallowed,
      venue,
      description,
      image,
      location_image,
      video,
      location_video,
      time,
      qrCodeImage,
      whoisposted,
      submitted,
    } = this.state;
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                className="form-control"
                id="artist"
                required
                value={artist}
                onChange={this.onChangeArtist}
                name="artist"
              />
            </div>


            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                className="form-control"
                id="year"
                required
                value={year}
                onChange={this.onChangeYear}
                name="year"
              />
            </div>

            <div className="form-group">
              <label htmlFor="datepost">Date Post</label>
              <input
                type="text"
                className="form-control"
                id="datepost"
                required
                value={datepost}
                onChange={this.onChangeDatepost}
                name="datepost"
              />
            </div>


            <div className="form-group">
              <label htmlFor="datestart">Date Start</label>
              <input
                type="text"
                className="form-control"
                id="datestart"
                required
                value={datestart}
                onChange={this.onChangeDatestart}
                name="datestart"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateend">Date End</label>
              <input
                type="text"
                className="form-control"
                id="dateend"
                required
                value={dateend}
                onChange={this.onChangeDateend}
                name="dateend"
              />
            </div>

            <div className="form-group">
              <label htmlFor="numberallowed">Number Allowed</label>
              <input
                type="text"
                className="form-control"
                id="numberallowed"
                required
                value={numberallowed}
                onChange={this.onChangeNumberallowed}
                name="numberallowed"
              />
            </div>

            <div className="form-group">
              <label htmlFor="venue">Venue</label>
              <input
                type="text"
                className="form-control"
                id="venue"
                required
                value={venue}
                onChange={this.onChangeVenue}
                name="venue"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                className="form-control"
                id="image"
                required
                value={image}
                onChange={this.onChangeImage}
                name="image"
              />
            </div>


            <div className="form-group">
              <label htmlFor="location_image">Location Image</label>
              <input
                type="text"
                className="form-control"
                id="location_image"
                required
                value={location_image}
                onChange={this.onChangeLocation_Image}
                name="location_image"
              />
            </div>


            <div className="form-group">
              <label htmlFor="video">Video</label>
              <input
                type="text"
                className="form-control"
                id="video"
                required
                value={video}
                onChange={this.onChangeVideo}
                name="video"
              />
            </div>


            <div className="form-group">
              <label htmlFor="location_video">Location Video</label>
              <input
                type="text"
                className="form-control"
                id="location_video"
                required
                value={location_image}
                onChange={this.onChangeLocation_Video}
                name="location_video"
              />
            </div>


            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="text"
                className="form-control"
                id="time"
                required
                value={location_image}
                onChange={this.onChangeTime}
                name="time"
              />
            </div>


            <div className="form-group">
              <label htmlFor="qrCodeImage">qrCode Image</label>
              <input
                type="text"
                className="form-control"
                id="qrCodeImage"
                required
                value={location_image}
                onChange={this.onChangeQrCodeImage}
                name="qrCodeImage"
              />
            </div>


            <div className="form-group">
              <label htmlFor="whoisposted">Who posted</label>
              <input
                type="text"
                className="form-control"
                id="whoisposted"
                required
                value={location_image}
                onChange={this.onChangeWhoisposted}
                name="whoisposted"
              />
            </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}