const githubPagesUrl = "https://saviocodes.github.io/saviofilho.dev";
const productionUrl = "https://saviofilho.dev";

export const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
export const siteUrl = isGitHubPagesBuild ? githubPagesUrl : productionUrl;
export const siteBasePath = isGitHubPagesBuild ? "/saviofilho.dev" : "";
