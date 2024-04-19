// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const BASE_URL = "http://localhost:3000";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class sharebnbApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${sharebnbApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    console.log("url from request: ", url);

    return await resp.json();
  }

  /** POST add a new property */

  static async addProperty(data) {
    let res = await this.request(`properties/`, data, "POST");
    return res;
  }

  /** Get list of companies */

  static async getProperties(address = "") {
    const data = address ? { nameLike: address } : "";
    let res = await this.request("properties", data);
    return res.properties;
  }

  /** Get a company by handle */
  static async getProperty(id) {
    let res = await this.request(`properties/${id}`);
    return res.property;
  }

  /** Get an available property */
  static async getAvailableProperties(checkin_date, checkout_date) {
    let res = await this.request(`properties/${checkin_date}/${checkout_date}`);
    return res;
  }

  /** Get list of jobs */

  // static async getJobs(job = "") {
  //   const data = job ? { title: job } : "";
  //   const res = await this.request("jobs", data);
  //   return res.jobs;
  // }

  /** return token when user registers */

  static async register({ username, password, firstName, lastName, email }) {
    const res = await this.request(
      "auth/register",
      { username, password, firstName, lastName, email },
      "POST"
    );

    return res.token;
  }

  /** return token when user logs in */

  static async login({ username, password }) {
    const res = await this.request(
      "auth/token",
      { username, password },
      "POST"
    );

    return res.token;
  }

  /** get user info by username */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }


  /** return token when user logs in */
  static async login({ username, password }) {
    const res = await this.request(
      "auth/token",
      { username, password },
      "POST"
    );

    return res.token;
  }

  /**
   * Creates a booking
   * Receives {guest_username, property_id, checkin_date, checkout_date, total_price}
   */
  static async createBooking({
    guest_username,
    property_id,
    checkin_date,
    checkout_date,
    date_booked,
    price_night }) {
    const res = await this.request(
      "bookings/",
      {
        guest_username,
        property_id,
        checkin_date,
        checkout_date,
        date_booked,
        price_night,
      },
      "POST"
    );

    return res;
  }

}

export default sharebnbApi;