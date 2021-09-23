class VideoPlayer {
  options = {};
  constructor(options) {
    this.options = options;
    if (!options['selector']) {
      throw "selector is required";
    }
    if (options['selector'].includes('.')) {
      this.playerContainerElements = document.querySelectorAll(`${options['selector']}`);
      this.playerContainerElements.forEach((item, index, elements) => {
        item.querySelector(`.play-button`).addEventListener('click', this.toggle);
        item.querySelector(`video`).addEventListener('click', this.toggle);
        item.querySelector('.play-button').innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><g></g><path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#ffffff" /></svg>`;
      });
    }
  }

  toggle = (e) => {
    const playerContainer = e.target.closest(`${this.options['selector']}`);

    this.playerContainerElements.forEach((item) => {
      if (!item.isSameNode(playerContainer) && !item.querySelector('video').paused) {
        item.querySelector('video').pause();
        item.querySelector('.play-button').innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><g></g><path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#ffffff" /></svg>`;
      }
    });

    const video = playerContainer.querySelector('video');
    if (video.paused) {
      video.play();
      playerContainer.querySelector('.play-button').innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><g></g><path d="M162.642 148.337h56.034v215.317h-56.034v-215.316z" fill="#ffffff" /><path d="M293.356 148.337h56.002v215.317h-56.002v-215.316z" fill="#ffffff" /></svg>`;
    } else {
      video.pause()
      playerContainer.querySelector('.play-button').innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><g></g><path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#ffffff" /></svg>`;
    }
  }
  pause() {
    this.playerContainerElements.forEach((item) => {
      item.querySelector('video').pause();
      item.querySelector('.play-button').innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><g></g><path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#ffffff" /></svg>`;
    });
  }

}
