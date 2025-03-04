export default class VansService {
  // get all vans
  static async getAllVans() {
    const response = await fetch("/api/vans");
    if (!response.ok) {
      throw {
        message: "Failed to fetch vans.",
        statusText: response.statusText,
        status: response.status,
      };
    }
    const data = await response.json();

    return data.vans;
  }

  // get seperate van
  static async getVan(id) {
    const response = await fetch(`/api/vans/${id}`);
    const data = await response.json();

    return data.vans;
  }

  // get host vans
  static async getHostVans() {
    const response = await fetch("/api/host/vans");
    const data = await response.json();

    return data.vans;
  }
}
