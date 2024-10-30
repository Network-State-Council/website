<template>
  <section class="intro">
    <div class="section-content">
      <div class="container">
        <h1><strong>Validating</strong> and <strong>connecting</strong> the <strong>digital nations</strong> of tomorrow
        </h1>
        <p>The Network State Council serves as the premier validation authority for emerging digital nations. Through
          decentralized governance and open-source tools, we empower communities to transform from online groups into
          recognized network states.</p>
      </div>
    </div>
    <div class="background">
      <img src="/assets/images/globe.png" alt="A digital world map">
    </div>
  </section>
</template>

<style lang="scss">
.intro {
  position: relative;
  // background-color: var(--secondary);
  padding: var(--spacing) 0;

  p {
    font-size: 1.5em;
  }

  .section-content {
    z-index: 1;
    position: relative;
  }

  .background {

    margin-bottom: -25%;

    z-index: 2;
    width: 100%;
    object-fit: contain;
    // aspect-ratio: 1/1;
    height: 75vh;
    max-height: 100vw;

    /// Css scroll animation
    view-timeline-name: --revealing-image;
    view-timeline-axis: block;
    animation: comeUp 1s forwards, linear reveal-center both;
    animation-timeline: none, --revealing-image;
    animation-range: none, entry 0% cover 100%;

    @keyframes comeUp {
      0% {
        transform: translateY(100%);
      }

      100% {
        transform: translateY(0%);
      }
    }

    @keyframes reveal-center {
      0% {
        transform: translateY(0%);
      }

      100% {
        transform: translateY(-50%);
      }
    }


    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

</style>
