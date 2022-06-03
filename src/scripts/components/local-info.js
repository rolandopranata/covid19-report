class LocalInfo extends HTMLElement {
    set coronaItem(item) {
        this._coronaItem = item;
        this.render();
    }

    render() {
        const date = new Date(this._coronaItem.lastUpdate).toLocaleDateString(
            'id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
        );
        this.innerHTML = `
    <div class="container-fluid pt-5 pb-5 text-center">
      <h2 class="title-font fs-2 mb-3">Indonesia Info</h2>
      <p class="date-text">Update terakhir pada  <span class="date-format">${date}</span></p>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="card bg-card" data-aos="fade-right" data-aos-duration="1000">
            <div class="card-body">
              <h3 class="card-title txt-confirmed">${this._coronaItem.confirmed.value}</h3>
              <p class="card-text text-light ">Terkonfirmasi</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="card bg-card" data-aos="zoom-in" data-aos-duration="1000">
            <div class="card-body">
              <h3 class="card-title txt-dead">${this._coronaItem.deaths.value}</h3>
              <p class="card-text text-light ">Meninggal</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="card bg-card" data-aos="fade-left" data-aos-duration="1000">
            <div class="card-body">
              <h3 class="card-title txt-recovered">${this._coronaItem.recovered.value}</h3>
              <p class="card-text text-light ">Sembuh</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    }
}

customElements.define('local-info', LocalInfo);