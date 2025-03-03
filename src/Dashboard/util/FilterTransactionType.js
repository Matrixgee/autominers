export const filterTransactionType = (transactions, type) => {

	const filteredTransactions = transactions.filter(transaction => transaction.Transaction_Type === type);

	return filteredTransactions.length;
};