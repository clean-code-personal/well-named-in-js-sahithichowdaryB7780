function ColorPair(){
           this.majorColor;
           this.minorColor;
}
ColorPair.prototype.toString=function(){
	return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
}
function getColorFromPairNumber(pairNumber){
	const minorSize = MajorColorNames.length;
	const majorSize = MinorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
 	
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` }
	const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    const minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = MajorColorNames[majorIndex];
	pair.minorColor = MinorColorNames[minorIndex];
	return pair;}
function getPairNumberFromColor(pair){
        let majorIndex = -1;
        for (let i = 0; i < MajorColorNames.length; i++)
            {
                if (MajorColorNames[i] === pair.majorColor)
                {
                    majorIndex = i;
                    break;
                }
            }

        let minorIndex = -1;
            for (let i = 0; i < MinorColorNames.length; i++)
            {
                if (MinorColorNames[i] === pair.minorColor)
                {
                    minorIndex = i;
                    break;
                }
            }
    
        if (majorIndex === -1 || minorIndex === -1)
            {
                throw `Unknown Colors:${pair.toString()}`;
            }
return (majorIndex * MinorColorNames.length) + (minorIndex + 1);}
	 
	 

