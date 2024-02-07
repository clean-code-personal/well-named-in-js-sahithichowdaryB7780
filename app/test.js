 function test(){
	                let pairNumber;
			pairNumber = 4;
            const testPair1 = getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
			console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "BROWN");

			pairNumber = 5;
            const testPair1 = getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
			console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "SLATEGRAY");
			 
			pairNumber = 23;
            const testPair1 = getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
			console.assert(testPair1.majorColor == "RED");
			console.assert(testPair1.minorColor == "GREEN");
	 
	               pairNumber = -1;
            const testPair1 = getColorFromPairNumber(pairNumber);
	    console.log('[In]Pair Number: ${pairNumber},[Out] Argument PairNumber:${pairNumber} is outside the allowed range');
	    console.assert(Argument PairNumber:${pairNumber} is outside the allowed range);
			 
            const testPair2 = new ColorPair();
			testPair2.majorColor="YELLOW";
			testPair2. minorColor ="GREEN";
            pairNumber =getPairNumberFromColor(testPair2);
            console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==18);

	   const testPair2 = new ColorPair();
			testPair2.majorColor="RED";
			testPair2. minorColor ="BLUE";
            pairNumber =getPairNumberFromColor(testPair2);
            console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==6);
	 
}
