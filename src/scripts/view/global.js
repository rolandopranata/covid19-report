/* eslint-disable quotes */
const global = () => {
  async function getData() {
    try {
      const response = await fetch("https://covid19.mathdro.id/api");
      const responseJson = await response.json();
      console.log(responseJson);
      document.querySelector("global-info").coronaItem = responseJson;
    } catch (error) {
      showMessage(error);
    }
  }

  const showMessage = (message) => {
    console.log(message);
  };

  getData();
};

export default global;
