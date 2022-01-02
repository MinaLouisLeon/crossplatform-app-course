const initialState = {
  pageData: {
    pageName: "LoginPage",
    pageTitle: "Sign in",
    mode : "ios",
    showSideMenu: false,
    showBackButton: false,
    backPage: "",
  },
};

const pageContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LoginPage":
      return {
        ...state,
        pageDate: {
          pageName: "LoginPage",
          pageTitle: "Sign in",
          mode : "ios",
          showSideMenu: false,
          showBackButton: false,
          backPage: "",
        },
      };
    case "ListProjectsPage":
      return {
        ...state,
        pageData: {
          pageName: "ListProjectsPage",
          pageTitle: "Projects",
          mode : action.mode,
          showSideMenu: true,
          showBackButton: false,
          backPage: "",
        },
      };
    case "AddProjectPage":
      return {
        ...state,
        pageData: {
          pageName: "AddProjectPage",
          pageTitle: "Add Project",
          mode : action.mode,
          showSideMenu: false,
          showBackButton: true,
          backPage: "ListProjectsPage",
        },
      };
    default:
      return state;
  }
};

export default pageContentReducer;
