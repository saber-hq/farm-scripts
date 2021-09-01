import { getFarmers } from "./getFarmers";

getFarmers()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.error(e));
