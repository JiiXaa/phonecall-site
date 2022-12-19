const express = require('express');
const app = express();
var fs = require('fs');

require('dotenv').config();

const PORT = process.env.PORT || 3030;

// middleware
app.use(express.json());
app.use(express.static('public'));

// STEP 1: Read the existing data from json file

let meeting_data = require('./meeting-data.json');

// API routes

app.get('/api/meetings', function (req, res) {
  fs.readFile('meeting-data.json', 'utf8', function (err, data) {
    res.status(200).json(JSON.parse(data));
  });
});

app.post('/api/meetings', function (req, res) {
  let join_id = req.body.join_id;
  console.log('that is the stuff', join_id);
  let joinMeetingData = {
    join_id,
  };
  res.status(200).json(joinMeetingData);

  // STEP 2: add new user data to users object using push method
  meeting_data.push(joinMeetingData) / // STEP 3: Writing data in a JSON file
    fs.writeFile('meeting-data.json', JSON.stringify(meeting_data), (err) => {
      if (err) throw err;

      console.log('Done writting JSON file');
    });

  // STEP 4: Write the new info in the text file named message

  fs.writeFile('./meeting-data.txt', JSON.stringify(meeting_data), (err) => {
    if (err) throw err;

    console.log('Done writting text file');
  });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
