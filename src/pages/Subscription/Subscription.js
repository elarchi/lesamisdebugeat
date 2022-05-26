//Importation des feuilles de style
import "./subscription.scss";
//Importation des composants react
import { Link } from "react-router-dom";
//Importation des composants UI
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const Subscription = () => {
  const blue = {
    100: "#DAECFF",
    200: "#80BFFF",
    400: "#3399FF",
    600: "#0072E5",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E7EBF0",
    200: "#E0E3E7",
    300: "#CDD2D7",
    400: "#B2BAC2",
    500: "#A0AAB4",
    600: "#6F7E8C",
    700: "#3E5060",
    800: "#2D3843",
    900: "#1A2027",
  };

  const StyledInputRoot = styled("div")(
    ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        display: flex;
        font-weight: 500;
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[800] : grey[300]
        };
        border-radius: 8px;
        background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
        align-items: center;
        justify-content: center;
      
        &.${inputUnstyledClasses.focused} {
          outline: 3px solid ${
            theme.palette.mode === "dark" ? blue[600] : blue[100]
          };
        }
      
        &:hover {
          background: ${theme.palette.mode === "dark" ? "" : grey[100]};
          border-color: ${
            theme.palette.mode === "dark" ? grey[700] : grey[400]
          };
        }
      `
  );

  const StyledInputElement = styled("input")(
    ({ theme }) => `
        font-size: 0.875rem;
        font-family: inherit;
        font-weight: 400;
        line-height: 1.5;
        flex-grow: 1;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: inherit;
        border: none;
        border-radius: inherit;
        padding: 12px 12px;
        outline: 0;
      `
  );

  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    const { components, ...other } = props;
    return (
      <InputUnstyled
        components={{
          Root: StyledInputRoot,
          Input: StyledInputElement,
          ...components,
        }}
        {...other}
        ref={ref}
      />
    );
  });

  CustomInput.propTypes = {
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
      Input: PropTypes.elementType,
      Root: PropTypes.elementType,
      Textarea: PropTypes.elementType,
    }),
  };

  return (
    <div className="subscription__div container">
      <div className="quote__div">
        <hr />
        <p>
          “L’adhésion est de <span>10 euros</span>. Il est d’usage j’ajouter une
          somme, à l’appréciation de chacun (90 euros est l’usage) qui sera
          déductible de vos impôts à 66% (un justificatif vous sera envoyé).
          Cette somme servira à financer ou aider les projets retenus lors de
          l’AG qui se déroule en principe en août.”
        </p>
        <hr />
      </div>
      <div className="rules__div">
        <Link to="/" className="link">
          Connaître les status de l'association
        </Link>
        <Link to="/" className="link">
          Lire le règlement
        </Link>
        <Link to="/" className="link">
          Télécharger le bulletin d'adhésion papier
        </Link>
      </div>
      <form action="" className="form">
        <Box sx={{ display: "flex", "& > * + *": { ml: 1 } }}>
          <CustomInput id="outlined-start-adornment" />
        </Box>

        <Box sx={{ display: "flex", "& > * + *": { ml: 1 } }}>
          <CustomInput id="outlined-start-adornment" />
        </Box>

        <Box sx={{ display: "flex", "& > * + *": { ml: 1 } }}>
          <CustomInput id="outlined-start-adornment" />
        </Box>

        <Box sx={{ display: "flex", "& > * + *": { ml: 1 } }}>
          <CustomInput id="outlined-start-adornment" />
        </Box>
      </form>
    </div>
  );
};

export default Subscription;
