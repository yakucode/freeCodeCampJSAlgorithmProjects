const currencies = {
	PENNY: 1,
	NICKEL: 5,
	DIME: 10,
	QUARTER: 25,
	ONE: 100,
	FIVE: 500,
	TEN: 1000,
	TWENTY: 2000,
	'ONE HUNDRED': 10000,
};

//third arg can be accessed by cid[x]
function checkCashRegister(price, cash, cid) {
	let unroundedChange = cash * 100 - price * 100;
	let changeSum = Math.round((unroundedChange + Number.EPSILON) * 100) / 100;
	//console.log(changeSum);
	let status = '';
	let change = [];

	/* Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
  This is done by adding up all of the amounts in cid. */
	let cidAmount = 0;
	for (let i = 0; i < cid.length; i++) {
		cidAmount += cid[i][1] * 100;
	}
	//round to 2 decimal
	let cidAmountRounded = Math.round((cidAmount + Number.EPSILON) * 100) / 100;
	//console.log(cidAmountRounded);
	//Now check if there is enough cash in cid to return money
	if (cidAmountRounded < changeSum) {
		console.log('STOPPED AT FIRST IF FOR INSUFFICIENT_FUNDS');
		return { status: 'INSUFFICIENT_FUNDS', change: [] };
	}
	let cidFinalRounded = 0;
	//iterate over cid, starting from one hundred
	for (let i = cid.length - 1; i >= 0; i--) {
		let amountCoinsBills = 0;
		/* Set name of current type to curType (eg PENNY)
    this way I only use those types available in cid. */
		let curType = cid[i][0];
		//How many coins/bills
		let curTypeAmount = cid[i][1] * 100;

		//check if changeSum can be decreased by curType
		//while (changeSum >= currencies[curType] && curTypeAmount >= changeSum)
		while (changeSum >= currencies[curType] && curTypeAmount != 0) {
			amountCoinsBills += currencies[curType];

			curTypeAmount -= currencies[curType];
			changeSum -= currencies[curType];
			cidAmountRounded -= currencies[curType];
		}
		cidFinalRounded = Math.round((cidAmountRounded + Number.EPSILON) * 100) / 100;
		//push only those coins/bills that are used
		if (amountCoinsBills != 0) {
			change.push([ curType, amountCoinsBills / 100 ]);
		}
	}

	if (changeSum != 0) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] };
	}

	/* Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due. */
	if (cidAmountRounded == 0) {
		change = cid;
		return { status: 'CLOSED', change };
	}

	/* Return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */
	if (cidAmountRounded > 0) {
		return { status: 'OPEN', change };
	}
}

console.log('>>>START<<<');
console.log(
	checkCashRegister(19.5, 20, [
		[ 'PENNY', 0.5 ],
		[ 'NICKEL', 0 ],
		[ 'DIME', 0 ],
		[ 'QUARTER', 0 ],
		[ 'ONE', 0 ],
		[ 'FIVE', 0 ],
		[ 'TEN', 0 ],
		[ 'TWENTY', 0 ],
		[ 'ONE HUNDRED', 0 ],
	]),
);

console.log('>>>END<<<');
