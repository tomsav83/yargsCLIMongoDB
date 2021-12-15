const yargs = require('yargs');
const connection = require('./db/connection');
const { addMovie } = require('./movie');

const app = async (args) => {
  try {
    if (args.add) {
      // call connection function and pass add function and movieObj

      const movieObj = { title: args.title, actor: args.actor };
      await connection(addMovie, movieObj);
    }
  } catch (error) {
    console.log(error);
  }
};
app(yargs.argv);
