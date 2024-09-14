/**
 * Essential fetch APi
 */
class EsFetchApi {
  header = undefined;
  constructor() {
    this.header = new Headers();
    this.header["Content-Type"] = "application/json";
    this.header["Access-Control-Allow-Origin"] = "*";
  }
  setHeader = (header) => {
    this.header = { ...this.header, ...header };
  };

  getReqBody = (value) => {
    return JSON.stringify(value);
  };

  get = async (url) => {
    try {
      const request = new Request(url, { method: "GET", headers: this.header });

      const resp = await fetch(request);
      console.log("Get Fetch API ");
      return await resp.json();
    } catch (error) {
      // return error;
    }
  };

  post = async (url, body) => {
    try {
      const request = new Request(url, {
        method: "POST",
        headers: this.header,
      });
      request.body = this.getReqBody(body);

      const resp = await fetch(request);

      return await resp.json();
    } catch (error) {
      console.log("EsFetchApi POST ERROR ", error);
      // return error;
    }
  };

  put = async (url, body) => {
    try {
      const request = new Request(url, {
        method: "PUT",
        headers: this.header,
        body: this.getReqBody(body),
      });

      const resp = await fetch(request);

      return await resp.json();
    } catch (error) {
      console.log("EsFetchApi PUT ERROR ", error);
      // return error;
    }
  };

  delete = async (url) => {
    try {
      const request = new Request(url, {
        method: "PUT",
        headers: this.header,
      });

      const resp = await fetch(request);

      return await resp.json();
    } catch (error) {
      console.log("EsFetchApi PUT ERROR ", error);
      // return error;
    }
  };
}

const esFetchApi = new EsFetchApi();
export default esFetchApi;
