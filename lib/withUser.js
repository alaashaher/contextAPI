

import React from "react";
import { ThemeContext } from "./theme-context";
import PropTypes from 'prop-types';

export function withUser(Component)  {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </ThemeContext.Consumer>
    );
  };
}

// withUser.propTypes = {
//   withUser: PropTypes.func.isRequired,
// };
