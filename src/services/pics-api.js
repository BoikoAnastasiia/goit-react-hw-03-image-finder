import propTypes from "prop-types";

import axios from "axios";
const key = "3533171-8055817a9c2a16331b7f6fbf1";

const fetchPics = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${key}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}
`
    )
    .then((response) => response.data)
    .catch(console.log);
};

export default { fetchPics };

fetchPics.propTypes = {
  searchQuery: propTypes.string.isRequired,
  currentPage: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
};
