class VideoPlayer {
  options = {};
  constructor(options) {
    this.options = options;
    if (!options['selector']) {
      throw "selectoris required";
    }
    if (options['selector'].includes('.')) {
      this.playerContainerElements = document.querySelectorAll(`${options['selector']}`);
      this.playerContainerElements.forEach((item, index, elements) => {
        item.querySelector(`.play-button`).addEventListener('click', this.toggle);
      });
    }
  }

  toggle = (e) => {
    const playerContainer = e.target.closest(`${this.options['selector']}`);

    this.playerContainerElements.forEach((item) => {
      if (!item.isSameNode(playerContainer) && !item.querySelector('video').paused) {
        item.querySelector('video').pause();
        item.querySelector('.play-button').textContent = '►';
      }
    });

    const video = playerContainer.querySelector('video');
    if (video.paused) {
      video.play()
      e.target.textContent = '❚ ❚'
    } else {
      video.pause()
      e.target.textContent = '►'
    }
  }
  pause() {
    this.playerContainerElements.forEach((item) => {
      item.querySelector('video').pause();
      item.querySelector('.play-button').textContent = '►';
    });
  }

}
