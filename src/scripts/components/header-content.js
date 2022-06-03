import illustration from '../../assets/face-mask.svg';

class HeaderContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <div class="container-fluid bg-hero">
        <h1 class="fw-bold big-font text-center" data-aos="fade-down" data-aos-duration="2000">Cov19</h1>
        <div class="row align-items-center pt-5 pb-5">
            <div class="col-lg-7 col-sm-12 col-md-12">
              <h2 class="big-font fs-1 fw-bold" data-aos="fade-right" data-aos-duration="2000">Stay Save, Be Aware</h1>
              <p class="fs-5 lh-7 description-text" data-aos="fade-left" data-aos-duration="2000">Virus Corona atau COVID-19 adalah sebuah virus yang berasal dari Kota Wuhan, China. Virus ini menyebar melalui udara dan dengan cepat menyebar ke hampir seluruh negara dan akhirnya menjadi pandemi seperti sekarang.</p>
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" class="btn mt-2 btn-more" data-aos="fade-up" data-aos-duration="2000">Info Lainnya</a>
            </div>
            <div class="col-lg-5 col-sm-12 col-md-12">
                <img class="hero-image" data-aos="fade-left" data-aos-duration="2000" src="${illustration}" alt="Cov19">
            </div>
        </div>
    </div>`;
    }
}

customElements.define('header-content', HeaderContent);