/* eslint-disable quotes */
import "../components/header-content.js";
import "../components/global-info.js";
import "../components/footer-content.js";
import "../components/local-info.js";

const local = () => {
  async function getData() {
    try {
      const response = await fetch(
        "https://covid19.mathdro.id/api/countries/Indonesia/"
      );
      const responseJson = await response.json();
      console.log(responseJson);
      document.querySelector("local-info").coronaItem = responseJson;
    } catch (error) {
      showMessage(error);
    }
  }

  const showMessage = (message) => {
    console.log(message);
  };

  getData();
};

export default local;
