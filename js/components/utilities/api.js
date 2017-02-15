const api = {
  getRestaurants() {
    // var url = `http://23.253.253.107/query/v1.2/search?`;
    let url =`http://23.253.253.107/query/v1.2/search?apikey=88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064&lat=26.122438&lng=-80.137314&distance=5&cuisine=&name=&city=&state=&zip=`;
    return fetch(url).then((res) => res.json());
  },
};

module.exports = api;
