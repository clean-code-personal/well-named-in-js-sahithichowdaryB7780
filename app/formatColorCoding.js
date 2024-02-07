const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
const MinorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];
function manual(){
  let formatted_String="Formatted Color Coding\n";
  for (let majorIndex=0; majorIndex < MajorColorNames.length; majorIndex+1){
    for(let minorIndex=0; minorIndex < MinorColorNames.length;minorIndex+1){
      const pairNumber = majorIndex * MinorColorNames.length + (minorIndex + 1 );
      const colorPair = get ColorFromPairNumber(pairNumber);
      formatted_String += '[Pair Number:${pairNumber}]';
      formatted_String += 'Major Color: ${colorPair.majorColor},';
      formatted_String += 'Minor Color: ${colorPair.minorColor}\n';
    }
  }
  return formatted_String;
}
