module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: "content",
        includes: "../src/templates",
        data: "../src/data",
        output: "build"
      }
    };
  
  };