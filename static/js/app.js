// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number GO TO
    // SOLVERD CODE to interperet mesaning of each cod
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    console.log(resultArray);
    console.log(result);
    //console.log(json.stringify(resultArray));
    // Use d3 to select the panel with id of `#sample-metadata`
    let sampleHTML = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    sampleHTML.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (resultSample in result) {
      sampleHTML.append("h6").text(`${resultSample.toUpperCase()}: ${result[resultSample]}`)
      
    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let sampleNum = samples.filter(sampleObj => sampleObj.id == sample);
    let result = sampleNum[0];
    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids
    let otu_labels = result.otu_labels
    let sample_values = result.sample_values

    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
  let names = data.names;
    // Use d3 to select the dropdown with id of `#selDataset`
  let selDataset = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
  for (let index = 0; index < names.length; index++) {
    selDataset.append("option").text(names[index]).property("value", names[index]);
    
  }

    // Get the first sample from the list
    let first = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(first);
    buildMetadata(first);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
