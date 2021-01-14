const done = (dataSZ, fileStore) => {
  if (!dataSZ || !fileStore) {
    console.log('The directory you have chosen does not exists. Please choose another.');
  } else {
    console.log(`Downloaded and saved ${dataSZ} bytes to ${fileStore}`);
  }
};

module.exports = done;