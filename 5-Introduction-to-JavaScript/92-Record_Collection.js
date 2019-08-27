//editing the record collection
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet"
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "album": "Riptide",
      "tracks": [
        "Addicted to Love",
       ]
    },
    "5439": {
      "album": "ABBA Gold",
      "artist": "ABBA",
      "tracks": [
        "Take a Chance on Me"]
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
