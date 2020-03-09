export default {
  useCustomProperties: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#609",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#0cf",
        secondary: "#90c"
      }
    }
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit"
  },
  cards: {
    primary: {
      border: "2px solid",
      borderColor: "primary",
      padding: "16px",
      borderRadius: "5px"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary"
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
    }
  }
};
