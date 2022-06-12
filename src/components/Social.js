import React,{ Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/TracyFinoana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          class="btnsame btn2"
          href="https://www.facebook.com/najoroarivelo.nambinintsoafinoana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-facebook"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://www.linkedin.com/in/nambinintsoa-finoana-najoroarivelo-86396120a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://www.instagram.com/finoana22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
