import React from "react";
import "./App.css";
import Tweet from "./components/tweet";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }
  componentDidMount() {
    var requests = [];
    for (var i = 0; i < 5; i++) {
      requests.push(
        axios.get("https://loripsum.net/api/1/short/prude/plaintext")
      );
    }
    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          this.setState({ tweets: responses });
        })
      )
      .catch(errors => console.log(errors));
  }

  render() {
    return (
      <div className="App">
        <h1>Kitten Lorem Twitter</h1>
        <Tweet
          key="1"
          profile_pic="https://placekitten.com/g/100/100"
          username="kittie kat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Memini vero, inquam; Praeteritis, inquit, gaudeo. Collatio igitur ista te nihil iuvat. Si quidem, inquit, tollerem, sed relinquo."
          datetime={Date.now()}
        />
        <Tweet
          key="2"
          profile_pic="https://placekitten.com/g/100/100"
          username="kittie kat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Memini vero, inquam; Praeteritis, inquit, gaudeo. Collatio igitur ista te nihil iuvat. Si quidem, inquit, tollerem, sed relinquo."
          datetime={Date.now()}
        />
        <Tweet
          key="3"
          profile_pic="https://placekitten.com/g/100/100"
          username="kittie kat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Memini vero, inquam; Praeteritis, inquit, gaudeo. Collatio igitur ista te nihil iuvat. Si quidem, inquit, tollerem, sed relinquo."
          datetime={Date.now()}
        />
        <Tweet
          key="4"
          profile_pic="https://placekitten.com/g/100/100"
          username="kittie kat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Memini vero, inquam; Praeteritis, inquit, gaudeo. Collatio igitur ista te nihil iuvat. Si quidem, inquit, tollerem, sed relinquo."
          datetime={Date.now()}
        />
        <Tweet
          key="5"
          profile_pic="https://placekitten.com/g/100/100"
          username="kittie kat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Memini vero, inquam; Praeteritis, inquit, gaudeo. Collatio igitur ista te nihil iuvat. Si quidem, inquit, tollerem, sed relinquo."
          datetime={Date.now()}
        />
      </div>
    );
  }
}

export default App;
