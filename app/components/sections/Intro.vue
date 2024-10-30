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
  padding: var(--spacing) 0;

  p {
    font-size: 1.5em;
  }

  .section-content {
    z-index: 1;
    position: relative;
  }

  .container {
    @keyframes headerTitle {
      100% {
        transform: translateY(-100%);
      }
    }

    @keyframes headerParagraph {
      100% {
        transform: translateY(-100%) scale(0.8);
      }
    }


    h1 {
      animation: headerTitle ease-in-out both;
      animation-timeline: scroll();
      animation-range: 0 50vh;
    }

    p {
      animation: headerParagraph ease-in-out both;
      animation-timeline: scroll();
      animation-range: 0 50vh;
    }
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
        transform: translateY(0%)
      }
    }

    @keyframes reveal-center {
      0% {
        transform: translateY(0%) scale(1) rotate(-10deg);
      }

      100% {
        transform: translateY(-50%) scale(1.5) rotate(10deg);
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
